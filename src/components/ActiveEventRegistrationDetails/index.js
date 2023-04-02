// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {statusConstants, status} = props
  const {initial, registered, toRegister, closed} = statusConstants
  let statusView = ''
  switch (status) {
    case initial:
      statusView = (
        <div className="initial">
          <p>Click on an event, to view its registration details</p>
        </div>
      )
      break
    case registered:
      statusView = (
        <div className="detail-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="image-registered"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
      break
    case toRegister:
      statusView = (
        <div className="detail-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="image-toRegister"
          />
          <p className="text-toRegister">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="button-register" type="button">
            Register Here
          </button>
        </div>
      )
      break
    case closed:
      statusView = (
        <div className="detail-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="image-toRegister"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registrations soon!</p>
        </div>
      )
      break
    default:
      break
  }
  return <div>{statusView}</div>
}

export default ActiveEventRegistrationDetails
