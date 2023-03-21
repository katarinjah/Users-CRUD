import './AllUsers.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const onDeleteHandler = (id) => {
        fetch(`https://dummyjson.com/users/${id}`, {
          method: 'DELETE',
        }).then(res => {
          if (res.status !== 200) {
            console.log('Error');
            return;
          }
          const newUser = users.filter(user => user.id !== id);
          setUsers(newUser);
        });
    };

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
                <button id="create-user">Add user</button>
            </div>
            <div classname="users-container" style={{ overflowX: "auto" }}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Department</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td onClick={() => userClickHandler(user.id)}>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.company.name}</td>
                            <td>{user.company.department}</td>
                            <td>{user.company.title}</td>
                            <td>
                                <button id="edit">Edit</button>
                                <button id="delete" onClick={() => onDeleteHandler(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}