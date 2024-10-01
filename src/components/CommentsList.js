import Comment from "./Comment"

const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use index as keys
    return (comments.map((comment, index) => {
        return (
            <div key={index}>
                <Comment data={comment} />
                <div className="pl-5 mf-5 border border-l-black">
                    <CommentsList comments={comment.replies}/>
                </div>
            </div>
        )
    }))
}

export default CommentsList;