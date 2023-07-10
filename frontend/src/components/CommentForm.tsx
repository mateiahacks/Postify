import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { CommentInput } from './styles/Comments.styled';
import { BsSendFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createComment } from '../features/comments/commentSlice';

interface Props {
    postId: string,
}

const CommentForm: FC<Props> = ( { postId } ) => {
    const [content, setContent] = useState<string>('');
    const dispatch = useAppDispatch();
    const inputRef = useRef<any>(null);
    const { user } = useAppSelector(state => state.auth);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (content === '') return;
        dispatch(createComment({ postId, content }));
        setContent('');
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={onSubmit}>
            {user && <CommentInput>
                <input 
                type='text'
                placeholder='Write Comment'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ref={inputRef}
                />
                <button type='submit'>
                <BsSendFill className='send-icon' size={15}/>
                </button>
            
            </CommentInput> }
            {!user && <p>Login to write comment</p>}

        </form>
    )
};

export default CommentForm;