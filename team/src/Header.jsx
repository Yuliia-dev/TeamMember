const Header = ({selectedTeam, teamMemberCounts}) => {
  return (
    <header>
      <h1 >Team Member Allocation</h1>
      <h3>{selectedTeam} has { teamMemberCounts} members </h3>
    </header>
  );
};
export default Header;
