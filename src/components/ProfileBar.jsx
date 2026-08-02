import { Bell, UserCircleIcon } from "lucide-react";
import React from "react";

export default function ProfileBar() {
  return (
    <div className="flex w-full justify-between items-center p-6">
      <h1 id="title">Budgeter</h1>
      <div className="inline-flex items-center justify-center rounded-full bg-gray-600 p-2">
        <Bell size={24} color="pink" />{" "}
      </div>
    </div>
  );
}
