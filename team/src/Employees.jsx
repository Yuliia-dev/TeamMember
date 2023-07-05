import { useState } from "react";
import team from "./team.json";
import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";

const Employees = () => {
  const [employees, setEmployees] = useState(team);

  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
          {employees.map((employee) => (
            <div key={employee.id} className="card">
              {employee.gender === "male" ? (
                <img
                  src={maleProfile}
                  alt="Male Profile"
                  className="card-img-top"
                />
              ) : (
                <img src={femaleProfile} alt="Female Profile" />
              )}
              <div className="card-body">
                <h5 className="card-title">Full name: {employee.fullName}</h5>
                <p className="card-text">
                  <b>Designation:</b> {employee.designation}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
