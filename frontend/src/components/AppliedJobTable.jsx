import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  //   const { allAppliedJobs } = useSelector((store) => store.job);
  const allAppliedJobs = [1, 2, 3, 4, 5];

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You haven't applied any job yet.</span>
          ) : (
            allAppliedJobs.map((appliedJob, index) => (
              <TableRow key={index}>
                <TableCell>15/05/2025</TableCell>
                <TableCell>Full Stack Devloper</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className="text-right">
                  <Badge
                  // className={`${
                  //   appliedJob?.status === "rejected"
                  //     ? "bg-red-400"
                  //     : appliedJob.status === "pending"
                  //     ? "bg-gray-400"
                  //     : "bg-green-400"
                  // }`}
                  >
                    Accepted
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
