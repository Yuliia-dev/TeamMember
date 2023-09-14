import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers);

  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      teamName: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      teamName: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      teamName: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      teamName: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {

  const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.teamName === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedEmployees(transformedGroupData);
    setSelectedTeam(event.currentTarget.id);
  }



  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.teamName}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.teamName}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.teamName}
            </h4>
            <div
              id={"collapse_" + item.teamName}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                         {member.fullName}
                      </span>
                    </h5>
                    <p> Designation : {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default GroupedTeamMembers;
