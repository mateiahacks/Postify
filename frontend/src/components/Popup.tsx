import { FC, useRef } from "react";
import { SmallPopup } from "./styles/Popup.styled";
import useOutsideClick from "../utils/hooks/useOutsideClick";

interface Props {
    toggleShow: () => void,
    openConfirmation: () => void,
    onEdit: () => void,
    show: boolean,
}

const Popup: FC<Props> = ( {show, toggleShow, openConfirmation, onEdit} ) => {
    const ref = useRef<any>(null);
    useOutsideClick(ref, toggleShow);

    return (
        <SmallPopup ref={ref}>
            <div onClick={onEdit}>Edit</div>
            <div onClick={openConfirmation}>Delete</div>
        </SmallPopup>
    )
};

export default Popup;