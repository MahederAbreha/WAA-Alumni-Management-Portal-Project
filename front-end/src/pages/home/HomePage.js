import React from 'react'

export default function HomePage() {
    const myStyle={
        backgroundImage: 
 "url('https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=1024x1024&w=is&k=20&c=HOOicMTOC_FIQfv8jfm_wwrJ5j98YK3JxpX-4zksY-g=')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
         <h1>Almuni Management 
            Portal
         </h1>
      </div>
    )
}