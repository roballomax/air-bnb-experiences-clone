import './card.less'
import Star from '../../assets/star.png'

function Card(props) {

    return (
        <div className={`carrocel-card ${props.openSpots <= 0 ? 'sold-out' : ''} ${props.openSpots > 0 && props.location === "Online" ? 'online' : ''}`}>
            <img src={`/img/${props.coverImg}`} alt="Card Image" className='card-image'/>
            <span className='evaluation-group'>
                <img className='eavluation-star' src={Star} alt="Star evaluation" />
                <span className='evaluation-note'>{props.stats.rating}</span>
                <span className='evaluation-count'>({props.stats.reviewCount})</span>
                <span className='evaluation-place'>{props.location}</span>
            </span>
            <p className='card-description'>{props.title}</p>
            <span className='pricing'><strong>From ${props.price}</strong> / person</span>
        </div>
    )
}

export default Card