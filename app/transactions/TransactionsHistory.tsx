"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { IoFilter } from "react-icons/io5";
import TransactionTable from "./TransactionTable";

const TransactionHistory = () => {
  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="my-3 text-black p-4 font-semibold border-b border-gray-200">
        Transaction History
      </div>
      <div className="">
        <div className="flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-200 rounded-xl py-2 m3-2 px-3 text-sm"
              />
              <span className="absolute top-[.7rem] right-[1rem] text-black font-extrabold ">
                <IoSearch />
              </span>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3 mb-3">
            <Button className="border border-black rounded-xl bg-white text-black px-6 ">
              <span className="mr-2">Filter </span>
              <IoFilter />
            </Button>
            <Button className=" border  border-black rounded-xl bg-white text-black px-6  mr-2">
              Export
            </Button>
          </div>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default TransactionHistory;
