
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const GrowthCards = ({ title, value, subStats, growthPercentage, pastMonth }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex-1 shadow-black">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <div className="flex items-baseline mb-2">
        <span className="text-3xl font-bold text-gray-900 mr-2">{value}</span>
        <span className="text-sm text-green-500 flex items-center">
          <ArrowUpIcon />
          {growthPercentage}
        </span>
      </div>
      <div className="text-sm text-gray-500">
        {subStats?.map((stat, index) => (
          <div key={index}>{stat}</div>
        ))}
      </div>
      <div className="mt-2 text-xs text-black bg-orange-100 inline-block px-2 py-1 rounded">
        {pastMonth} Past month
      </div>
    </div>
  );
};

export default GrowthCards;