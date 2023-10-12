import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loadUsers = useLoaderData()

    const [users, setUsers] = useState(loadUsers)

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                // alert('User deleted successfully');
                const remaining = users?.filter(user => user?._id !== id);
                setUsers(remaining);
            } else {
                alert('User not found or not deleted.');
            }
        })
    }

    return (
        <div>
            <h1>{users?.length}</h1>
            <br />
            <div>
                {
                    users?.map(user => <p key={user?._id}>{user?.name}: {user?.email} <Link to={`/update/${user._id}`} className="btn">Update</Link> <button
                        className="btn"
                        onClick={() => handleDelete(user?._id)}
                    >X</button></p>)
                }
            </div>
            <Link className='btn btn-accent text-white shadow-md font-bold text-lg' to='/'>Form</Link>
        </div>
    );
};

export default User;