import {useState} from "react";
import useNovels from "../customHooks/useNovels";
import NovelCard from "../components/NovelCard";

function NovelsPage() {
    const {novels} = useNovels();
    const [search, setSearch] = useState("");

    const filteredNovels = novels.filter((novel) => (
        novel.title.toLowerCase().includes(search.toLowerCase()) ||
        novel.author.toLowerCase().includes(search.toLowerCase()) ||
        novel.genre.toLowerCase().includes(search.toLowerCase())
    ));
    return (
        <div>
            <h2>All Novels</h2>

            <input 
            type="text"
            placeholder="Search novel by title, author, genre.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <div className="novels-container">
                {filteredNovels.map((novel) => (
                    <NovelCard key={novel.id} novel={novel} />
                ))}
            </div>
        </div>
    )
}
export default NovelsPage;