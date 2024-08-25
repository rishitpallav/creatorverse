import { supabase } from "../../client";
import { useState, useEffect } from "react";
import './../../App.css';

export default function ShowCreators() {

    const [creators, setCreators] = useState([]);
    
    const fetchCreators = async () => {
        const { data, error } = await supabase
            .from('creators')
            .select('*');
        if (error) {
            window.alert("Error fetching creators");
            console.log('error', error)
        } else {
            console.log('data', data);
            setCreators(data);
        }
    }

    useEffect(() => {
        fetchCreators();
    }, []);

    return (
        <div>
            <h1>Creators</h1>
            <ul className="grid no-bullets">
                {creators.map((creator) => (
                    <li key={creator.id}>
                    <article>
                        <header>
                        <img src={creator.imageURL} alt={creator.name} className="creator-image" />
                        <h4>{creator.name}</h4>
                        </header>
                        <p>{creator.description.slice(0, 90)}...</p>
                        <footer>
                            
                        <a href={creator.url} target="_blank" className="secondary">
                            <i className='bi bi-link-45deg'></i>
                        </a>{" "}
                        <a href={`/edit/${creator.id}`} className="secondary"><i className="bi bi-pencil"></i></a>
                        {" "}
                        <a href={`/view/${creator.id}`} className="secondary"><i className="bi bi-eye"></i></a>
                        </footer>
                    </article>
                    </li>
                ))}
                </ul>
        </div>
    );
}