import React, {Component} from 'react';
// import logo from './logo.svg'
import './assets/App.css'
import ReactDOM from 'react-dom';
// import Logged from './components/Logged'
// import Conditional from './components/Conditional'
// import MyFooter from './components/MyFooter'
// import TopBar from './components/TopBar'
// import Contact from './components/Contact'
// import ContactData from './components/ContactData'
// import todosData from './data/todosData'
// import TodoItem from './components/TodoItem'


// function App() {
  
//   // const ContactComponents = ContactData.map(item => <Contact key={item.id} contact={item}/>)

//   // const Firstname = "doreen"
//   // const Lastname = ""
//   // const date = new Date()
//   // const hours = date.setHours()
//   // const myStle = {
//   //   fontSize: "20px", 
//   //   padding: "10px", 
//   //   backgroundColor: "#0000"
//   // }
  
//   // let timeOfDay

//   // if ( hours < 12) {
//   //   timeOfDay = "morning"
//   //   myStle.color = '#900435'
//   // }
//   // else if (hours >= 12 && hours <= 18) {
//   //   timeOfDay = "aftenoon"
//   //   myStle.color = '#900435'
//   // } else {
//   //   timeOfDay = "night"
//   //   myStle.color = '#525635'
//   // }

//   return (
//     <div className="App">
//       <todo/>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
        // <p>{Firstname} {Lastname} {date.getHours() - 12}:{date.getMinutes()}</p>
        // <p>good {timeOfDay}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <TopBar/>
//       {/* {ContactComponents} */}
//       {/* <ContactCard 
//         contact= {{name:"",phone:"0798767470",email:"brianngeywo@email.com"}}
//       />

//       <ContactCard 
//         contact = {{name: "brian opicho",phone: "0716821979",email:""}}
//       />
      
//       <ContactCard 
//         contact = {{name: "brian",phone: "",email: "brnngeywo@email.com"}}
//       /> */}
      
//       <MyFooter />
//     </div>
//   );
// }
class App extends Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       isloggedin: true
// //     }
// //   }
// //   render() {
// //     let worddisplay
// //     if (this.state.isloggedin == true) {
// //       worddisplay = "in"
// //     } else {
// //       worddisplay = "out"
// //     }
// //     return (
// //       <div>
// //         <p>you are currently logged {worddisplay}</p>
// //       </div>
// //     )
// //   }
// // }

// //to do app


//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)

//   }
//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedtodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedtodos
//       }
//     })
//   }
//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
//     handleChange = {this.handleChange}/>)
    
//     return (
//       <div>
//         {todoItems}
//       </div>
//     )
//   }
// }

// //   constructor() {
// //     super()
// //     this.state = {
// //       todos: "bla"
// //     }
// //   }
// //   render() {
    
// //     return (
// //       <div>
// //       </div>
// //     )
// //   }
// }

// //handling events
// function handle() {
//   console.log("i was clicked")
// }
// function App() {
//   return (
//     <button onClick={handle}>click me</button>
//   )
// }

//changing state

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.add = this.add.bind(this)
//   }
//   add() {
//     // this.setState({ count: 1 })
//     this.setState(prevstate => {
//       return {
//         count: prevstate.count + 10
//       }
//     })
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.add}>Change!</button>
//       </div>
//     )
//   }

// lifecycle methods

  // constructor() {
  //   super()
  // //   this.state=  {
  // //     isLoading: true
  // //   }
  // // }
  //     this.state=  {
  //       unReadMessages: [
  //         "hi ",
  //         "sasa",
  //         "rada gani"
  //       ]
  //     }
  //   }
  // // componentDidMount() {
  // //   setTimeout(() => {
  // //     this.setState({
  // //       isLoading: false
  // //     })
  // //   }, 1500)

  // // testing login state
  //   this.state= {
  //     isloggedin: false
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick() {
  //   this.setState(prevState => {
  //     return {
  //       isLoggedin: !prevState.isLoggedin
  //     }
  //   })
  // }
  // render() {
  //   let ButtonText = this.state.isLoggedin ? "log out" : "log in"
  //   return(
  //     <div>
  //       <button onClick={this.handleClick}>{ButtonText}</button>
  //     </div>
  //     // // <div>
  //     // //   {
  //     // //   this.state.isLoading ? 
  //     // //     <h1>loading...</h1> : 
  //     // //     <Conditional/>
  //     // //   }
  //     // // </div>
  //     // <div>
  //     //   {
  //     //     this.state.unReadMessages.length > 0 &&
  //     //       <h1>You have {this.state.unReadMessages.length} unread messages!</h1>
  //     //   }
  //     // </div>  

  //   )
  // }

    constructor() {
      super()
      this.state= {
        character: {}
      }
    }
    componentDidMount() {
      fetch("https://reqres.in/api/users/2")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data
        })
      })
    }
  render() {
    return (
      <div>awesome {this.state.character.avatar}</div>
    )
  }
}

export default App
