const ActivityCard = () => {
    return (
      <div className="bg-blue-950 rounded-lg p-6 shadow-lg">
        <div className="mb-6">
          <p className="text-2xl text-white font-bold">Recent Activity</p>
        </div>
        <div className=" rounded-lg">
          <p className="text-xs text-gray-300 mb-2">10:40 AM, Fri 10 Sept 2021</p>
          <p className="text-lg text-white font-semibold mb-2">You Posted a New Job</p>
          <p className="text-sm text-gray-200 font-light leading-relaxed">
            Kindly check the requirements and terms of work <br></br>and make sure everything is correct.
          </p>
          <div className="flex justify-between items-center mt-6 gap-3">
            <p className="text-sm text-gray-400">Today you made 12 activities</p>
            <button className="bg-orange-600 hover:bg-orange-700 transition-colors rounded-md text-white font-medium text-sm px-4 py-2">
              See All Activity
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActivityCard;
  