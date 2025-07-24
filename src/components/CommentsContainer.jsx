const commentsData = [
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Atulya Jaiswal",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [
          {
            name: "Atulya Jaiswal",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            replies: [
              {
                name: "Atulya Jaiswal",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies: [
                  {
                    name: "Atulya Jaiswal",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                    replies: [
                      {
                        name: "Atulya Jaiswal",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Atulya Jaiswal",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            replies: [
              {
                name: "Atulya Jaiswal",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Atulya Jaiswal",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Atulya Jaiswal",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Atulya Jaiswal",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Atulya Jaiswal",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://www.svgrepo.com/show/529279/user-circle.svg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-gray-400 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="px-6">
      <h1 className="text-xl font-bold mb-4">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
