import React, { Component } from 'react'

export const Images = props => {

    return (
        <div className="App-images-content">

            <div className="col-images">
                {props.col1.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
            <div className="col-images">
                {props.col2.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
            <div className="col-images">
                {props.col3.map(img =>
                    <a href={img.links.html} target="_blank" key={img.id}>
                        <img src={img.urls.small} />
                    </a>
                )
                }
            </div>
        </div>
    );
}
