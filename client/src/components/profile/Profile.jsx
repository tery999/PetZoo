import { useEffect, useState } from "react"
import * as styles from "./Profile.module.css"
import * as userService from "../../services/userService"

export default function Profile() {
    debugger;
    const [profileInfo, setProfileInfo] = useState({
        username: "",
        profileImg: ""
    });

    console.log("PROFILE STATE IS", profileInfo)

    useEffect(() => {
        userService.findUserInfo().then(data => setProfileInfo(data));
    }, [])

    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <h2>Profile</h2>
                <p>name: {profileInfo.username}</p>
                <div className={styles.changeImg}>
                    <img className={styles.profileImg} src={profileInfo.profileImg} alt="" />
                    <div> Change profile picture</div>
                </div>
            </div>
        </div>
    )
}