import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="w-full h-[76px] bg-white flex items-center justify-end shadow-sm p-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center h-[40px] gap-4">
            <div className="relative w-[40px] h-[40px]">
              <Image
                className="rounded-full object-cover"
                src={"/profilePic.png"}
                fill
                alt="profile pic"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm">Muhammad Hamza</div>
              <div className="text-[#848e98] text-xs">Account Settings</div>
            </div>
          </div>
          <div className="flex items-center relative w-[20px] h-[20px]">
            <Image
              className="rounded-full object-cover"
              src={"/dropdown.png"}
              fill
              alt="profile pic"
            />
          </div>
        </div>
      </header>
    </>
  );
}
