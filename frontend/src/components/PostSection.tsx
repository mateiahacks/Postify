import React from 'react';
import { StyledPostSection, PostsContainer } from './styles/PostSection.styled';
import { useAppSelector } from '../app/hooks';
import PostCard from './PostCard';
import PostFormOpen from './PostFormOpen';
import Modal from 'react-modal';

import PostForm from './PostForm';
import useToggle from '../utils/hooks/useToggle';

export default function PostSection() {
  const { items } = useAppSelector(state => state.posts);
  const { user } = useAppSelector(state => state.auth);
  const [isOpen, toggleIsOpen] = useToggle();
  

  return (
    <StyledPostSection>

        <PostsContainer>
            {user && <PostFormOpen onOpen={toggleIsOpen}/> }
            {items.map((post) => 
                <PostCard post={post}/>
            )}
        </PostsContainer>
      
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleIsOpen}
          className='modal-container'
          overlayClassName='modal-overlay'
        >
          <PostForm />
        </Modal>
              
    </StyledPostSection>
  )
}