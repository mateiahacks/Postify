import React, { FC } from 'react'
import { Post } from '../utils/types';
import { StyledPost } from './styles/StyledPost';
import { formatedDate } from '../utils/helpers';
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { likePost } from '../features/posts/postSlice';

interface Props {
  post: Post,
}

const PostCard: FC<Props> = ({ post }) => {
  const { title, content, createdAt, likes, author, _id } = post;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const isLiked = user ? likes.includes(user._id) : false;

  console.log(_id);

  const like = () => {
    dispatch(likePost(_id));
  }

  return (
    <StyledPost>
      <p>Author: <span className='author-name'>{author.name}</span></p>
      <div className='post-top'>
        <h1>{ title }</h1>
        <p>{ formatedDate(createdAt) }</p>
      </div>
      <div className='post-content'>
        <p>
          { content }
        </p>
      </div>

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
          <p className='post-comments-button'>
            comments
          </p>
      </div>
      
    </StyledPost>
  )
}

export default PostCard;