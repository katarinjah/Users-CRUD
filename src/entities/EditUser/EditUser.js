import './EditUser.css';
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

export const EditUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");

    useEffect((id) => {
        fetch(`https://dummyjson.com/users/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setCompany(data.company.name);
                setTitle(data.company.title);
            });
    }, [params.id]);

    const editHandler = () => {
        fetch(`https://dummyjson.com/users/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                company: {
                    name: company.name,
                    title: company.title,
                },
            })
        })
        .then(response => {
            if (response.status !== 200) {
              console.log('Error');
              return;
            }
            return response.json();
          })
        .then(data => console.log(data))
        navigate('/users')
    };
    
    return (
        <div id="edit-container">
            <h1>{`${firstName} ${lastName}`}</h1>
            <hr/>
            <p className="subtitle">Firstname</p>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" />
            <p className="subtitle">Lastname</p>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" />
            <p className="subtitle">Email</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <p className="subtitle">Company</p>
            <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" />
            <p className="subtitle">Title</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <hr id="second-line"/>
            <div id="submit-container">
                <button id="submit-button" disabled={!firstName || !lastName || !email} onClick={editHandler}>
                    Submit
                </button>
            </div>
        </div>
    )
}