import IconsSocial from "./IconsSocial"

function DesktopMenu() {
  return (
    <div className="desktop-navbar">
        <ul className="desktop-menu">
            <li className="desktop-menu-item"><a className="desktop-menu-link" href="#">Courses</a></li>
            <li className="desktop-menu-item"><a className="desktop-menu-link" href="#">Course Formats</a></li>
            <li className="desktop-menu-item"><a className="desktop-menu-link" href="#">Add Course</a>
            <span>new</span>
            </li>
            <li className="desktop-menu-item"><a className="desktop-menu-link" href="#">Page</a></li>
            <li className="desktop-menu-item"><a className="desktop-menu-link active" href="#">Demo</a></li>
    
        </ul>
        <IconsSocial />
    </div>
  )
}

export default DesktopMenu