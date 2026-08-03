import { XIcon } from "lucide-react";
import React from "react";
import { Form } from "react-router-dom";

const AddBudget = ({ onClose }) => {
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
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="col-span-2">
            <h3 className="labels">Create Budget</h3>
            <div className="flex h-fit max-w-sm place-items-baseline">
              <span className="inline-flex px-4 text-md">
                $
              </span>
              <input
                id="budgetTitle"
                className="inline-flex w-full mt-3 border-black rounded border p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none before:content-['$'] pl-2"
                type="number"
                placeholder="Enter Budget Amount"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBudget;
