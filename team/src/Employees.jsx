import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";

const Employees = ({employees, selectedTeam, handleTeamSelection, handleEmployeeCardClick}) => {
  // const [selectedTeam, setSelectedTeam] = useState("TeamB");
  // const [employees, setEmployees] = useState(team);

  // function handleTeamSelection(event) {
  //   setSelectedTeam(event.target.value);
  // }

  // function handleEmployeeCardClick(event) {
  //   const transformedEmployees = employees.map((employee)=>employee.id===parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee, teamName:''}:{...employee, teamName: selectedTeam}:employee)
  //   setEmployees(transformedEmployees);
  // }

  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelection}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className={(
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                )}
                style={{ cursor: "pointer" }}
                 onClick={(event) => handleEmployeeCardClick(event, employee.id)}
              >
                {employee.gender === "male" ? (
                  <img
                    src={maleProfile}
                    alt="Male Profile"
                    className="card-img-top"
                  />
                ) : (
                  <img
                    src={femaleProfile}
                    alt="Female Profile"
                    className="card-img-top"
                  />
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
