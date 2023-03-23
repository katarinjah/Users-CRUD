import './CreateUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const CreateUser = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onCreateHandler = () => {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/users')
    };

    return (
        <div className="new-user-container">
             <h1 id="new-user-title">Add new user</h1>
             <hr id="new-user-line"/>
             <div id="inputs">
                <input className="create" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter firstname"></input>
                <input className="create" type="text" value={lastName} onChange={e => setLastName(e.target.value)}placeholder="Enter lastname"></input>
                <input className="create" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address"></input>
                <input className="create" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number"></input>
                <button id="create-user-button" disabled={!firstName || !lastName || !email || !phone} onClick={onCreateHandler}>Create user</button>
            </div>
        </div>
    )
}