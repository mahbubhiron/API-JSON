import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Friend = (props) => {
    // console.log(props.user);
    const { name, email, id } = props.user;
    const history = useNavigate()
    const showHandle = (userId)=>{
        const url = `/friend/${userId}`;
        history(url)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>ID : <Link to={`/friend/${id}`}>Show details of {id}</Link></p>
            <button onClick={() => showHandle(id)}>Show Details</button>
        </div>
    );
};

export default Friend;