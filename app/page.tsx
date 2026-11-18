"use client";
import { useState, useEffect } from "react";

import EmployeeProfile from "@/components/EmployeeProfile";
import EmployeeTimer from "@/components/EmployeeTimer";
import Counter from "@/components/counter";
import ThemeChanger from "@/components/ThemeChanger";

interface Employee {
  id: number;
  name: string;
  designation: string;
  initialSalary: number;
  currentSalary: number;
}
const employeesArray: Employee[] = [
  {
    id: 1,
    name: "M. Ayan Balouch",
    designation: "Owner",
    initialSalary: 80000,
    currentSalary: 80000,
  },
  {
    id: 2,
    name: "M. Subhan Balouch",
    designation: "Crickter",
    initialSalary: 500000,
    currentSalary: 500000,
  },
  {
    id: 3,
    name: "M. Sallar Ahmed",
    designation: "Crickter",
    initialSalary: 600000,
    currentSalary: 600000,
  },
];
export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>(employeesArray);
  function incFunc(employeeId: number) {
    setEmployees((preEmployees) =>
      preEmployees.map((employee) =>
        employee.id === employeeId
          ? { ...employee, currentSalary: employee.currentSalary * 1.1 }
          : employee,
      ),
    );
  }
  useEffect(() => {
    console.log("Employee Management component mounted");
  }, []);
  return (
    <main className="p-6 mt-8">
      <h1 className="text-2xl font-bold text-center">Employee Management</h1>
      {employees.map((employee) => (
        <EmployeeProfile
          key={employee.id}
          employee={employee}
          onIncrease={() => incFunc(employee.id)}
        />
      ))}
      <ThemeChanger />
      <EmployeeTimer />
      <Counter />
    </main>
  );
}
