const Footer = () => {
  const today = new Date();
  return (
    <footer className="container">
      <div row justify-content-center mt-3 mb-4 col-8>
        <h5>Team Member Allocation App - {today.getFullYear()}</h5>
      </div>
    </footer>
  );
};
export default Footer;
