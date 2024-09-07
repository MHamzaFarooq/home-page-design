import Image from "next/image";
import React from "react";

export default function Options() {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/manageUsers.png"}
                fill
                alt="manageUsers pic"
              />
            </div>
            <div className="text-normal">Manage Users</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/privacy.png"}
                fill
                alt="privacy pic"
              />
            </div>
            <div className="text-normal">Privacy Settings</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/developer.png"}
                fill
                alt="developer pic"
              />
            </div>
            <div className="text-normal">Developer Options</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/marketplace.png"}
                fill
                alt="marketplace pic"
              />
            </div>
            <div className="text-normal">Marketplace</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/promptMarketplace.png"}
                fill
                alt="promptMarketplace pic"
              />
            </div>
            <div className="text-normal">Prompts Marketplace</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/promptBuilder.png"}
                fill
                alt="promptBuilder pic"
              />
            </div>
            <div className="text-normal">Prompt Builder</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/vectorVault.png"}
                fill
                alt="vectorVault pic"
              />
            </div>
            <div className="text-normal">Vector Vault</div>
          </div>
          <div className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
            <div className="relative w-[36px] h-[36px]">
              <Image
                className="rounded-full object-cover"
                src={"/logs.png"}
                fill
                alt="logs pic"
              />
            </div>
            <div className="text-normal">Logs</div>
          </div>
        </div>
      </div>
    </>
  );
}
