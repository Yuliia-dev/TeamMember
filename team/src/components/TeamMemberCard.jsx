import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";


const TeamMemberCard = ({employee, selectedTeam, handleEmployeeCardClick }) => {
    return (
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
                  <h5 className="card-title"> {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </p>
                </div>
              </div>
    )
}


export default TeamMemberCard