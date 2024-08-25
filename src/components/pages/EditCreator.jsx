import { supabase } from "../../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditCreator() {
    
        const {id} = useParams();
    
        const [creator, setCreator] = useState({});
    
        const fetchCreator = async () => {
            const { data, error } = await supabase
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
    
        useEffect(() => {
            fetchCreator();
        }, []);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const { error } = await supabase
                .from('creators')
                .update([
                    {
                        name: e.target.name.value,
                        url: e.target.url.value,
                        description: e.target.description.value,
                        imageURL: e.target.imageURL.value
                    }
                ])
                .eq('id', id);
            if (error) {
                window.alert("Error updating creator");
                console.log('error', error);
            } else {
                window.location.href = "/";
            }
        }
    
        return (
            <div>
                <section>
                    <h1>Edit Creator</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Full Name" aria-label="Text" defaultValue={creator.name} />
                        </label>
                        <label>
                            URL:
                            <input type="text" name="url" placeholder="Profile URL" aria-label="Url" defaultValue={creator.url} />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description" placeholder="Full Name is a creator..." aria-label="Professional short bio" defaultValue={creator.description} />
                        </label>
                        <label>
                            Image URL:
                            <input type="text" name="imageURL" placeholder="Image URL" defaultValue={creator.imageURL} />
                        </label>
                        <button type="submit">Update Creator</button>
                    </form>
                </section>
            </div>
        );
    }

