import logo from "../Gridster-Logo.png";

function HeaderView(props) {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}
export default HeaderView;
