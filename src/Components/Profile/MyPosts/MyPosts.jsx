import React, {useState} from "react";
import myPostsStyles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export function MyPosts (props) {
    const postsElements = props.store.state.profilePage.posts.map(post => <Post key={post.id * Math.random()} message={post.message} likesCount={post.likes}/>);
    const newPostElement = React.createRef();

    let [createPost, setCreatePost] = useState('');
    let addPost = () => {
        setCreatePost(createPost = newPostElement.current.value);
        props.store.addPost(createPost);
        setPostText('');
    }

    const [postText, setPostText] = useState(props.store.state.profilePage.newPostText);
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.store.updatePostText(text);
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