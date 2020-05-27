import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>

                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <div className={styles.posts}>
                    <Post message='Hi, How are you?' likecounter='10' />
                    <Post message='Huy' likecounter='100' />
                </div>
            </div>

        </div>
    )
}

export default MyPosts;