import { FC } from "react";
import { StyledComment } from "./styles/Comments.styled";
import { Comment } from "../utils/types";

interface Props {
    comment: Comment,
}

const CommentComponent: FC<Props> = ( { comment } : Props ) => {
    const { author, content } = comment;

    return (
        <StyledComment>
            <p className="comment-author">{ author.name }</p>
            <p className="comment-content">{ content }</p>
        </StyledComment>
    )
};

export default CommentComponent;