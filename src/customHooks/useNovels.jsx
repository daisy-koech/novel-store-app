import {useState, useEffect} from "react";

function useNovels() {
    const [novels, setNovels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/novels")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Could not load the book data. Please try again later")
            }
            return response.json();
        })
        .then((bookData) => setNovels(bookData))
        .catch(error => console.error("Error loading novels:", error))
    }, []);

    //POST
    function addNovel(novel) {
        return fetch("http://localhost:5000/novels", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(novel)
        })
        .then(response => response.json())
        .then((newNovel) => setNovels([...novels, newNovel]))
    };

    //PATCH
    function updateNovel(id, updates) {
        return fetch(`http://localhost:5000/novels/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updates)
        })
        .then(response => response.json())
        .then((updatedNovel) => {
            setNovels(novels.map((novel) => (novel.id === id ? updatedNovel : novel)))
        })
        .catch(error => console.error(error))
    }
    return {novels, addNovel, updateNovel};
}
export default useNovels;





