import React, {useState} from "react";
import myPostsStyles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export function MyPosts (props) {

    const postsElements = props.posts.map(post => <Post key={post.id * Math.random()} message={post.message} likesCount={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updatePostText('');
    }

    const [postText, setPostText] = useState(props.newPostText);

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
        setPostText(text);
    }

    return(
        <div className={ myPostsStyles.content_posts }>
            <div>
                <h3>My posts</h3>

                <div className={ myPostsStyles.postsFormWrapper }>

                    <input ref={ newPostElement }
                           type={ 'text' }
                           placeholder={'Write something'}
                           className={ myPostsStyles.postsInput }
                           onChange={ onChangePost }
                           value={ postText }
                    >

                    </input>

                    <button onClick={ addPost } >Add post</button>

                </div>

                <div>

                    { postsElements }

                </div>

            </div>

        </div>

    )
}