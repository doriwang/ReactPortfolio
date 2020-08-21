import React, { useState, useEffect } from "react"
import "../css/Home.css"

function Home() {
    // const line2content = "My name is Dori."
    // const line3content = "I am a full-stack web developer."

    const timer = (time) => {
        console.log("test", time)
        setTimeout(function () {
            console.log("testing")
            return (<p>"My name is Dori."</p>)
        }, time)
    }


    // const [contentState, setContentState] = useState({
    //     line2content: "",
    //     line3content: ""
    // })

    // const { line2content, line3content } = contentState

    // const timer = (content, time) => {
    //     console.log("test", content, time)
    //     setTimeout(function () {
    //         setContentState(contentState.content)
    //         console.log("testing")
    //         return content
    //     }, time)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setContextState({
    //             ...contentState, line2content: "My name is Dori."
    //         })
    //     }, 2000)
    //     setTimeout(() => {
    //         setContextState({
    //             ...contentState, line3content: "I am a full-stack web developer."
    //         })
    //     }, 4000)
    // }, [])

    return (
        <div className="container content">
            <h1 id="line1">Hello!</h1>
            <p id="line2">{ timer(2000) }</p>
            {/* <h1 id="line3">{ line3content }</h1> */ }
        </div>
    )
}

export default Home