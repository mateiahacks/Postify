import React, { FC } from 'react'
import { Post } from '../utils/types';
import { StyledPost } from './styles/StyledPost';
import { formatedDate } from '../utils/helpers';
import { BsHandThumbsUp } from 'react-icons/bs';

interface Props {
  post: Post,
}

const PostCard: FC<Props> = ({ post }) => {
  const { title, content, createdAt, likes } = post;

  return (
    <StyledPost>
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
            <BsHandThumbsUp 
            className='post-like-icon'
            size={20}/> {likes}
          </p>
          <p className='post-comments-button'>
            comments
          </p>
      </div>
    </StyledPost>
  )
}

export default PostCard;