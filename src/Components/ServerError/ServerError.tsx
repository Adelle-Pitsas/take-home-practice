import { Link } from 'react-router-dom'
import './ServerError.css';

const Error = ({closeError} : {closeError: () => void}) => {

  return (
    <div className="overlay">
      <div className="error-container">
        <h2>Oops! Something went wrong!</h2>
        <p>Please try again later</p>
        <button className="home-btn" onClick={closeError}>Dismiss</button>
      </div>
    </div>
  )
}

export default Error