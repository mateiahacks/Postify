import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, HeaderButton } from "./styles/Header.styled";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { theme } from "../utils/constants";
import { logout } from "../features/auth/authSlice";
import Searchbar from "./Searchbar";

const Header: FC = () => {

    const { user } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const logOut = () => {
        dispatch(logout());
    }

    return (
        <StyledHeader>
            <div>
                <Link to='/' className="link">
                    <h1>P</h1>
                </Link>
                <Searchbar />
            </div>
            <div>
                {user &&  
                <Link to={`/user/${user?.name}/page/1`} className="link">
                    <HeaderButton>
                        My posts
                    </HeaderButton>
                </Link> }
                <Link to='/login' className="link">
                    <HeaderButton bg={theme.colors.green}>
                        {user ?  user.name : "Login"}
                    </HeaderButton>
                </Link>

                <Link to={user ? '/':'/registration'} className="link">
                    <HeaderButton onClick={user ? logOut : () => {}}>
                        {user ? "Logout" : "Registration"}
                    </HeaderButton>
                </Link>
            </div>
        </StyledHeader>
    )
}

export default Header;