import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarPlain } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"



function Rating(num) {
    return (
      
            <div className="stars">
                {Array.from({ length: 5 }, (_, index) => {
                    return index < Math.floor(num) ? 
                        <FontAwesomeIcon key={index} icon={faStarPlain} className="star" /> : 
                        <FontAwesomeIcon key={index} icon={faStar} className="star"/>;
                })}
            </div>
    
    );
}


export default Rating
