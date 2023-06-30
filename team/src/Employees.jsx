import { useState } from "react";
import * as team from './employees.json'

const Employees = () => {
    const[employees, setEmployees] =useState(team)
  return (
    <main>
      <h1 >Employees</h1>
    </main>
  );
};
export default Employees;
