import { useEffect, useState } from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import key from "../key.json";


function Card() {

    const [news, setNews] = useState([]);


    console.log("render");

    // useEffect(callbackFunction, dependencyArray)
    // Die Callback Funktion wird hier nur beim ersten render ausgeführt
    // Verhindert unnötige ladezeiten, gerade wichtig bei mobilen endgeräten
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${key.apiKey}`)
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