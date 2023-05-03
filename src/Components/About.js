import React from 'react'

export default function About(props) {
    const mystyle={
        backgroundColor:props.backgroundColor,
        color:props.color,
        borderColor:props.color
        
    }
    return (
        <div className="container" style={mystyle}>
             <div>Login and signup page with backend nodejs and express</div>
        </div>
    )
}
