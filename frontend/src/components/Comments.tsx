import { FC } from "react";
import { CommentsSection } from "./styles/Comments.styled";
import { useAppSelector } from "../app/hooks";
import Comment from "./Comment";
import Spinner from "./Spinner";
import CommentForm from "./CommentForm";

interface Props {
    postId: string,
}

const Comments: FC<Props> = ( { postId } ) => {

    const { items, isLoading } = useAppSelector(state => state.comments);

    return (

        <CommentsSection>
            { (isLoading && items.length===0) && 
            <div className="comments-spinner">
                <Spinner size={30}/>
            </div> }
            <div className="comments">
            {items.map((comment, i) => 
                <Comment key={i} comment={comment}/>
            )}
            </div>
            <CommentForm postId={postId}/>
        </CommentsSection>
    )
}

export default Comments;