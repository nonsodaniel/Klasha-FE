import { TableRow } from "@/components/ui/table";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <TableRow className="w-100 p-3 absolute left-0 right-0  flex justify-end">
      <div className="border border-gray-200 rounded-xl px-3 flex items-center text-gray-500">
        <span className="px-4">
          <IoIosArrowBack />
        </span>
        {[1, 2, 3, "...", 8, 9, 10].map((o, i) => (
          <span
            className={`p-3 ${
              i === 0
                ? "text-black font-bold py-1 px-2 rounded-xl bg-gray-200"
                : ""
            }`}
          >
            {o}
          </span>
        ))}
        <span className="px-4">
          <IoIosArrowForward />
        </span>
      </div>
    </TableRow>
  );
};

export default Pagination;
