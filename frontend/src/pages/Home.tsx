import { FC, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { PageContainer } from './styles/PageContainer.styled';
import Header from '../components/Header';
import PostSection from '../components/PostSection';
import { useParams } from 'react-router-dom';
import { getPost, getPosts } from '../features/posts/postSlice';

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const { page, name, post_id } = useParams();

    useEffect(() => {
        if (name) {
            dispatch(getPosts({ page: Number(page), name }));
        } 
        if (post_id) {
            dispatch(getPost(post_id));
        }
        else {
            dispatch(getPosts({ page: Number(page) }));
        }
    }, [dispatch, page, name, post_id]);

    return (
        <PageContainer>
            <Header />
            <PostSection />
        </PageContainer>
    )
}

export default Home;