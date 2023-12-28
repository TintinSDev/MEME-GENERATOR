import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./logo192.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Meme project</h4>
        </header>
    )
}