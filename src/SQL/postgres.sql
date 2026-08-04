CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    full_name VARCHAR(120),
    email VARCHAR(50) UNIQUE
);

CREATE TABLE budget (
    id SERIAL PRIMARY KEY,
    budget_type VARCHAR(50) NOT NULL,
    budget_amount DECIMAL(10, 2) NOT NULL,
    budget_spent DECIMAL(10, 2) DEFAULT 0,
    user_id INT,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);