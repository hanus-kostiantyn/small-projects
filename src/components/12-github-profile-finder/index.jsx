import { useEffect, useState } from "react"
import User from "./user";
import './styles.css';


export default function GitHubProfileFinder() {

    const [userName, setUserName] = useState('hanus-kostiantyn');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data);
        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName('')
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input 
            name="search-by-username"
            type="text" 
            placeholder="Search Github Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Search
            </button>
        </div>

        {
            userData !== null ? <User user={userData}/> : null
        }
 
    </div>
}