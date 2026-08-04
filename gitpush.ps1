param(
    [Parameter(Mandatory = $false)]
    [string]$CommitMessage = "Automated commit",
    [Parameter(Mandatory = $false)]
    [string]$GITHUB_REPOSITORY
)

# Verify Git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git is not installed or is not in the system PATH."
    exit 1
}

# Verify this is a Git repository
if (-not (Test-Path ".git")) {
    Write-Error "The specified folder is not a Git repository."
    exit 1
}

# Verify remote exists
Write-Host "Checking Git remote..."

$remote = git remote get-url origin 2>$null

if (-not $remote) {
    Write-Host "No remote found. Creating GitHub repository..."

    if (-not $GITHUB_REPOSITORY) {
        Write-Error "GITHUB_REPOSITORY was not provided."
        exit 1
    }

    gh repo create $GITHUB_REPOSITORY --public --source=. --remote=origin --push
    exit 0
}


# Ensure .gitignore exists
$gitignorePath = ".gitignore"

if (-not (Test-Path $gitignorePath)) {
    Write-Error ".gitignore does not exist."
    exit 1
}


Write-Host "`nReading .gitignore..."

$ignoreRules = Get-Content $gitignorePath |
    Where-Object {
        $_ -and
        $_ -notmatch "^#" -and
        $_ -notmatch "^\s*$"
    }


Write-Host "`nRemoving ignored items from Git tracking..."

foreach ($rule in $ignoreRules) {

    # Remove leading slash for filesystem path
    $path = $rule.TrimStart("/")

    # Skip wildcard-only rules
    if ($path -notmatch "[\*\?]") {

        if (Test-Path $path) {

            Write-Host "Untracking: $path"

            if ((Get-Item $path).PSIsContainer) {
                git rm -r --cached --ignore-unmatch $path
            }
            else {
                git rm --cached --ignore-unmatch $path
            }
        }
    }
}


Write-Host "`nAdding changes..."

git add .


# Show ignored files for debugging
Write-Host "`nIgnored files:"
git status --ignored


# Check for changes
git diff --cached --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit."
    exit 0
}


Write-Host "`nCommitting..."

git commit -m $CommitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Error "Commit failed."
    exit 1
}


$branch = git rev-parse --abbrev-ref HEAD

Write-Host "`nPushing to origin/$branch..."

git push origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nPush completed successfully!"
}
else {
    Write-Error "Push failed."
    exit 1
}