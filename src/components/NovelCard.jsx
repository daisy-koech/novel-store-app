function NovelCard({novel}) {
    return(
        <div className="novel-card">
            <img src={novel.cover} alt={novel.title} />
            <div className="novel-card-content">
                <h3>{novel.title}</h3>
                <p><b>Author: </b>{novel.author}</p>
                <p><b>Genre: </b>{novel.genre}</p>
                <p>{novel.description}</p>
                <p><b>Price:</b>{novel.price}</p>
            </div>
        </div>
    )
}
export default NovelCard;