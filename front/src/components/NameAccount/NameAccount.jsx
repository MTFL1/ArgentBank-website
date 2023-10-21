import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

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
    <div>
    {username ? (
        <div className='userstyle'>
      <Link to="/User">
        <i className="fas fa-user-circle"></i>
        <p>{username}</p>
      </Link>
      <Link to="/SignIn" >
        <button className='btn-user' onClick={handleLogout}>Logout</button>
        </Link>
      
      </div>
    ) : (
      <Link to="/SignIn">
        <i className="fas fa-user-circle"></i>
        <p>Sign In</p>
      </Link>
    )}
  </div>
     
  );
}

export default NameAccount;
