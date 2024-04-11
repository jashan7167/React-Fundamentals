import tupac from './assets/2pac.jpg'
function Card() {
  return (
    <div className="card">
      <img src= {tupac} alt="my-photo"/>
      <h2 className='class-title'>2pac</h2>
      <p className='card-text'>Legend of the rapping industry <br />
        RIP 2PAC
      </p>
    </div>
  );
}
export default Card;
