import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'


const Nav = ({Link}) => {
  return(
    <nav>
      <Link to='/' className='link'><h1><FontAwesomeIcon icon={faFilm} />   Movie Search</h1></Link>
    </nav>
  )
}

export default Nav;