interface Employee {
  id: number;
  name: string;
  designation: string;
  initialSalary: number;
  currentSalary: number;
}

interface EmployeeProfileProps {
  employee: Employee;
  onIncrease: () => void;
}

export default function EmployeeProfile(props: EmployeeProfileProps) {
  return (
    <div className="border rounded-lg p-4 m-3">
      <h2 className="text-xl font-bold">{props.employee.name}</h2>
      <p>Designation: {props.employee.designation}</p>
      <p>Initial Salary: Rs. {props.employee.initialSalary.toLocaleString("en-PK")}</p>
      <div className="flex gap-6">
        <p>Current Salary:Rs. {Math.round(props.employee.currentSalary).toLocaleString("en-PK")}</p>
        <button
          className=" hover:text-cyan-300 hover:border-cyan-300 text-green-400 border border-green-400 px-2 rounded-2xl cursor-pointer"
          onClick={props.onIncrease}
        >
          Increase 10%
        </button>
      </div>
    </div>
  );
}
