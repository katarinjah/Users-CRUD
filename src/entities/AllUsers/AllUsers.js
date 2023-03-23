import './AllUsers.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const createUserHandler = () => {
        navigate('/users/create')
    }

    const userClickHandler = (id) => {
        navigate(`/users/${id}`);
    };

    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then(response => response.json())
          .then(data => setUsers(data.users))
    }, []);

    return (
        <>
            <h1>All users</h1>
            <hr/>
            <div id="button-container">
                <button id="create-user" onClick={() => createUserHandler()}>Add user</button>
            </div>
            <div className="users-container" style={{ overflowX: "auto" }}>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Title</th>
                        </tr>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="user-name" onClick={() => userClickHandler(user.id)}>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.email}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </>
    );
}