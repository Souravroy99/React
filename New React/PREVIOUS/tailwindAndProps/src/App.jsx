import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    username: 'Sourav R',
    age: 20
  }

  let arr = [1,2,3,4,5]

  return ( 
    <>
        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4" >Tailwind Test</h1>

        <Card channel="Sourav_Roy" newObj={obj} btnText='Visit Me'/>
        <Card channel="STROY" newObj={obj} btnText=''/>
    </>

  )
}

export default App
