import PropTypes from "prop-types";
function UserGreeting(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <h2 className="welcome-message">Welcome {props.username}</h2>
      </>
    );
  } else {
    return <h2 className="warning">Please log in to continue</h2>;
  }
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "John Doe",
};
export default UserGreeting;
