// AnnoucementCards.js
import { BsThreeDots } from "react-icons/bs";
import { RiPushpinFill } from "react-icons/ri";
const AnnoucementCards = ({ data }) => {
  return (
    <div className=" rounded-md border-2 border-slate-200 p-4 mt-6">
      <div className="flex justify-between mb-5">
        <p className="text-xl font-semibold">{data.name}</p>
        <div>
          <p className="text-sm">Today, {data.date}</p>
        </div>
      </div>
      <div className="flex gap-3 flex-col ">
        {data?.value?.map((val) => {
          return (
            <div className=" bg-slate-200 rounded-md p-2 flex justify-between ">
              <div>
                <p>{val.name}</p>
                <p className="text-xs">{val.time}</p>
              </div>
              <div className=" flex justify-center gap-2">
                <RiPushpinFill/>
                <BsThreeDots/>
              </div>
             
            </div>
            
          );
        })}
      </div>
      {data?.Priority ? <div className="flex gap-3 flex-col mb-5">
        <p>Priority</p>
        {data?.Priority?.map((val) => {
          return (
            <div className=" bg-slate-200 rounded-md p-2 flex justify-between ">
              <div>
                <p>{val.name}</p>
                <p className="text-xs">{val.time}</p>
              </div>
              <div className=" flex justify-center gap-2">
                <RiPushpinFill/>
                <BsThreeDots/>
              </div>
             
            </div>
            
          );
        })}
      </div> : null}
      
      {data?.Other ? <div className="flex gap-3 flex-col ">
        <p>Other</p>
        {data?.Other?.map((val) => {
          return (
            <div className=" bg-slate-200 rounded-md p-2 flex justify-between ">
              <div>
                <p>{val.name}</p>
                <p className="text-xs">{val.time}</p>
              </div>
              <div className=" flex justify-center gap-2">
                <RiPushpinFill/>
                <BsThreeDots/>
              </div>
             
            </div>
            
          );
        })}
      </div> : null}
      
        {data?.Other ?<div className="flex justify-center items-center mt-2 text-orange-500 font-semibold">
               Create a New Schedule
              </div> : <div className="flex justify-center items-center mt-2 text-orange-500 font-semibold">
                Sell All Annoucement
              </div>}

    </div>
  );
};

export default AnnoucementCards;
