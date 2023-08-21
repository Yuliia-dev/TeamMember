import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import team from "../team.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || team
  );

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

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
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        employees={employees}
        teamMemberCounts={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes
        path="/"
        element={
          <Employees
            employees={employees}
            selectedTeam={selectedTeam}
            handleTeamSelection={handleTeamSelection}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        }
      >
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleTeamSelection={handleTeamSelection}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
