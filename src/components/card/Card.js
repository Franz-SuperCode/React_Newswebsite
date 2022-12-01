import { useEffect, useState } from "react";
import "./Card.css"
import { Link } from "react-router-dom";


function Card() {

    const [news, setNews] = useState([]);


    console.log("render");

    // useEffect(callbackFunction, dependencyArray)
    // Die Callback Funktion wird hier nur beim ersten render ausgeführt
    // Verhindert unnötige ladezeiten, gerade wichtig bei mobilen endgeräten
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=de&apiKey=892e4edc4b1b469ab84bb6ff3af0060a")
            .then(res => res.json())
            .then((articlesAPI) => {
                setNews(articlesAPI.articles);
                console.log(articlesAPI);
            });
    }, []);
    console.log(news);

    return (
        <div>
            {news.map((object, index) => {
                return (
                    <div className="card" key={"news" + index}>
                        <p>{object.title}</p>
                        <p>{object.description}</p>
                        <img src={object.urlToImage} />
                        <a href={object.url}><button>Read more</button></a>
                    </div>
                )
            })}
        </div>
    );
}

export default Card;