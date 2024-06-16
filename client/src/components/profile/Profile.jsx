import { useEffect, useState } from "react"
import * as styles from "./Profile.module.css"
import * as userService from "../../services/userService"

export default function Profile () {
    const [profileInfo, setProfileInfo] = useState({
        username: "",
        profileImg: ""
    });

    useEffect( ()=> {
        userService.findUserInfo().then( data => setProfileInfo(data));
    },[])

    return (
        <div className={styles.container}>
            name: {profileInfo.username}
            profileImg: {profileInfo.profileImg}
        </div>
    )
}