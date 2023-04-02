// Write your code here
import './index.css'

const EventItem = props => {
  const {eventList, onClickEvent} = props
  const {imageUrl, name, location, id} = eventList

  const clicked = () => {
    onClickEvent(id)
  }

  return (
    <li className="list">
      <button className="event-button" type="button" onClick={clicked}>
        <img src={imageUrl} alt="event" className="eventImg" />
      </button>
      <p className="event-head">{name}</p>
      <p className="event-para">{location}</p>
    </li>
  )
}

export default EventItem
