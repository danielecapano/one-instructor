import { useState } from "react";



function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen);
    }
  return (
    <>
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-wrapper">
            <ul className="mobile-menu">
                <li className="mobile-menu-item"><a className="mobile-menu-link" href="#" onClick={handleClick}>Courses</a></li>
                <li className="mobile-menu-item"><a className="mobile-menu-link" href="#" onClick={handleClick}>Course Formats</a></li>
                <li className="mobile-menu-item"><a className="mobile-menu-link" href="#" onClick={handleClick}>Add Course</a>
                </li>
                <li className="mobile-menu-item"><a className="mobile-menu-link" href="#" onClick={handleClick}>Page</a></li>
                <li className="mobile-menu-item"><a className="mobile-menu-link active" href="#" onClick={handleClick}>Demo</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileMenu