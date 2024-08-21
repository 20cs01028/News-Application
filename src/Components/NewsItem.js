import React from "react";
import '../CSS/NewsItem.css';

function NewsItem(props) {
    let { title, imageURL, newsUrl} = props;
    return (
        <div className="card-title">
            <img src={imageURL} />
            <div className="card-body">
                <h5>{title}</h5>
                <a href={newsUrl} target="_blank">
                    Read More...
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
