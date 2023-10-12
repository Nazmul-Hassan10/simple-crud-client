import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email }
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        form.reset()
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <h1>SIMPLE CRUD</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input className='input input-bordered input-info' type="name" name="name" placeholder='email' />
        <br />
        <br />
        <input className='input input-bordered input-info' type="email" name="email" placeholder='name' />
        <br />
        <br />
        <input className='btn btn-accent text-white shadow-md font-bold text-lg' type="submit" name="Submit" />
      </form>
      <br />
      <Link className='btn btn-accent text-white shadow-md font-bold text-lg' to='/users'>Users</Link>
    </>
  )
}

export default App
