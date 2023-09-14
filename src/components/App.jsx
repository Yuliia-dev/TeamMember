import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loader from "./Loader";
import "../App.css";
import Nav from "./Nav";
import team from "../team.json";


const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Employees = lazy(() => import("./Employees"));
const GroupedTeamMembers = lazy(() => import("./GroupedTeamMembers"));

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
      />{" "}
      <Suspense fallback={<Loader/>}>
        <Routes>
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
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>{" "}
      </Suspense>
      <Footer />
    </Router>
  );
}
