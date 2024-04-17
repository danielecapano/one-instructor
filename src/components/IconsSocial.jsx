import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

function IconsSocial() {
  return (
    <ul className="icons-social">
        <li><a href="#" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
    </ul>
  )
}

export default IconsSocial