import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userData, setUserData] = useState({email: "", password: ""});
    const route = useNavigate();

    function Login(e) {
        e.preventDefault();
        var userFromDB = JSON.parse(localStorage.getItem("user-data"));

        var flag = false;
        var CurrentUser;
        for(var i = 0; i < userFromDB.length; i++){
            if(userFromDB[i].email === userData.email && userFromDB[i].password === userData.password){
                CurrentUser = userFromDB[i];
                flag = true;
            }
        }
        if(flag){
            userFromDB.push(userData);
            localStorage.setItem("current-user", JSON.stringify(CurrentUser));
            setUserData({ email: "", password: ""})
            route('/home')
            alert("Login done")
        }
        else{
            alert("login not done");
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    return (
        <div>
            <form onSubmit={(e) => Login(e)}>
                <label>Email</label><br />
                <input onChange={updatingData} name='email' value={userData.email} type='email' /><br />
                <label>Password</label><br />
                <input onChange={updatingData} name='password' value={userData.password} type='password' /><br />
                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login
