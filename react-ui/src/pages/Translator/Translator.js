import Layout from "../../layouts/Layout/Layout";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Translator = () => {
    const navigate = useNavigate();
    const storedUsername = localStorage.getItem("username");

    useEffect(() =>{
        if(!storedUsername){
            navigate('/');
        }
    })

    const [word, setWord] = useState("");
    const [submitWord, setSubmitWord] = useState("");

    const handleInputChange = event => {
        setWord(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmitWord(word.toLowerCase())
        if(word.length > 40){
            alert("word is too long ");
            setWord("");
        }else if(word.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)){
            let userdata = {
                words: []
            };
            const storedUserdata = localStorage.getItem("data-"+storedUsername);
            if (storedUserdata) {
                userdata = JSON.parse(storedUserdata);
            }
            userdata.words = [word].concat(userdata.words);
            userdata.words = userdata.words.slice(0, 10);
            localStorage.setItem("data-"+storedUsername, JSON.stringify(userdata));
        }
        else{
            alert("Invalid input - enter a phrase consisting of only letters and max one space");
            setWord("");
        }  
    }

    return (
        <Layout>
            <h1 className="text-center mt-5"> Welcome to the translation page </h1>
                
            <form className="w-50 m-auto mt-5" onSubmit={handleSubmit}>
                <label htmlFor="word">What would you like to translate?</label>
                <div className="input-group mb-3">
                    <input id="word" type="text" value={word} className="form-control" placeholder="Enter your text" onChange={handleInputChange}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Translate</button>
                    </div>
                </div>
            </form>

            { submitWord.length > 0 && 
                <div className="mt-3 p-4 w-75 m-auto">
                    <h3 className="text-center">Translation</h3>
                    <div>
                        {submitWord.split("").map((letter, index) => {
                            if(letter.match(/\w/)) {
                                return <img src={`./individial_signs/${letter}.png`} alt="" width="8%" key={index} />
                            } 
                            if(letter === " ") {
                                return <textarea cols="3" className="invisible" key={index} />
                            }
                            return <textarea hidden key={index} />
                        })}
                    </div>
                </div>
            }
        </Layout>
    )
}

export default Translator