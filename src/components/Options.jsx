import { options } from "@/utils/OptionsData";
import Image from "next/image";
import React from "react";

export default function Options() {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {options.map((item, index)=>{
              return(
              
                <div key={index} className="w-72 h-20 bg-white flex items-center rounded-lg gap-2 p-4">
                  <div className="relative w-[36px] h-[36px]">
                    <Image
                      className="rounded-full object-cover"
                      src={`/${item.imageName}`}
                      fill
                      alt="manageUsers pic"
                    />
                </div>
                <div className="text-normal">{item.optionName}</div>
                </div>
                
              )
          })}
        </div>
      </div>
    </>
  );
}
