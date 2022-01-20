const PostLiked = ({postLiked}) => {
    console.log('you click me');
    return (
        <div className="post">
            {postLiked && <p>You like this post ⭐️ </p>}
        </div>
    )
}

export default PostLiked
