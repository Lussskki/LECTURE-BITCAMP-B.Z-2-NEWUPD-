import {useState} from 'react' 

function App() {
  
  
useState()
let [names, setNames] = useState(['Magda','Sese','Ketevan'])


return (
  <div className="container">
      {names.map((name)=>{
        return <p>{name}</p>
      })}
            
          
    <button onClick={()=>{
            setNames([...names, 'Guga'])
    }} 
    >Add Person</button>


    </div>
  )
}

export default App





















// const handleChange = (event) => {
//   console.log(event.target.value)
// }



{/* <input type='text' onChange={handleChange} ></input> */}


// import ChildComponent from "./childComponent"
// import './App.css'


// let namesArray = ['შკიპერი','კოვალსკი','რიკო','სულელი']
//     console.log(namesArray.map((name)=>{
  //       return <p>{name}</p>
  //     }))

// const styleq = {
//   title:{
//     color: 'green'
//   }
// }

{/* This is parent component. 
<ChildComponent name='Luka' color='purple'/>
<ChildComponent name='kowalski' color='red'/>
<ChildComponent name='skipper' color='green'/>
<ChildComponent name='Gendozavri' color='yellow'/> */}
{/* <h1 style={styleq.title}>Hello World</h1>
{namesArray.map((name)=>{
  return <p>{name}</p>
})} */}