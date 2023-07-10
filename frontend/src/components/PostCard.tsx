import React, { FC, useEffect, useRef, useState } from 'react'
import { Post } from '../utils/types';
import { StyledPost } from './styles/StyledPost';
import { formatedDate } from '../utils/helpers';
import { BsHandThumbsUp, BsHandThumbsUpFill, BsThreeDotsVertical } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deletePost, likePost } from '../features/posts/postSlice';
import Modal from 'react-modal';
import useToggle from '../utils/hooks/useToggle';
import { getComments } from '../features/comments/commentSlice';
import { reset } from '../features/comments/commentSlice';
import Comments from './Comments';
import Popup from './Popup';
import ConfirmationModal from './ConfirmationModal';

interface Props {
  post: Post,
  togglePostForm: () => void,
  setEditData: (f: Post | null) => void,
}

const initialStyleState = {
    maxHeight: 192,
    overflow: 'hidden',
};

const PostCard: FC<Props> = ({ post, togglePostForm, setEditData }) => {
  const { title, content, createdAt, likes, author, _id } = post;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const isLiked = user ? likes.includes(user._id) : false;
  const [isCommentsOpen, toggleIsCommentsOpen] = useToggle(false);
  const [style, setStyle] = useState<any>(initialStyleState);
  const [height, setHeight] = useState(0);
  const [showPopup, toggleShowPopup] = useToggle(false);
  const [showConfirmation, toggleShowConfirmation] = useToggle();
  const ref = useRef<any>(null);

  const like = () => {
    dispatch(likePost(_id));
  }

  const onEdit = () => {
    togglePostForm();
    setEditData(post);
  }

  const onCommentsClick = () => {
    toggleIsCommentsOpen();
    dispatch(getComments(_id));
  }

  const onCommentsClose = () => {
    toggleIsCommentsOpen();
    dispatch(reset());
  }

  const onShowMore = () => {
    if (style.maxHeight) {
      setStyle({});
    } else {
      setStyle(initialStyleState);
    }
  }

  const onDelete = () => {
    toggleShowConfirmation();
    dispatch(deletePost(_id));
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <StyledPost>
      <p>Author: <span className='author-name'>{author.name}</span></p>
      <div className='post-top'>
        <h1>{ title }</h1>
        <p>{ formatedDate(createdAt) }</p>
      </div>
      <div className='post-content' style={style} ref={ref}>
        <p>
          { content }
        </p>
      </div>
      {height >= initialStyleState.maxHeight && 
      <p
        onClick={onShowMore}
        className='show-more'
        >{style.maxHeight ?  "Show more":"Show less" }</p> }
      <div className='post-bottom'>
        
          <p>
            {isLiked ? 
            <BsHandThumbsUpFill
            className='post-like-icon'
            onClick={like}
            size={20}
            />:
            <BsHandThumbsUp 
            className='post-like-icon'
            onClick={like}
            size={20}/> } 
            
            
            {likes.length}
          </p>
          <p className='post-comments-button' onClick={onCommentsClick}>
            comments
          </p>
          <Modal 
            isOpen = {isCommentsOpen}
            onRequestClose={onCommentsClose}
            className='modal-container'
            overlayClassName='modal-overlay'
            ariaHideApp={false}
          >
            <Comments postId={_id}/>
          </Modal>
      </div>
      {user?._id === author._id && <BsThreeDotsVertical className='three-dots-icon' size={20} onClick={toggleShowPopup}/> }
      {showPopup && 
      <Popup 
      toggleShow={toggleShowPopup}
      show={showPopup}
      openConfirmation={toggleShowConfirmation}
      onEdit={onEdit}
      /> }
      { 
        <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={toggleShowConfirmation}
        afterYes={onDelete}
        afterNo={toggleShowConfirmation}
        />
      }
      
    </StyledPost>
  )
}

export default PostCard;