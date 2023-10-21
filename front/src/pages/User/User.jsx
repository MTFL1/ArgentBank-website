import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import EditUserName from "../../components/Edit/EditUserName";
import Transactions from "../../components/Transactions/Transactions";



function User() {

    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
 
    // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
    useEffect(() => {
       if (!token) {
          navigate("/SignIn");
       }
    }, [token, navigate]);

    return (
      
<main className="main bg-dark">
<EditUserName/>
      
<Transactions/>
    </main>
    );
  }
  
  export default User;
  