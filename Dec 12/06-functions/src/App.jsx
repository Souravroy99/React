
function App() {

  function btnClicked() {
    console.log(Date.now())
  }

  return (
    <>
      <h1>Hello</h1>

      <button onClick={() => console.log("object")}>Change User</button>
    </>
  )
}

export default App
