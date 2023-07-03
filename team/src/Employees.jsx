import { useState } from "react";
import team from './team.json';
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg'

const Employees = () => {
  const [employees, setEmployees] = useState(team)
  console.log(employees)
  return (
    <main>
          {employees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.fullName}</p>
          {employee.gender === 'male' ? (
            <img src={maleProfile} alt="Male Profile" />
          ) : (
            <img src={femaleProfile} alt="Female Profile" />
          )}
        </div>
      ))}
    </main>
  );
};
export default Employees;
