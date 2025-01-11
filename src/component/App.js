import React, { useState } from "react";
import Filters from "./Filters";
import Charts from "./Charts";
import Stats from "./Stats";
import Header from "./Header";
import HistoryLog from "./HistoryLog";

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory</h1>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Select Dealer:</label>
            <select className="border border-gray-300 rounded p-1">
              <option>AAM MITSUBISHI DEALER</option>
              <option>Another Dealer</option>
            </select>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              onClick={() => setIsFilterOpen(true)}
            >
              Filter Data By
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Inventory Count Section */}
        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-800 font-semibold whitespace-nowrap">Inventory Count</p>
          <div className="flex gap-2">
            {["NEW", "USED", "CPO"].map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded-lg font-medium text-sm transition-colors duration-200 
          ${idx === 0 ? "bg-orange-500 text-white border-transparent" : "bg-white text-gray-700 border-orange-500"} 
          hover:bg-orange-500 hover:text-white`}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Charts />
        </div>

        {/* Average MSRP in USD Section */}
        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-800 font-semibold whitespace-nowrap">Average MSRP in USD</p>
          <div className="flex gap-2">
            {["NEW", "USED", "CPO"].map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded-lg font-medium text-sm transition-colors duration-200 
          ${idx === 0 ? "bg-orange-500 text-white border-transparent" : "bg-white text-gray-700 border-orange-500"} 
          hover:bg-orange-500 hover:text-white`}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Charts />
        </div>

        <HistoryLog />

        {/* Sidebar */}
        <Filters isFilterOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      </div>
    </div>
  );
}

export default App;
