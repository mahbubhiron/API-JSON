import React from 'react';
import { useState, useEffect } from 'react';
import Friend from '../Friends/Friend';

const User = () => {
    const [familiar, setFamiliar] = useState(false);
    const [user, setUser] = useState([]);
    useEffect(() => {
        if (familiar) {
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setUser(data)
                })
        }
    }, [familiar])
    // console.log(user)
    const headerStyle= {
        borderBottom: '5px solid red',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'gray'
    }
    return (
        <div>
            <div>
                <h1>Is Familiar : {familiar.toString()}</h1>
                <button onClick={() => setFamiliar(!familiar)}>Toggle Friend</button>
            </div>
            <div>
                {
                    // javaScript ternary operator
                    familiar ? <h1 style={headerStyle}>User Show </h1> : <h1 style={headerStyle}>User did not Show </h1>
                }
            </div>
            {
              familiar &&  user.map(user => <Friend user={user} key={user.id}></Friend>)
            }
        </div>
    );
};

export default User;