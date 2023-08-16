import Teams from "./Teams";
import TeamMembers from "./TeamMembers";


const Employees = ({employees, selectedTeam,handleTeamSelection,  handleEmployeeCardClick}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam}
            handleTeamSelection={handleTeamSelection}/>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            
              <TeamMembers selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick} employees={employees } />
          
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
