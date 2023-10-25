import React, { useState, useEffect } from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import { Link } from 'react-router-dom';
 import 'font-awesome/css/font-awesome.min.css';


 function EditUserName() {

    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const username = useSelector((state) => state.name.username);
    const firstname = useSelector((state) => state.name.firstname);
    const lastname = useSelector((state) => state.name.lastname);

    const [showForm, setShowForm] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    const toggleForm = () => {
       setShowForm(!showForm);
    };

    const handleInputChange = (event) => {
       setNewUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
       event.preventDefault();

       try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
             'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({userName: newUsername}),
          });

          if (response.ok) {
          console.log(response);
          dispatch({
             type: 'SET_USER',
             payload: {
                username: newUsername,
                firstname: firstname,
                lastname: lastname,
             },
          });


          } else {
          console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
          }

       } catch (error) {
          console.error('Erreur lors de la requête :', error);
       }
       setNewUsername('');
       setShowForm(false);
    };

    useEffect(() => {
       setNewUsername(username);
    }, [username]);

    return (
       <div className='background-account'>
          <section className="account-header">
             <h1>Welcome back, {firstname} {lastname} !</h1>

             {!showForm && (
                <button className="edit-button" onClick={toggleForm}>Edit name</button>
             )}
          </section>
          {showForm && (
             <form className="account-edit-form" onSubmit={handleSubmit}>

               <h2>Edit User info </h2>
               <div className='input-edit'>
                <label>New Username: &ensp;</label>
                <input type="text" value={newUsername} onChange={handleInputChange}/>
               </div>

               <div className='input-edit'>
               <label>First Name: &emsp;&emsp;&ensp;</label>
                <input type="text" value={firstname} disabled/>
               </div>
           
               <div className='input-edit'>
                <label>Last Name: &emsp;&emsp;&ensp;</label>
                <input type="text" value={lastname} disabled />
                </div>

               <div className='row-confirm-cancel'>
               <button type="submit" className='transaction-button'>Confirm </button>&emsp;&emsp;&emsp;
               <Link  to="/SignIn"><button className="cancel-btn">Cancel</button></Link>
               </div>
            </form>
          )}
       </div>
    );
 }

 export default EditUserName;