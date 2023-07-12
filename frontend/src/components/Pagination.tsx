import { FC } from "react";
import { StyledPagination } from "./styles/Pagination.styled";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { reset } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";

interface Props {
    pageNumber: number,
    pageSize: number,
    currentPage: number,
}

const iconStyle = {
    cursor: 'pointer'
}

const Pagination: FC<Props> = ( { pageNumber, currentPage, pageSize} ) => {
    const pages = Array.from({length: pageNumber}, (_, index) => index + 1);

    const { name } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onPageClick = (num: number) => {
        dispatch(reset());
        if (name) {
            navigate(`/user/${name}/page/${num}`);
            window.scrollTo(0, 0);
            return;
        }
        navigate(`/page/${num}`);
        window.scrollTo(0, 0);
    }

    const onLeftArrowClick = () => {
        if(currentPage===1) return;
        onPageClick(currentPage-1);
    }

    const onRightArrowClick = () => {
        if(currentPage===pageNumber) return;
        onPageClick(currentPage+1);
    }

    return (
        <StyledPagination>
            <BsFillArrowLeftSquareFill size={20} style={iconStyle} onClick={onLeftArrowClick}/>
            {pages.map((num) => 
                <div className={`page-pointer ${num===currentPage && 'selected'}`} key={num}
                onClick={() => onPageClick(num)}>{num}</div>
            )}
            <BsFillArrowRightSquareFill size={20} style={iconStyle} onClick={onRightArrowClick}/>
        </StyledPagination>
    )
};

export default Pagination;