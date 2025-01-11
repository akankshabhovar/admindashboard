import React from "react";

const HistoryLog = () => {
  const tableData = [
    {
      date: "Mar 10, 24",
      newInventory: 241,
      newTotalMSRP: "$9,109,873",
      newAverageMSRP: "$37,800",
      usedInventory: 83,
      usedTotalMSRP: "$2,274,985",
      usedAverageMSRP: "$27,409",
      cpoInventory: 17,
      cpoTotalMSRP: "$437,488",
      cpoAverageMSRP: "$25,735",
    },
    // Add more rows as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">History Log</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">DATE</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">NEW INVENTORY</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">NEW TOTAL MSRP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">NEW AVERAGE MSRP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">USED INVENTORY</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">USED TOTAL MSRP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">USED AVERAGE MSRP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">CPO INVENTORY</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">CPO TOTAL MSRP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">CPO AVERAGE MSRP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 text-sm text-gray-700">{row.date}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.newInventory}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.newTotalMSRP}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.newAverageMSRP}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.usedInventory}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.usedTotalMSRP}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.usedAverageMSRP}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.cpoInventory}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.cpoTotalMSRP}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.cpoAverageMSRP}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4">
          <p className="text-sm text-gray-600">Rows per page: 10</p>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-600 hover:text-gray-800">Previous</button>
            <span className="text-sm text-gray-600">1-5 of 113</span>
            <button className="text-sm text-gray-600 hover:text-gray-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLog;
