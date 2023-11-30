import React from "react";
import Layout from "./components/Layout";
import SalesOverview from "./components/cards/SalesOverview";
import Navbar from "@/components/Navbar";
import SalesOverviewGraph from "@/components/SalesOverviewGraph";

const page = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <div className="p-4">
          <SalesOverview />
          <SalesOverviewGraph />
        </div>
      </Layout>
    </div>
  );
};

export default page;
