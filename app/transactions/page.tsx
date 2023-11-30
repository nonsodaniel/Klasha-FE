import React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const TransactionHistory = dynamic(() => import("./TransactionsHistory"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="bg-white">
      <Layout>
        <Navbar />
        <div className="p-6">
          <TransactionHistory />
        </div>
      </Layout>
    </div>
  );
};

export default page;
