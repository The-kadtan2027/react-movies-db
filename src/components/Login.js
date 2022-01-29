import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import API from "../App";

//components
import Button from "./Buttom/Button";

//styles
import {Wrapper} from "./LoginStyles";

//context 
import { Context } from "../Context";

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = async () =>  {
        setError(false);
        console.log("clicked")
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                //giving user typed input..
                username,
                password
            );

            console.log(sessionId);
            setUser({sessionId: sessionId.sessionId, username});

            navigate('/');

        } catch (error) {
            setError(true);
            console.log(error);
        }
    } 

    const handleChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === "username")setUsername(value);
        if(name === 'password') setPassword(value);
        
    }


    return(
        <Wrapper>
            <label >Username:</label>
            <input
             type="text"
             value={username}
             name="username"
             onChange={handleChange}

             />
             <input 
                type="password"
                value={password}
                name="password"
                onChange={handleChange}

                />
            <Button 
                text="Login" callback={handleSubmit}
            />

        </Wrapper>
    )
} 

export default Login