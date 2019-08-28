import React from 'react';

const List = (props)=>{
     console.log('list',props)
    return(
        <div style={{border: "2px solid black"}}>
         <h1>List </h1>
         {props.contacts.map((contact)=>(
                  <div style={{border:" 2px dashed red"}} key={contact.id}>
                 <h2>{contact.name} : {contact.handle}</h2>
         <img src={contact.avatarURL} style={{width:"300px", height:"200px"}}/>
         <button onClick={()=>props.removeContacts(contact)}>Remove Item</button>
                      </div>
         ))}
        
        </div>
    )
}
    
export default List