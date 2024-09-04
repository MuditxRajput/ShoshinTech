import LeftSidePanel from "../LeftSidePanel/page";
import RightSidePanel from "../RightSidePanel/page";

const Panel = () => {
  return (
    <div className="p-10">
      <h3 className="font-semibold text-2xl mb-6">Dashboard</h3> 
      <div className="flex flex-col lg:flex-row h-screen gap-5">
        <div className="flex-1   ">
          <LeftSidePanel />
        </div>
        <div className=" ">
          <RightSidePanel />
        </div>
      </div>
    </div>
  );
};

export default Panel;
