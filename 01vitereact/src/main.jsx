import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function reactElement(){
  return(
    <h1>This function is working</h1>
  )
}
const anotherElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).
render(

    //<App />       //OUTPUT : Chai is Ready  // as it returns the function chai.jsx
    //reactElement()   //OUTPUT : This function is working 


    //<anotherElement />  //OUTPUT : Nothing will show as anotherElement returns an object, so it can not be held inside tags
    anotherElement      //This is the right syntax for returning object
  )
