"use client"
import Jwt from "jsonwebtoken"
import React from "react";

export default function Home(){
    const [token, setToken] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    React.useEffect(() => {
        localStorage.removeItem('token');
      }, []);

    const saveToken = (token) => {
    localStorage.setItem('token', token)
    setToken(token)
    }

    const removeToken = () => {
    localStorage.removeItem('token')
    setToken('')
    }  

    async function Login(){
        if(userName === '' || password === '') 
            return alert("Veuillez remplir tous les champs")
        var response = await fetch("https://projet02-dicjprog4.cegepjonquiere.ca/api/Authentification/login", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: userName,
            password: password
          })
        });
        var token = await response.json()
        var decoded = Jwt.decode(token.token)
        var roles = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        var isadmin = roles.includes("Administrateur")
        console.log(isadmin)
        if(isadmin){
            saveToken(token.token)
            window.location.href = '/'
        }
    }

    return(
        <form className="d-flex flex-column" action={Login}>
            <legend className="text-center">Login</legend>
            <div className="col-4 mx-auto">
                <label htmlFor="userName">username</label>
                <div>
                    <input className="txtNom form-control" type="text" name="userName" id="userName" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="ads@email.com"/>
                </div>
            </div>
            <div className="col-4 mx-auto">
                <label htmlFor="mdp">Mot de Passe</label>
                <div>
                    <input className="txtImg form-control" type="text" name="mdp" id="mdp" value={password} onChange={e=>setPassword(e.target.value)} placeholder="***"/>
                </div>
            </div>
            <div className="p-3 mx-auto d-flex space-between">
                <button type="submit"> Login </button>
            </div>
        </form> 
    )
}