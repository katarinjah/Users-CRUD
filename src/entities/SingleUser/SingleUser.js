import './SingleUser.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

export const SingleUser = () => {
    const [user, setUser] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const deleteHandler = (id) => {
        fetch(`https://dummyjson.com/users/${id}`, {
          method: 'DELETE',
        })
        .then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            };
        })
        navigate('/users')
    };

    const editHandler = (id) => {
        navigate(`/users/${id}/edit`);
    };

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${params.id}`)
          .then(response => response.json())
          .then(data => setUser(data))
    }, [params.id]);
    
    if (!user) return null;

    return (
        <>
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <hr className="user-line"/>
            <div className="user-container">
                <p><span>Email:</span> {user.email}</p>
                <p><span>Phone number:</span> {user.phone}</p>
                <p><span>Company:</span> {user.company.name}</p>
                <p><span>Department:</span> {user.company.department}</p>
                <p><span>Title:</span> {user.company.title}</p>
            </div>
            <hr className="user-line"/>
            <div className="buttons">
                <button id="edit" onClick={() => editHandler(user.id)}>Edit</button>
                <button id="delete" onClick={() => deleteHandler(user.id)}>Delete</button>
            </div>
        </>
    );
}