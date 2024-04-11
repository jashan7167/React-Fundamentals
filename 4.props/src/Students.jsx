import PropTypes from 'prop-types'


function Students(props) {
  return (
    <div className="students">
      <p>Name: {props.name}</p>
      <p>Age : {props.age}</p>
      <p>isStudent = {props.isStudent ? "Yes":"No"}</p>
    </div>
  );
}

Students.propTypes = 
{
  name:PropTypes.string,
  age:PropTypes.number,
  isStudent:PropTypes.bool,
}
Students.defaultProps = 
{
  name:"John Doe",
  age:1000,
  isStudent:false,
}
export default Students;

