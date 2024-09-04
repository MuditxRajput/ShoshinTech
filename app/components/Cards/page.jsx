const Cards = ({ name, opening, desc, bgColor, openingColor }) => {
    return (
      <div className={`p-6 rounded-lg shadow-md ${bgColor} w-full max-w-xs`}>
        <h4 className="text-gray-800 text-lg font-medium mb-2 whitespace-nowrap">{name}</h4>
        <p className={`text-3xl font-bold ${openingColor}`}>{opening}</p>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    );
  };
  
  export default Cards;
  