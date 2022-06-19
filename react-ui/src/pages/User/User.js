import Layout from "../../layouts/Layout/Layout";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const storedUsername = localStorage.getItem("username");

    const [words, setWords] = useState(null)

    useEffect(() =>{
        if(!storedUsername){
            navigate('/');
        }else {
            let userdata = {
                words: []
            };
            const storedUserdata = localStorage.getItem("data-"+storedUsername);
            if (storedUserdata) {
                userdata = JSON.parse(storedUserdata);
            }
            setWords(userdata.words);
        }
    }, [navigate])
    
    const handleClearTranslationsClick = async () => {
        let userdata = {
            words: []
        };
        localStorage.setItem("data-"+storedUsername, JSON.stringify(userdata));
        setWords(null);
    }

    const handleLogOutClick = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <Layout>
            <div className="mt-5 mb-5">
                <h1 className="text-center"> Welcome {storedUsername} </h1>
                <h4 className="mb-3 mt-3 text-center"> Here are your latest translations: </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Phrase</th>
                            <th>Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words && words.map((word, wordIndex) =>
                            <tr key={wordIndex}>
                                <td>{word}</td>
                                <td>
                                    {word.split("").map((letter, letterIndex) => {
                                        if(letter.match(/\w/)) {
                                            return <img src={`./individial_signs/${letter}.png`} alt="" width="8%" key={letterIndex} />
                                        } 
                                        if(letter === " ") {
                                            return <textarea cols="3" className="invisible" key={letterIndex} />
                                        }
                                        return <textarea hidden key={letterIndex} />
                                    })}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="buttons mt-3 ">
                    <button className="btn btn-warning me-2" onClick={handleClearTranslationsClick}> Clear translations</button>
                    <button className="btn btn-danger" onClick={handleLogOutClick}> Log out</button>
                </div>
            </div> 
        </Layout>    
    )
}

export default User