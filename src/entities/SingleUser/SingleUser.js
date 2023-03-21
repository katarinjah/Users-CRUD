import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const SingleUser = () => {
    const [user, setUser] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${params.id}`)
          .then(response => response.json())
          .then(data => setUser(data))
    }, [params.id]);
    
    if (!user) return null;

    return (
        <>
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <form>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.phone}</p>
                <p>Company name: {user.company.name}</p>
                <p>Department: {user.company.department}</p>
                <p>Title: {user.company.title}</p>
                <div className="buttons">
                    <button id="edit-button">Edit</button>
                    <button id="delete-button">Delete</button>
                </div>
            </form>
        </>
    );
}