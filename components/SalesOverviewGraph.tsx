import PanChart from "@/app/components/cards/PanChart";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const SalesOverviewGraph = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 shadow-none h-[340px] p-4">
      <div className="rounded-xl col-span-9  h-[284px]">
        <div className="text-black chart-header flex justify-between items-center">
          <div className=" left-header flex items-center gap-3">
            <h1 className="text-lg font-semibold">Sales</h1>
            <span className="text-red-500">7 days</span>
            <span>30 days</span>
            <button className="flex items-center border-solid border-2 border-black px-7 py-3 rounded-xl">
              USD <IoIosArrowDown className="mr-2" />
            </button>
            <span>Email</span>
          </div>
          <div className="right-header flex items-center">
            <span>
              <IoIosArrowDown className="mr-2" />
            </span>
            <button className="flex items-center border-solid border-2 border-black px-3 py-3 rounded-xl">
              <FaArrowDown className="mr-2" /> Download report
            </button>
          </div>
        </div>
        <div className="my-1 border-gray-900 border h-[284px] w-[100%] overflow-scroll">
          <PanChart />
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 rounded-xl border bg-[#EF2C5A] text-white col-span-2 shadow-none w-[355px] h-[284px] my-14">
        <p className="text-xl font-light p-5">
          KlashaWire - send money to businesses globally from Africa
        </p>
        <div className="p-5">
          <button className="flex items-center border-solid  bg-black px-7 py-3 rounded-xl ">
            Send a wire
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewGraph;
