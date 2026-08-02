import { XIcon } from "lucide-react";
import React from "react";

const AddBudget = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-xl animate-slide-up">
        <div className="flex items-center">
          <div className="mx-auto h-1.5 w-12 rounded-full bg-gray-300" />
          <XIcon onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default AddBudget;
