import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className={styles.content}>
            {/*<img src="https://cdn.mmaweekly.com/wp-content/uploads/2017/08/WME-IMG-750x370-748x370.jpg" alt=""/>*/}

            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;