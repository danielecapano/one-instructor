/* eslint-disable react/prop-types */
import Rating from "./Rating"



function Slide({rating, text, title, classes}) {
  return (
    <div className={`slide ${classes}`}>
        <h3 className="title">{title}</h3>
        <div className="rating">{Rating(rating)}</div>
        <p className="text">{text}</p>
    </div>
  )
}

export default Slide