import UserProfile from "./UserProfile";

function Icon({ username }) {
  return (
    <div>
      <h2>Icon</h2>
      <UserProfile username={username} />
    </div>
  );
}

export default Icon;