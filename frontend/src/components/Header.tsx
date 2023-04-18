import { FC } from "react";
import { StyledHeader, HeaderButton } from "./styles/Header.styled";
import { theme } from "../utils/constants";

const Header: FC = () => {
    return (
        <StyledHeader>
            <div>
                <h1>P</h1>
                <HeaderButton>
                    Collections
                </HeaderButton>
                <HeaderButton>
                    Most popular
                </HeaderButton>
            </div>
            <div>
                <HeaderButton bg={theme.colors.green}>
                    Login
                </HeaderButton>
                <HeaderButton>
                    Registration
                </HeaderButton>
            </div>
        </StyledHeader>
    )
}

export default Header;