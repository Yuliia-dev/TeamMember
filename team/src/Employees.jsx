import { useState } from "react";
import team from './team.json';
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg'

const Employees = () => {
  const [employees, setEmployees] = useState(team)

  return (
    <main className="container">
      <div class="row ">
        <div class=" col-8">
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.fullName}</p>
          {employee.gender === 'male' ? (
            <img src={maleProfile} alt="Male Profile" />
          ) : (
            <img src={femaleProfile} alt="Female Profile" />
          )}
        </div>
      ))}</div></div>
    </main>
  );
};
export default Employees;
