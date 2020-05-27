import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (

        <div className={styles.item}>

            <img src="https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-img-file-document-icon-png-image_896965.jpg"/>
            {props.message}

            <div>
                {props.likecounter}
                <span> likes</span>
            </div>

        </div>

    )

}

export default Post;