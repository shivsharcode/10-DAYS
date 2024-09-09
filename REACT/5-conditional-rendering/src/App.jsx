
import UserGreeting from "./UserGreeting"


function App(){

  return (
    <>
      <UserGreeting isLoggedIn={true} username="shivshar" ></UserGreeting>
      <UserGreeting isLoggedIn={true} ></UserGreeting>
    </>
  )
}

export default App