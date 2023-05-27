import { FC } from 'react';
import { PageContainer } from './styles/PageContainer.styled';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

const Registration: FC = () => {
    return (
        <PageContainer>
            <Header />
            <RegisterForm />
        </PageContainer>
    )
}

export default Registration;