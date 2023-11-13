import './Card.css'


const Card = ({ id, name, description, img }) => {
  return (
    <div className='card'>
      <div className="card-container">
        <img src={img} alt={name} />
        <div className="card-texto">
        <h3>{name}</h3>
        <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card