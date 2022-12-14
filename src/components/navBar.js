import { Link } from 'react-router-dom'

const Header = ({ isOpen, setIsOpen }) => {
  const toggle = () => setIsOpen(!isOpen)

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="link nav-container">
          <Link to="/">
            <i onClick={toggle} className="icon bi-house-door-fill"></i>
          </Link>
          <Link to="/about">
            <i onClick={toggle} className="icon bi-info"></i>
          </Link>
          <Link to="/list">
            <i className="icon bi-list-ul"></i>
          </Link>
          <Link to="/add">
            <i onClick={toggle} className="icon bi-plus"></i>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
