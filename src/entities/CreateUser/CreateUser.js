import './CreateUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const CreateUser = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onCreateHandler = () => {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
            })
        })
        .then(res => res.json())
    }

    return (
        <div className="new-user-container">
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}>Enter firstname</input>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}>Enter lastname</input>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}>Enter email address</input>
            <button disabled={!firstName || !lastName || !email} onClick={onCreateHandler}>Create user</button>
        </div>
    )
}