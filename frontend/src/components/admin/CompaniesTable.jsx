import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  const filterCompany = [
    {
      name: "TechNova Solutions",
      logo: "https://dummyimage.com/100x100/000/fff&text=TechNova",
      createdAt: "2023-01-15T10:30:00Z",
    },
    {
      name: "InnoSpark Labs",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s",
      createdAt: "2022-08-05T14:45:00Z",
    },
    {
      name: "BlueOrbit Inc.",
      logo: "https://dummyimage.com/100x100/555/fff&text=BlueOrbit",
      createdAt: "2021-11-20T09:15:00Z",
    },
    {
      name: "Vertex Dynamics",
      logo: "https://dummyimage.com/100x100/777/fff&text=Vertex",
      createdAt: "2024-03-10T12:00:00Z",
    },
    {
      name: "QuantumByte",
      logo: "https://dummyimage.com/100x100/999/fff&text=Quantum",
      createdAt: "2023-06-25T16:20:00Z",
    },
  ];
  const navigate = useNavigate();

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <tr>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() =>
                        navigate(`/admin/companies/${company._id}`)
                      }
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
