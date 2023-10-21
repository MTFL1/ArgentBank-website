import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';


function NameAccount() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.name.username);

  const handleLogout = () => {
    dispatch({ // Enregistrement du token dans le store
       type: 'LOGOUT',
    });
 };

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            dispatch({
              type: 'SET_USER',
              payload: {
                username: data.body.userName,
                firstname: data.body.firstName,
                lastname: data.body.lastName,
              },
            });
          } else {
            console.log("Erreur lors de la récupération du profil de l'utilisateur");
          }
        } catch (error) {
          console.log("Erreur lors de la récupération du profil de l'utilisateur");
        }
      };

      fetchData();
    }
  }, [dispatch, token]);

  return (
    <div >
    {username ? (
        <div className='user-style'>
          <div>
          <Link to="/User" className='no-underline user-style'>
        <i className="fa fa-user-circle pdg-t-17"></i>
        <p>&ensp;{username}&emsp;</p>
      </Link>
          </div>
      
   <div>
   <Link to="/SignIn" className='no-underline'>
          <p onClick={handleLogout}>Sign Out</p>
      </Link>
   </div>
      </div>
    ) : (
      <Link to="/SignIn" className='no-underline user-style'>
        <i className="fa fa-user-circle pdg-t-17"></i>
        <p>&ensp;Sign In</p>
      </Link>
    )}
  </div>
     
  );
}

export default NameAccount;
