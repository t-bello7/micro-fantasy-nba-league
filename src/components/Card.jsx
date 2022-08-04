import '../assets/styles/Card.scss'

const Card = ({name, logo}) => {
    return (
    <div className="card__container">
        <img src={logo} alt="team-logo" className='card__logo'/>
        <div className="card__data">
            <h2> {name} </h2>
        </div>
    </div>
)}

export default Card