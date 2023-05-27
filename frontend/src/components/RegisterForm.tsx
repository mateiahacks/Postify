import React, { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledRegisterForm, InputContainer, InputField } from "./styles/RegisterForm.styled";
import { StyledButton } from './styles/Button.styled';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { theme } from "../utils/constants";
import { register } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from '../app/hooks';

const RegisterForm: FC = () => {
    const [passwordDisplay, setPasswordDisplay] = useState<string>("password");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = formData;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isSuccess } = useAppSelector(state => state.auth);

    const onChange = (e: any) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value, 
        }))
    }

    const onEyeClick = (): void => {
        if (passwordDisplay === "text")
            setPasswordDisplay("password")
        else 
            setPasswordDisplay("text");
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        dispatch(register(formData));
    }

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
        }

    }, [isSuccess, navigate]);

    return (
        <StyledRegisterForm onSubmit={onSubmit}>
            <div className="form-header">
              <p>Registration</p>  
            </div>
            
            <InputContainer>
                <label>Username</label>
                <InputField 
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                />
            </InputContainer>

            <InputContainer>
                <label>Email</label>
                <InputField 
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                />
            </InputContainer>

            <InputContainer>
                <label>Password</label>
                <InputField 
                type={passwordDisplay}
                name="password"
                value={password}
                onChange={onChange}
                />
                {passwordDisplay==="text" ? 
                <FaEye className="eye-icon" onClick={onEyeClick}/> : 
                <FaEyeSlash className="eye-icon" onClick={onEyeClick}/>}
            </InputContainer>

            <StyledButton 
            bg={theme.colors.green}
            font="white"
            type="submit"
            >
                Register
            </StyledButton>
        </StyledRegisterForm>
    )
}

export default RegisterForm;