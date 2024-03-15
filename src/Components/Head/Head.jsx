import { Link } from 'react-router-dom'
import './Head.css'

const Head = (props) => {
  return (
    <div className="head">
        <span>
        <Link to='/'>Home</Link>
        /{props.links}
        </span>
        <h3>
            {props.headLine}
        </h3>
    </div>
  )
}

export default Head