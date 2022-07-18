import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name: "꽁치",
        comment: "네, 제가 바로 꽁치입니다."
    },
    {
        name: "뭉치",
        comment: "간식이 제일 좋아요."
    },
    {
        name: "지언",
        comment: "저는 아무래도 노는 게..."
    },
]

function CommentList(props) {
  return (
    <div>
        { comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
            );
        })}
    </div>
  )
}

export default CommentList