import { Link } from 'react-router-dom'

const Header = ({ handleLogout, user }) => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="link nav-container">
          <Link to="/">
            <i className="icon bi-house-door-fill"></i>
          </Link>
          <Link to="/about">
            {/* <h2>i</h2> */}
            <i className="icon bi-info"></i>
          </Link>
          <Link to="/list">
            <i className="icon bi-list-ul"></i>
          </Link>
          <Link to="/add">
            <i className="icon bi-plus"></i>
          </Link>
          {/* <i className="icon bi-book"></i> */}
        </div>
      </nav>
    </header>
  )
}

export default Header
