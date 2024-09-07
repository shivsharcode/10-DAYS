import PropTypes from 'prop-types'

function UserGreeting( {isLoggedIn = false, username= "Guest"} ){

    const welcomeMessage = <h2 className="welcome-msg">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please LogIn to continue</h2>

    return isLoggedIn ? welcomeMessage : loginPrompt ;
    
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}





export default UserGreeting 