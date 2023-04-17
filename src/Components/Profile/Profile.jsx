import React, {Fragment} from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import profileStyles from './Profile.module.css';

export function Profile(props) {
    return (
        <div className={ profileStyles.profileWrapper }>

            <ProfileInfo/>
                <MyPosts store={ props.store }
            />

        </div>
    )
}