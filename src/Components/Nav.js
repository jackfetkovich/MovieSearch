import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  return(
    <nav>
      <h1><FontAwesomeIcon icon={faFilm} />   Movie Search</h1>
    </nav>
  )
}

export default Nav;