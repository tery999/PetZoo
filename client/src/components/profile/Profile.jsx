import { useEffect, useState } from "react"
import * as styles from "./Profile.module.css"
import * as userService from "../../services/userService"

export default function Profile() {
    debugger;
    const [profileInfo, setProfileInfo] = useState({
        username: "",
        profileImg: ""
    });

    const [profileImgChange, setProfileImgChange] = useState("");

    const [viewChangeImg, setViewChangeImg] = useState(false);
    const changeViewFunc = () => {
        setViewChangeImg((prev) => setViewChangeImg(!prev));
    }

    const changeImageUrlFunc = (e) => {
        const value = e.target.value;
        setProfileImgChange(value)
    }

    const submitChangeImg = async (e) => {
        e.preventDefault();
       const result = await userService.updateUserImg(profileImgChange);
       setProfileInfo( (prev) => ({...prev , profileImg: result.profileImg}));
       setViewChangeImg(false);
    }


    useEffect(() => {
        userService.findUserInfo().then(data => {
            setProfileInfo(data);
            setProfileImgChange(data.profileImg);
        });

    }, [])

    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <h2>Profile</h2>
                <p>name: {profileInfo.username}</p>
                <div className={styles.changeImg}>
                    <p>Avatar:</p>
                    <img className={styles.profileImg} src={profileInfo.profileImg} alt="" />
                    <div onClick={changeViewFunc}> Change profile picture</div>
                </div>
                {viewChangeImg && <div className={styles.changeImgShown}>
                    <form className={styles.formName} onSubmit={submitChangeImg}>
                            <input className={styles.formInput} type="text" value={profileImgChange}  onChange={changeImageUrlFunc} />
                            <input type="submit" />
                    </form>
                </div>}
            </div>
        </div>
    )
}