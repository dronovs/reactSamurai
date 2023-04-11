import React from "react";
import profileInfoStyles from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <div>

            <div>
                <img className={ profileInfoStyles.profile_bg } src="https://media.istockphoto.com/id/1225153424/photo/night-view-of-city-lights-in-front-of-marble-square-xuzhou-china.jpg?s=612x612&w=0&k=20&c=N7cfMu-ChX4uf6tsywMhLuKg2_j8JVGF15Rvzs9emr0=" alt="content-bg"/>
            </div>

            <div className={ profileInfoStyles.profile_avatar_description }>
                <img className={ profileInfoStyles.profile_avatar } src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" alt="content-logo"/>
                <div className={ profileInfoStyles.profile_description }>Description</div>
            </div>

        </div>
    );
}