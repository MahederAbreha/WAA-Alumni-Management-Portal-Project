import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import profile from '../../service/profile';

const ProfilePage = () => {

    const [me, setMe] = useState({});
    const [role, setRole] = useState({});
    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();

    const onClicked = (id) => {
        navigate('/profile/user/' + id);
    }

    useEffect(() => {
        if (currentUser?.id) {
            profile.getMe().then(resp => {
                setMe(resp.data);
                setRole(resp.data.roles[0])
            }).catch(err => {
                console.log(err);
            })
        }
    }, [])

    return (
        <div className="container mt-3">
            {/* <h3>username: {me.username}</h3>
            <h3>firstname: {me.firstName}</h3>
            <h3>lastname: {me.lastName}</h3>
            <h3>email: {me.email}</h3>
            <h3>last logged: {me.last_logged}</h3>
            <h3>role: {role.name}</h3>

            {me.address != null && me.address.city != null &&
                <h4>city: {me.address.city}</h4>
            }

            {me.address != null && me.address.street != null &&
                <h4>street: {me.address.street}</h4>
            }

            {me.address != null && me.address.state != null &&
                <h4>state: {me.address.state}</h4>
            }

            {me.address != null && me.address.state != null &&
                <h4>zip: {me.address.zip}</h4>
            } */}



            {/* we are adding some functionality */}

            <table className="table table-striped table-dark">
  <thead class="thead-dark">
    <tr>
      <th scope="col">UserName</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Last Logged</th>
      <th scope="col">Role</th>
      <th scope="col">City</th>
      <th scope="col">Street</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{me.username}</th>
      <td>{me.firstName}</td>
      <td>{me.lastName}</td>
      <td> {me.email}</td>
      <td>{me.last_logged}</td>
      <td>{role.name}</td>
      {me.address != null && me.address.city != null &&
                <td> {me.address.city}</td>
            }
     {me.address != null && me.address.street != null &&
                <td> {me.address.street}</td>
            }

    {me.address != null && me.address.state != null &&
                <td> {me.address.state}</td>
         }

     {me.address != null && me.address.state != null &&
                <td> {me.address.zip}</td>
            }
     
      
    </tr>
  </tbody>
</table>



{/* we added some functionality */}

            <button onClick={() => { onClicked(currentUser?.id) }} className='btn btn-info'>Edit Profile</button>
        </div>
    )
}

export { ProfilePage }