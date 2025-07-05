import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useSelector } from "react-redux";

// const randomJobs = [1, 2,45];

const Browse = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
