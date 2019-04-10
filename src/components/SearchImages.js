import React, { Component } from 'react'

export const SearchImages = props => {
    return (
        <div className="App-images-search">
            <div className="col-images">
                {props.search1.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
            <div className="col-images">
                {props.search2.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
            <div className="col-images">
                {props.search3.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
        </div>
    );
}
