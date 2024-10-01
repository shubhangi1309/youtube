import CommentsList from "./CommentsList";

// each comment can have "replies" also
const commentsData = [
    {
        name: "Martin Garrix",
        comment: "Lorem ipsum dipsum sipsum",
        replies : [
            {
                name: "Mezerg",
                comment: "Lorem ipsum dipsum sipsum",
                replies : [{
                    name: "Anchor Point",
                    comment: "Lorem ipsum dipsum sipsum",
                    replies : [{
                        name: "Ezekeel",
                        comment: "Bul Beni",
                        replies : [{
                            name: "Boris brecha",
                            comment: "Purple noise",
                            replies : [{
                                name: "Flume",
                                comment: "Paris",
                                replies : [{
                                    name: "Kygo",
                                    comment: "Hot Stuff",
                                    replies : []
                                }]
                            },]
                        }]
                    },]
                }]
            },
            {
                name: "The Weeknd",
                comment: "Lorem ipsum dipsum sipsum",
                replies : []
            },
            {
                name: "David Guetta",
                comment: "Lorem ipsum dipsum sipsum",
                replies : []
            }
        ]
    },
    {
        name: "Artbat",
        comment: "Return to Oz",
        replies : []
    },{
        name: "Diplo",
        comment: "Fortress",
        replies : []
    },
    {
        name: "Eric Prydz",
        comment: "We are a Mirage",
        replies : []
    }
];
const CommentsContainer = () => {

    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer;