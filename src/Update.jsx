import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const updatedUser = { name, email }
        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1>{loadedData.name}</h1>
            <form onSubmit={handleUpdate}>
                <input className='input input-bordered input-info' type="name" name="name" defaultValue={loadedData.name} />
                <br />
                <br />
                <input className='input input-bordered input-info' type="email" name="email" defaultValue={loadedData.email} />
                <br />
                <br />
                <input className='btn btn-accent text-white shadow-md font-bold text-lg' type="submit" name="Update" />
            </form>
        </div>
    );
};

export default Update;