const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const countComment = (comment) => {
  if (comment.replies) {
    return (
      1 +
      comment.replies.reduce((total, reply) => {
        return total + countComment(reply);
      }, 0)
    );
  } else {
    return 1;
  }
};

const countTotal = comments.reduce((total, comments) => {
  return total + countComment(comments);
}, 0);

console.log("total komentar:", countTotal); // 7
