import { FC, useEffect, useRef, useState } from 'react';
import { StyledPostForm } from './styles/PostForm.styled';
import { InputContainer, InputField } from './styles/RegisterForm.styled';
import userIcon from '../assets/user.png';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import { createPost, editPost } from '../features/posts/postSlice';
import { Post } from '../utils/types';

interface Props {
    toggleIsOpen: () => void,
    editData: Post | null,
}

const PostForm: FC<Props> = ( { toggleIsOpen, editData }: Props) => {
    const { user } = useAppSelector(state => state.auth);

    const { isCreating, isCreated } = useAppSelector(state => state.posts);

    const [formData, setFormData] = useState({
        title: editData ? editData.title : '',
        content: editData ? editData.content : '',
    });

    const dispatch = useAppDispatch();

    const onChange = (e: any) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value, 
        }))
    }

    const { title, content } = formData;

    const textareaRef = useRef<any>(null);

    const onPost = () => {
        if (!title || !content) {
            return;
        }
        if (!editData) {
            dispatch(createPost(formData));
        } else {
            dispatch(editPost({ postId: editData._id, ...formData }));
        }
    }

    useEffect(() => {
        textareaRef.current.focus();
    }, []);

    useEffect(() => {
        if (isCreated) {
            toggleIsOpen();
        }
    }, [isCreating, toggleIsOpen, isCreated]);

    return (
        <StyledPostForm>
            <div className='post-form-user'>
                <img src={userIcon} alt='user' className="user-icon"/>
                <label>{ user?.name }</label>
            </div>
            <InputContainer>
                <label>Title</label>
                <InputField 
                    type='text'
                    name='title'
                    value={title}
                    onChange={onChange}
                />
            </InputContainer>
            <textarea placeholder='What do you want to talk about?'
                ref={textareaRef}
                name='content'
                value={content}
                onChange={onChange}
            />
            <button className={title && content ? 'post-button':'disabled-post-button'}
            onClick={onPost}
            >
                {isCreating ? <div className='loader'></div>:`${editData ? 'Save':'Post'}`}
            </button>
            
        </StyledPostForm>
    )
}

export default PostForm;