import React from "react";
import PanChart from "./PanChart";

const SalesOverview = () => {
  const items = [
    { id: 1, title: "Item 1", content: "Content for Item 1" },
    { id: 2, title: "Item 2", content: "Content for Item 2" },
    { id: 3, title: "Item 3", content: "Content for Item 3" },
    { id: 4, title: "Item 4", content: "Content for Item 4" },
  ];

  return (
    <div className="flex  items-start flex-wrap justify-between p-4 pt-20">
      <div
        className={`p-4 m-1 col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 w-[345px] h-[240px] bg-white text-black  border border-black`}
      >
        <h2 className="text-lg font-bold mb-2">Today Sales</h2>
        <p>₦1,652.50</p>
      </div>
      <div
        className={`p-4 m-1 col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 w-[345px] h-[240px] bg-black text-white border border-black`}
      >
        <h2 className="text-lg font-bold mb-2">Today Sales</h2>
        <p>₦1,652.50</p>
      </div>
      {[1, 2].map((item) => (
        <div
          key={item}
          className={`flex flex-col justify-between p-4 m-1 col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 w-[345px] h-[240px] bg-white text-black border border-black`}
        >
          <h2 className="text-lg font-bold mb-2">24 Aug - 01 Sep 21</h2>
          <div className="my-1  h-[78px] overflow-scroll">
            <PanChart />
          </div>
          <p>This Month</p>
          <p>₦1,652.50</p>
        </div>
      ))}
    </div>
  );
};

export default SalesOverview;
