import { Link } from 'react-router-dom'

const SignInBar = ({ user, handleLogout }) => {
  return (
    <div className="sign-in-container">
      {user ? (
        <div className="sign-in-btn">
          <Link onClick={handleLogout} to="/">
            Log Out
          </Link>
        </div>
      ) : (
        <div className="flex-row">
          <div className="register-btn">
            <Link to="/register">
              <i className="icon bi-person-plus-fill"></i>
            </Link>
          </div>
          <div className="sign-in-btn">
            <Link to="/signIn">log in</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignInBar
