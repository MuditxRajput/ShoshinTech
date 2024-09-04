import AnnoucementCards from "../AnnoucementCards/page";
import Cards from "../Cards/page";
import GrowthCards from "../GrowthCards/page";

const LeftSidePanel = () => {
    const data = {
        name :" ",
        date : " ",
    }
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-6 p-1">
        <div className="flex-1">
          <Cards
            name="Available Position"
            opening="24"
            desc="4 Urgently needed"
            bgColor="bg-red-50"
            openingColor="text-red-600"
          />
        </div>

        <div className="flex-1">
          <Cards
            name="Job Open"
            opening="10"
            desc="4 Active hiring"
            bgColor="bg-blue-50"
            openingColor="text-blue-600"
          />
        </div>

        <div className="flex-1">
          <Cards
            name="New Employees"
            opening="24"
            desc="4 Department"
            bgColor="bg-pink-50"
            openingColor="text-pink-600"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-10 px-1 flex-col sm:flex-row mb-10">
        <GrowthCards
          title="Total Employees"
          value="216"
          subStats={["120 Men", "96 Women"]}
          growthPercentage="+2%"
          pastMonth="+2%"
        />
        <GrowthCards
          title="Talent Request"
          value="16"
          subStats={["6 Men", "10 Women"]}
          growthPercentage="+5%"
          pastMonth="+5%"
        />
      </div>
      <div>
        <AnnoucementCards data={{ name: "Announcement", date: "13 Sep 2021",value:[{name:"Outing schedule for every department",time:"5 Minutes ago"},{name:"Meeting HR Department",time:"Yesterday, 12:30 PM"},{name:"IT Department need two more talents for UX/UI Designer position",time:"Yesterday, 09:15 AM"}] }} />
      </div>
    </>
  );
};

export default LeftSidePanel;