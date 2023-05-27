import { FC, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { PageContainer } from './styles/PageContainer.styled';
import Header from '../components/Header';
import { getPosts } from '../features/posts/postSlice';

const Home: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <PageContainer>
            <Header />

        </PageContainer>
    )
}

export default Home;