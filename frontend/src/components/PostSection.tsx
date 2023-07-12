import { StyledPostSection, PostsContainer } from './styles/PostSection.styled';
import { useAppSelector } from '../app/hooks';
import PostCard from './PostCard';
import PostFormOpen from './PostFormOpen';
import Modal from 'react-modal';

import PostForm from './PostForm';
import useToggle from '../utils/hooks/useToggle';
import Spinner from './Spinner';
import { useState } from 'react';
import { Post } from '../utils/types';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

export default function PostSection() {
  const { items, isLoading, pageNumber, pageSize } = useAppSelector(state => state.posts);
  const { page, name, post_id } = useParams();
  const { user } = useAppSelector(state => state.auth);
  const [isOpen, toggleIsOpen] = useToggle();
  const [editData, setEditData] = useState<Post | null>(null);

  const onClose = () => {
    toggleIsOpen();
    setEditData(null);
  }

  return (
    <StyledPostSection>
        <PostsContainer>
            {(user && !name) && <PostFormOpen onOpen={toggleIsOpen}/> }
            { (items.length === 0 && !isLoading) && <h1>No posts to show</h1> }
            {items.map((post, i) => 
                <PostCard key={i} 
                post={post} 
                togglePostForm={toggleIsOpen} 
                setEditData={setEditData}/>
            )}
            { isLoading && <Spinner size={60}/> }
            {(pageNumber && !isLoading && !post_id && items.length > 0) && 
            <Pagination 
            pageNumber={pageNumber}
            currentPage={Number(page)}
            pageSize={pageSize}
            /> }
        </PostsContainer>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          className='modal-container'
          overlayClassName='modal-overlay'
          ariaHideApp={false}
        >
          <PostForm toggleIsOpen={toggleIsOpen} editData={editData}/>
        </Modal>
              
    </StyledPostSection>
  )
}