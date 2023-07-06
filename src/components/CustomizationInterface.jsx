import '../styles/interface.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import colorsList from './monsters/colorsList';
import monstersList from './monsters/monstersList';

const CustomizationInterface = ({
    avatarSelectedIndex,
    setAvatarSelectedIndex,
    skinColorIndex,
    setSkinColorIndex,
    headDetailColorIndex,
    setHeadDetailColorIndex
}) => {

    const monsterListLength = monstersList.length
    const colorsListLength = colorsList.length

    const handlePrevAvatar = () => {
        if(avatarSelectedIndex === 0) {
            setAvatarSelectedIndex(monsterListLength - 1)
            return
        }
        setAvatarSelectedIndex(prevIndex => prevIndex - 1);
    };

    const handleNextAvatar = () => {
        if(avatarSelectedIndex === monsterListLength - 1) {
            setAvatarSelectedIndex(0)
            return
        }
        setAvatarSelectedIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevSkinColor = () => {
        if(skinColorIndex === 0) {
            setSkinColorIndex(colorsListLength - 1);
        }
        setSkinColorIndex(prevColor => prevColor - 1);
    };

    const handleNextSkinColor = () => {
        if(skinColorIndex === colorsListLength - 1) {
            setSkinColorIndex(0);
        }
        setSkinColorIndex(prevColor => prevColor + 1);
    };

    const handlePrevHeadDetailColor = () => {
        if(headDetailColorIndex === 0) {
            setHeadDetailColorIndex(colorsListLength - 1);
        }
        setHeadDetailColorIndex(prevColor => prevColor - 1);
    };

    const handleNextHeadDetailColor = () => {
        if(headDetailColorIndex === colorsListLength - 1) {
            setHeadDetailColorIndex(0);
        }
        setHeadDetailColorIndex(prevColor => prevColor + 1);
    };

    return (
    <div className="customization_interface w-100 d-flex flex-column justify-content-around px-4">
        <div className="d-flex w-100 justify-content-between">
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handlePrevAvatar}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handleNextAvatar}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="d-flex w-100 justify-content-between">
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handlePrevSkinColor}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handleNextSkinColor}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="d-flex w-100 justify-content-between">
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handlePrevHeadDetailColor}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="interface_btn py-3 px-4 rounded-circle" onClick={handleNextHeadDetailColor}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    </div>
);
};

export default CustomizationInterface;
