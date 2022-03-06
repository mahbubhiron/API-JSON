import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FriendDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setUser(data))
    },[])
    const friendStyle= {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const headerStyle= {
        borderBottom: '5px solid red',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'gray'
    }
    return (
        <div style={friendStyle}>
            <h1 style={headerStyle}>User details</h1>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
        </div>
    );
};

export default FriendDetails;