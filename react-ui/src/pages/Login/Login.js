import Layout from "../../layouts/Layout/Layout";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const storedUsername = localStorage.getItem("username");

    useEffect(() =>{
        if(storedUsername){
            navigate('/translate');
        }
    })

    const handleNameChange = event => {
        setUsername(event.target.value);
    }

    const handleSubmitNameClick = async () => {
        localStorage.setItem("username", username);
        if(username.match(/^[a-zA-Z-]+$/)){
            navigate("/translate");
        }else{
            localStorage.clear();
            alert('Invalid input! Please enter a valid name, consisting of only letters');
        }
    }

    return (
        <Layout>
            <h1 className="mt-5">
                Lost in translation
            </h1>
            <h3>Get Started</h3>
            <form className="w-50 m-auto mt-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="What is your name?" onChange= {handleNameChange} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={handleSubmitNameClick}>Login</button>
                    </div>
                </div>
            </form>
        </Layout>    
    )
}

export default Login