import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import { useState } from "react";
import team from "./team.json";

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState("TeamB");
  const [employees, setEmployees] = useState(team);

  function handleTeamSelection(event) {
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event, employeeId) {
    event.stopPropagation();
    const transformedEmployees = employees.map((employee) =>
      employee.id === employeeId
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCounts={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelection={handleTeamSelection}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
      <Footer />
    </div>
  );
}
