import ActivityCard from "../ActivityCard/page";
import AnnoucementCards from "../AnnoucementCards/page";

const RightSidePanel = () => {
  return (
    <div className=" flex flex-col md:flex-row lg:flex-col p-1 gap-3">
      <div className="mt-6">
        <ActivityCard />
      </div>
      <div>
        <AnnoucementCards
          data={{
            name: "Upcoming Schedule",
            date: "13 Sep 2021",
            Priority: [
              { name: "Review candidate applications", data: "11:30 AM" },
            ],
            Other: [
              { name: "Interview with candidates", time: "10:30 AM" },
              {
                name: "Short meeting with product designer from IT department",
                time: "09:15 AM",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default RightSidePanel;
