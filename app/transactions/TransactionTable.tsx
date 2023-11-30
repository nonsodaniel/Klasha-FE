import React from "react";
import { tableData, columns } from "@/utils/constants";
import { IoSearch } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./Pagination";
const TransactionTable = () => {
  return (
    <div className="table text-black w-[100%] my-5">
      <Table className="">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead className="w-[100px] font-bold" key={column.name}>
                {column.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="relative">
          {tableData.map((data) => (
            <TableRow key={data.id} className="py-3">
              <TableCell className="w-[100px] py-3">
                {data.transactionId}
              </TableCell>
              <TableCell>{data.source}</TableCell>
              <TableCell>{data.customerName}</TableCell>
              <TableCell>{data.customerEmail}</TableCell>
              <TableCell>{data.amount}</TableCell>
              <TableCell>{data.requestDate}</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
          ))}
          <Pagination />
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
