import {supabase} from '../../client';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './../../App.css';

export default function ViewCreator() {

    const {id} = useParams();

    const [creator, setCreator] = useState({});

    const fetchCreator = async () => {
        console.log(id);
        const {data, error} = await supabase
            .from('creators')
            .select('*')
            .eq('id', id);
        if (error) {
            window.alert("Error fetching creator");
            console.log('error', error)
        } else {
            console.log('data', data);
            setCreator(data[0]);
        }
    }

    const deleteCreator = async (id) => {
        const {data, error} = await supabase
            .from('creators')
            .delete()
            .eq('id', id);
        if (error) {
            console.log('error', error)
        } else {
            console.log('data', data);
            window.alert("Creator Deleted Successfully");
            window.location.href = "/";
        }
    }

    useEffect(() => {
        fetchCreator();
    }, []);

    return (
        <section>
            <h1>{creator.name}</h1>
            <article>
                <header>
                    <img src={creator.imageURL} alt={creator.name} className="creator-image"/>
                </header>
                <p>{creator.description}</p>
                <footer>
                    <a href={creator.url} target="_blank" className="secondary">
                            <i className='bi bi-link-45deg'> Internet Profile</i>
                    </a>
                    <br />
                    <a href={`/edit/${creator.id}`} className="secondary"><i className="bi bi-pencil"> Edit Creator</i></a>
                    <br />
                    <button onClick={() => deleteCreator(creator.id)}>Delete Creator</button>
                </footer>
            </article>
        </section>
    );
}