const Header = ({ selectedTeam, teamMemberCounts }) => {
  return (
    <header className="container">
      <div row justify-content-center mt-3 mb-4 col-8>
        <h1>Team Member Allocation</h1>
        <h3>
          {selectedTeam} has {teamMemberCounts} members
        </h3>
      </div>
    </header>
  );
};
export default Header;
