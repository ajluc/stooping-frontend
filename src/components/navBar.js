import { Link } from 'react-router-dom'

const Header = ({ handleLogout }) => {
  return (
    <header className="header">
      <nav className="nav-grid">
        <p>StoopCity</p>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">Add Stoop</Link>
          <Link to="/list">List View</Link>
        </div>
        <Link to="/signIn">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link onClick={handleLogout} to="/">
          Log Out
        </Link>
      </nav>
    </header>
  )
}

export default Header
