import { FC } from "react";
import { CreatePostFakeInput, StyledPostFormOpen } from "./styles/PostForm.styled";
import { InputContainer } from "./styles/RegisterForm.styled";
import user from '../assets/user.png';

interface props {
    onOpen: () => void;
}

const PostFormOpen: FC<props> = ({ onOpen }) => {
    
    return (
        <StyledPostFormOpen>
            <div className="post-form-inner" onClick={onOpen}>
                <img src={user} alt="user" className="user-icon"/>
                <InputContainer>
                    <CreatePostFakeInput>
                        Start a post
                    </CreatePostFakeInput>
                </InputContainer>
            </div>
        </StyledPostFormOpen>
    )
};

export default PostFormOpen;