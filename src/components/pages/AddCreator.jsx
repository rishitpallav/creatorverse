import { supabase } from '../../client';

export default function AddCreator() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('creators')
            .insert([
                {
                    name: e.target.name.value,
                    url: e.target.url.value,
                    description: e.target.description.value,
                    imageURL: e.target.imageURL.value
                }
            ]);
        if (error) {
            window.alert("Error adding creator");
            console.log('error', error);
        } else {
            window.alert("Creator Added Successfully");
            window.location.href = "/";
        }
    }

    return (
        <div>
            <section>
                <h1>Add New Creator</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Full Name" aria-label="Text" />
                    </label>
                    <label>
                        URL:
                        <input type="text" name="url" placeholder="Profile URL" aria-label="Url" />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" placeholder="Full Name is a creator..." aria-label="Professional short bio" />
                    </label>
                    <label>
                        Image URL:
                        <input type="text" name="imageURL" placeholder="Image URL" />
                    </label>
                    <button type="submit">Add Creator</button>
                </form>
            </section>
        </div>
    );
}
