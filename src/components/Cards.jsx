import { cards } from "@/utils/Cards";

export default function Cards() {
  return (
    <>
      <div className="mt-10 w-full flex flex-wrap gap-8 justify-center lg:justify-evenly xl:justify-between">
        {cards.map((item, index)=>{
          return (
            
            <div key={index} className="flex flex-col flex-1 min-w-full md:min-w-[350px] max-w-[436px] w-full bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-4 h-32 pl-8">
            {item.svgComp}
            <div className="flex flex-col">
              <div className="text-[20px] font-extrabold">{item.total}</div>
              <div className="text-sm text-[#848e98]">Total {item.title}</div>
            </div>
          </div>
          <div className="border-t-[1px] border-[rgba(180,185,201,0.5)] flex h-16 items-center justify-center ">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="font-extrabold">{item.positiveValue}</div>
              <div className="font-sm text-[#848e98]">{item.isActive?'Active':'Subscribed'}</div>
            </div>
            <div class="h-[34px] w-[1px] bg-[rgba(180,185,201,0.5)]"></div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="font-extrabold">{item.negativeValue}</div>
              <div className="font-sm text-[#848e98]">{item.isActive?'InActive':'Unsubscribed'}</div>
            </div>
          </div>
        </div>
            
          )
        })}
      </div>
    </>
  );
}
