import { useState } from "react";
import useNovels from "../customHooks/useNovels";

function AddNovelPage(){
    const {addNovel} = useNovels();
    const [form, setForm] = useState({
        title: "",
        author: "",
        genre: "",
        description:"",
        price: "",
        cover: ""
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        addNovel({...form, price: parseFloat(form.price)});
        setForm({
            title: "",
            author: "",
            genre: "",
            description:"",
            price: "",
            cover: ""
        });
    }

        return (
            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
                <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
                <input type="text" name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
                <input name="cover" placeholder="Cover Image URL" value={form.cover} onChange={handleChange} required />
                <button type="submit">Add Novel</button>
            </form>
        )

}
export default AddNovelPage;