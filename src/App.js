import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from "./Components/Header/Header";
import { Aside } from "./Components/Aside/Aside";
import { Profile } from "./Components/Profile/Profile";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import { Music } from "./Components/Music/Music";
import { Newsfeed } from "./Components/Newsfeed/Newsfeed";
import { Settings } from "./Components/Settings/Settings";
import {Fragment} from "react";

function App(props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Aside friendsAside={ props.state.friendsAside }/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'}
                           element={
                               <Profile
                               state={ props.state.profilePage }
                               addPost={ props.addPost }
                               updatePostText={ props.updatePostText }
                           />}
                    />

                    <Route path={'/dialogs/*'}
                           element={ <Dialogs state={props.state.dialogsPage}/> }/>

                    <Route path={'/music'}
                           element={ <Music/> }/>

                    <Route path={'/newsfeed'}
                           element={ <Newsfeed/> }/>

                    <Route path={'/settings'}
                           element={ <Settings/> }/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
