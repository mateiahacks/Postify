import { FC } from 'react';
import { PageContainer } from './styles/PageContainer.styled';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
    return (
        <PageContainer>
            <Header />
            <LoginForm />
        </PageContainer>
    )
}

export default Login;