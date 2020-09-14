import React from 'react'
import './App.css'

let num = 5

let person = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	address: '123 Main St'
}



// const App =() => {
//   return(
//     <>
//     {num}
//     <form>
//    <div className="jumbotron">
//   <h1 className="heading">Hello, world!</h1>
//   <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <hr className="my-4">
//   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//   <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//     </div>
    
//     </>
//   )
// }

const App =() => {
return(
<>
<div className="card">
  {person.name}
  <br/>
  {person.email}
  <br/>
  {person.address}
</div>
</>
)
 }

// const App = () => {
//   return(
//     //to have multiple lines of html you need to wrap in a <div> </div> tag or an empty <> </> (better way) to wrap all html
//     <div>
//     <h1>Hello World!</h1>
//     <h2>Goodbye World</h2>
//     <button>Click me</button>
//     <label htmlFor="clickmeButton">Enter info here</label>
//     </div>
//     //for any self closing tags you will need a "/" to close them in react
//     //if giving classes to ant tags you must use "className=" instaed of regular "class"
//   )
// }

export default App