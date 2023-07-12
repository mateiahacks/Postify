import { FC, useState } from 'react';
import { StyledSearchbar } from './styles/Searchbar.styled';
import { HiSearch } from 'react-icons/hi';
import { SearchModal } from './styles/Searchbar.styled';
import Api from '../utils/Api';
import { useNavigate } from 'react-router-dom';

interface Props {

}

const Searchbar:FC<Props> = () => {
    const [word, setWord] = useState<string>('');
    const [data, setData] = useState({
        users: [],
        posts: [],
    });

    const navigate = useNavigate();

    const { users, posts } = data;
    
    const onChange = async (e: any) => {
        setWord(e.target.value);

        if (e.target.value.length === 0) return;

        const res = await Api.get('/api/search/', {word: e.target.value});
        
        setData({
            posts: res?.data.posts,
            users: res?.data.users,
        });
    }

    const onOverlayClick = () => {
        setWord('');
    }

    const onUserClick = (user: any) => {
        setWord('');
        navigate(`/user/${user.name}/page/1`);
    }

    const onPostClick = (post: any) => {
        setWord('');
        console.log(post);
        navigate(`/post/${post._id}`);
    }

    return (
        <StyledSearchbar>
            <HiSearch className='search-icon'/>
            <input 
            value={word}
            onChange={onChange}
            type='text' 
            placeholder='Search authors and posts'/>

            {
            word.length > 0 && 
            <>
            <SearchModal>
                { users.map((user: any, i) => 
                <div key={i} onClick={() => onUserClick(user)}>{user.name} <span>&#8226; user</span> </div>) }

                { posts.map((post: any, i) => <div key={i} onClick={() => onPostClick(post)}>{post.title} <span>&#8226; post</span></div>) }

                { (users.length===0 && posts.length===0) && <p>No result</p>}
            </SearchModal>

            <div className='overlay' onClick={onOverlayClick}></div>
            </>}

        </StyledSearchbar>
    )
};

export default Searchbar;