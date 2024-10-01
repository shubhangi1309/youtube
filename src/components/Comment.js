const Comment = ({ data }) => {
    const { name, comment, replies } = data;

    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
            <img className="h-8"
                alt="user"
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{comment}</p>
            </div>
        </div>)
}

export default Comment;