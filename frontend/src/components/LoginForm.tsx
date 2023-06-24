import { FC, FormEvent, useEffect, useState } from "react";
import { InputContainer, InputField, StyledForm } from "./styles/RegisterForm.styled";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { theme } from "../utils/constants";
import { StyledButton } from "./styles/Button.styled";
import { login } from "../features/auth/authSlice";

const LoginForm: FC = () => {
    const [passwordDisplay, setPasswordDisplay] = useState<string>("password");
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useAppDispatch();

    const { email, password } = formData;
    const { isLoading } = useAppSelector(state => state.auth);

    const onChange = (e: any) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value, 
        }))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === '' || password === '')
            return;

        dispatch(login(formData));
    }

    const onEyeClick = (): void => {
        if (passwordDisplay === "text")
            setPasswordDisplay("password")
        else 
            setPasswordDisplay("text");
    }

    useEffect(() => {

    }, []);

    return (
        <StyledForm onSubmit={onSubmit}>
            <div className="form-header">
                <p>Login</p>
            </div>

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
            {isLoading ? <div className="loader"></div>:"Login" }
            </StyledButton>

        </StyledForm>
    )
}

export default LoginForm;