import React from 'react';
import logo from './logo.svg'
import './assets/App.css'
import ReactDOM from 'react-dom';
import MyFooter from './components/MyFooter'
import TopBar from './components/TopBar'
// import Contact from './components/Contact'
// import ContactData from './components/ContactData'
import todosData from './data/todosData'
import TodoItem from './components/TodoItem'


function App() {
  const todo = todosData.map(item => <TodoItem key={item.id} todos={item}/>)
  console.log = todo
  // const ContactComponents = ContactData.map(item => <Contact key={item.id} contact={item}/>)

  // const Firstname = "doreen"
  // const Lastname = ""
  // const date = new Date()
  // const hours = date.setHours()
  // const myStle = {
  //   fontSize: "20px", 
  //   padding: "10px", 
  //   backgroundColor: "#0000"
  // }
  
  // let timeOfDay

  // if ( hours < 12) {
  //   timeOfDay = "morning"
  //   myStle.color = '#900435'
  // }
  // else if (hours >= 12 && hours <= 18) {
  //   timeOfDay = "aftenoon"
  //   myStle.color = '#900435'
  // } else {
  //   timeOfDay = "night"
  //   myStle.color = '#525635'
  // }

  return (
    <div className="App">
      {todo}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{Firstname} {Lastname} {date.getHours() - 12}:{date.getMinutes()}</p>
        <p>good {timeOfDay}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TopBar/>
      {/* {ContactComponents} */}
      {/* <ContactCard 
        contact= {{name:"",phone:"0798767470",email:"brianngeywo@email.com"}}
      />

      <ContactCard 
        contact = {{name: "brian opicho",phone: "0716821979",email:""}}
      />
      
      <ContactCard 
        contact = {{name: "brian",phone: "",email: "brnngeywo@email.com"}}
      /> */}
      
      <MyFooter />
    </div>
  );
}

export default App;
