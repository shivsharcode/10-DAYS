import Student from "./student"

function App(){

  return (
    <>
      <Student name="Shivam" age={20} isStudent={true}></Student>
      <Student name="Abhinav" age={24} isStudent={false}></Student>
      <Student name="Shiv" age={22} isStudent={true}></Student>
      <Student name="Hari"></Student>
    </>
  )
}

export default App