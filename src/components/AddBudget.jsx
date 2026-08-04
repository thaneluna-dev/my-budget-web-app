import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";

const AddBudget = ({ onClose, isName }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const dropdownValues = [
    { freq: "Monthly" },
    { freq: "Weekly" },
    { freq: "Daily" },
  ];

  const [value, setValue] = useState("");
  const [budgetType, setBudgetType] = useState(dropdownValues[0].freq);

  const handleOnChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");

    if (digits.length <= 2) {
      setValue(digits);
      return;
    }

    setValue((Number(digits) / 100).toFixed(2));
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-xl animate-slide-up">
        <div className="flex items-center">
          <div className="mx-auto h-1.5 w-12 rounded-full bg-gray-300" />
          <XIcon onClick={onClose} />
        </div>

        {isName === "Budget" ? (
          <div className="grid grid-cols-2 grid-rows">
            <div className="col-span-2">
              <h3 className="labels justify-self-center">Add a budget</h3>
              <div className="grid grid-rows-2 h-fit max-w-sm place-items-baseline">
                <div className="inline-flex row-start-1">
                  <label className="pr-5">Budget Type</label>
                  <select
                    id="select"
                    name="selected"
                    onChange={(e) => {
                      setBudgetType(e.target.value);
                      console.log("Selected:", e.target.value);
                    }}
                    className="border border-black rounded-[5px]"
                  >
                    {dropdownValues.map((val) => (
                      <option key={val.freq} value={val.freq}>
                        {val.freq}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="inline-flex row-start-2 items-center">
                  <label className="pr-5">Budget Amount</label>
                  <input
                    id="budgetTitle"
                    className="w-full mt-3 border-black rounded border p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none before:content-['$'] pl-2"
                    type="text"
                    placeholder="Enter Budget Amount"
                    onChange={(e) => handleOnChange(e)}
                    value={`$${value}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AddBudget;
