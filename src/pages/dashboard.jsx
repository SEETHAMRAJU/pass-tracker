import React from "react";
import CredCard from "../components/CredCard";
import NavBar from "../components/NavBar";
const colors = ['blue','green','red','cyan','brown','amber','gold','chocolate','indigo','salmon'];
const dummy = [
    {
        website: 'Facebook',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Google',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Twitter',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Google',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Twitter',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Google',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
    {
        website: 'Twitter',
        url: 'https:/facebook.com',
        username: 'usname',
        password: 'psswd',
    },
]
const dashboard = ()=> {
    const cards = dummy.map((cred)=>{return (<CredCard website={cred.website} color={colors[Math.floor(Math.random()*colors.length)]}/>)});
    return (
        <div style={{backgroundColor:'orange',minHeight: '100vh' }}>
            <NavBar title="Dashboard"></NavBar>
            <div style={{margin:"10vh 10vw 20vh 10vw",background:"rgba(200,200,200,0)"}}>
                {cards}                
            </div>
        </div>
    )
};

export default dashboard;