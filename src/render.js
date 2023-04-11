import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";
import React from "react";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <BrowserRouter>
            <App state={ state } addPost={ addPost } updatePostText={ updateNewPostText }/>
        </BrowserRouter>

    )
}

