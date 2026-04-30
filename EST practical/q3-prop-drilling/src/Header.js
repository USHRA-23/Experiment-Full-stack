import Icon from "./Icon";

function Header({ username }) {
  return (
    <div>
      <h1>Header</h1>
      <Icon username={username} />
    </div>
  );
}

export default Header;