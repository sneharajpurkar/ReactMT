import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", conformPassword: "" });
    const route = useNavigate();

    function Register(e) {
        e.preventDefault();
        var userFromDB = JSON.parse(localStorage.getItem("user-data")) || [];


        var flag = false;
        for (var i = 0; i < userFromDB.length; i++) {
            if (userFromDB[i].email === userData.email) {
                flag = true;
            }
        }
        if (flag) {
            alert("registration not done");
        }
        else if (userData.password.length < 8) {
            alert("password must be 8 digit");
        }
        else if (userData.password.length !== userData.conformPassword.length) {
            alert("password not match")
        }
        else {
            userFromDB.push(userData);
            localStorage.setItem("user-data", JSON.stringify(userFromDB));
            setUserData({ name: "", email: "", password: "", conformPassword: "" })
            route('/login')
            alert("registion done");
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    return (
            <div>
                <form onSubmit={(e) => Register(e)}>
                    <label>Username</label><br />
                    <input onChange={updatingData} name='name' value={userData.name} type='text' /><br />
                    <label>Email</label><br />
                    <input onChange={updatingData} name='email' value={userData.email} type='email' /><br />
                    <label>Password</label><br />
                    <input onChange={updatingData} name='password' value={userData.password} type='password' /><br />
                    <label>Password Confirm</label><br />
                    <input onChange={updatingData} name='conformPassword' value={userData.conformPassword} type='password' /><br />
                    <input type='submit' value='Register' />
                </form>
            </div>
    )
}

export default Register