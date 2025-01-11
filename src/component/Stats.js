import React from "react";

function Stats() {
  const stats = [
    { label: "# New Units", value: "379" },
    { label: "New Avg. MSRP", value: "$13,023,46" },
    { label: "# Used Units", value: "67" },
    { label: "Used MSRP", value: "$1,576,456" },
    { label: "CPO Units", value: "1" },
    { label: "CPO MSRP", value: "$31,200" }
  ];

  return (
    <div className="grid grid-cols-6 gap-4 mt-4">
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className="bg-white shadow rounded p-4 flex flex-col items-center justify-center"
      >
        <h2 className="text-lg font-semibold">{stat.value}</h2>
        <p className="text-gray-600 text-sm">{stat.label}</p>
      </div>
    ))}
  </div>
  );
}
export default Stats