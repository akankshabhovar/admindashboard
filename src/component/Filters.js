import React from "react";
import arrowChevron from '../assets/Chevron right (1).svg';

function Filters({ isFilterOpen, onClose }) {
    return (
        <>
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex">
                    <div className="absolute top-0 right-0 w-80 bg-white h-full shadow-lg p-6">
                        <div className="flex items-center mb-6">
                            <button onClick={onClose} className="text-yellow-500">
                                <img src={arrowChevron} alt="arrow" />
                            </button>
                            <h2 className="text-lg font-medium text-gray-800 ml-2">
                                Filter Data By
                            </h2>
                        </div>

                        <div>
                            <h3 className="font-semibold text-sm text-gray-700">MAKE</h3>
                            <div className="flex flex-col mt-2 space-y-2">
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Ford
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Cadillac
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Jeep
                                </label>
                            </div>

                            {/* Duration Section */}
                            <h3 className="font-semibold text-sm text-gray-700 mt-6">
                                DURATION
                            </h3>
                            <div className="flex flex-col mt-2 space-y-2">
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Last Month
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    This Month
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Last 3 Months
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Last 6 Months
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    This Year
                                </label>
                                <label className="flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                    />{" "}
                                    Last Year
                                </label>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex space-x-4">
                            <button className="bg-orange-500 text-white py-2 px-6 rounded font-medium hover:bg-orange-600">
                                APPLY FILTER
                            </button>
                            <button className="py-2 px-6 border border-orange-500 text-orange-500 rounded font-medium hover:bg-orange-100">
                                REMOVE ALL FILTERS
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Filters;
