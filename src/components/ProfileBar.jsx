import { Bell, UserCircleIcon } from "lucide-react";
import React from "react";

export default function ProfileBar() {
  return (
    <div className="flex w-full justify-between items-center p-6">
      <UserCircleIcon size={30} color="pink" />
      <Bell size={30} color="pink" />
    </div>
  );
}
