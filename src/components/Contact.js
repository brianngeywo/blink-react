import React from 'react'

function Contact(props) {
    return (
        <div className="App">
            {/* <h1 style={{display: props.contact.name ? "block" : "none" }}>{props.contact.name}</h1>
            <p  style={{display: props.contact.phone ? "block" : "none" }}>phone: {props.contact.phone}</p> //hide if there no phone number
            <p  style={{display: props.contact.email ? "block" : "none" }}>email: {props.contact.email}</p> */}
            {/* <h1 style={{display: !props.contact.name && "none" }}>{props.contact.name}</h1>
            <p  style={{display: !props.contact.phone && "none" }}>phone: {props.contact.phone}</p>
            <p  style={{display: props.contact.email ? "block" : "none" }}>email: {props.contact.email}</p> */}
            <h2 style={{color: props.contact.phone && "#010881" }}>{props.contact.name} {props.contact.phone}</h2>
        </div>
    )
}

export default Contact