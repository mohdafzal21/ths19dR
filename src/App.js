import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
// import CC from './CC'
import List from './List'
class App extends React.Component{
  state = {
    count :0,
    contacts : [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
    ]
  }
  increment = ()=>{
     console.log("hello" , this)
     this.setState({
      count : this.state.count + 1
     })
  }
  decrement = ()=> {
    this.setState({
      count : this.state.count - 1
    })
  }
  removeContacts = (contact)=>{
    console.log('inside app.js',contact)
    const updateState = this.state.contacts.filter((c)=> c.id !== contact.id)
    console.log('only updated state',updateState)
    this.setState({
      contacts : updateState
    })
   
  }
  render(){
    const {count,contacts} = this.state
    return(
      <div>
        <Counter count={count} 
        increment={this.increment}
          decrement={this.decrement} />
          <hr/>
          <List contacts={contacts} removeContacts={this.removeContacts}/>
       </div>
    )
  }
}
export default App;
