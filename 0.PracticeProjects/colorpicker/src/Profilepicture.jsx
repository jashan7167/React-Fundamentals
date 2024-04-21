import "./Profilepicture.css"
function Profilepicture()
{
  const imageUrl = "./src/assets/IMG_6921.JPG";
  // const handleClick = () =>  console.log("OUCH!")
  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return(
    <img onClick={handleClick} id="jashan"src={imageUrl} alt="ITS ME IM DAD"/>
  )

}
export default Profilepicture;