import React from "react";

export default function CategorySection() {
  const categorySection = [
    {
      title: "Groceries",
      data: 2000,
      total: 3000,
    },
    {
      title: "Entertainment",
      data: 100,
      total: 200,
    },
    {
      title: "Rent",
      data: 100,
      total: 200,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {categorySection.map((cat) => {
        const percent = (cat.data / cat.total) * 100;

        return (
          <div key={cat.title} className="rounded-xl bg-gray-400 p-4 shadow">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold text-white">{cat.title}</p>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-black">
              <div
                className="h-full rounded-full bg-[#febcfc] transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>

            <p className="text-sm text-gray-600 pt-4">
              ${cat.data.toLocaleString()} / ${cat.total.toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
