import Card from "./components/Card";

function App() {
  const name = ["Sourav Roy", "Mukesh Ambu", "Suresh Kar"]
  const content = ["Lorem ipsum dolor", "Ami Holam", "XYZ"]
  const buttonText = ["Click Me", "Fire ha", "Visit Profile"]

  return (
    <>
    <div className='parent'>
      {
        name.map((_, i) => {
          return <Card name={name[i]} content={content[i]} buttonText={buttonText[i]}/>
        })
      }
    </div>
    </>
  )
}

export default App
