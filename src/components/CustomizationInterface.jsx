import { useRef } from 'react';
import '../styles/interface.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import colorsList from './monsters/colorsList';
import monstersList from './monsters/monstersList';
import buttonClickSound from '../sounds/click_sound.wav'

const CustomizationInterface = ({
    avatarSelectedIndex,
    setAvatarSelectedIndex,
    skinColorIndex,
    setSkinColorIndex,
    headDetailColorIndex,
    setHeadDetailColorIndex,
    rotationSelected,
    setRotationSelected
}) => {
    const clickSound = useRef()
    const monsterListLength = monstersList.length
    const colorsListLength = colorsList.length

    const handlePrevAvatar = () => {
        clickSound.current.play();

        if(avatarSelectedIndex === 0) {
            setAvatarSelectedIndex(monsterListLength - 1)
            return
        }
        setAvatarSelectedIndex(prevIndex => prevIndex - 1);
    };

    const handleNextAvatar = () => {
        clickSound.current.play();

        if(avatarSelectedIndex === monsterListLength - 1) {
            setAvatarSelectedIndex(0)
            return
        }
        setAvatarSelectedIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevSkinColor = () => {
        clickSound.current.play();

        if(skinColorIndex === 0) {
            setSkinColorIndex(colorsListLength - 1);
        }
        setSkinColorIndex(prevColor => prevColor - 1);
    };

    const handleNextSkinColor = () => {
        clickSound.current.play();

        if(skinColorIndex === colorsListLength - 1) {
            setSkinColorIndex(0);
        }
        setSkinColorIndex(prevColor => prevColor + 1);
    };

    const handlePrevHeadDetailColor = () => {
        clickSound.current.play();

        if(headDetailColorIndex === 0) {
            setHeadDetailColorIndex(colorsListLength - 1);
        }
        setHeadDetailColorIndex(prevColor => prevColor - 1);
    };

    const handleNextHeadDetailColor = () => {
        clickSound.current.play();

        if(headDetailColorIndex === colorsListLength - 1) {
            setHeadDetailColorIndex(0);
        }
        setHeadDetailColorIndex(prevColor => prevColor + 1);
    };

    const handleRotationAvatar = () => {
        clickSound.current.play();

        setRotationSelected(!rotationSelected)
    };

    return (
    <div className="customization_interface w-100 d-flex flex-column justify-content-around px-4">
        <div className="d-flex w-100 align-items-center justify-content-center">
            <button className="rotation_btn interface_btn rounded-circle mb-3" onClick={handleRotationAvatar}><FontAwesomeIcon icon={faArrowsRotate} /></button>
        </div>

        <div className="d-flex w-100 justify-content-between">
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handlePrevAvatar}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handleNextAvatar}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="d-flex w-100 justify-content-between">
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handlePrevSkinColor}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handleNextSkinColor}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="d-flex w-100 justify-content-between">
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handlePrevHeadDetailColor}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="interface_btn py-3 px-4 rounded-circle mb-2" onClick={handleNextHeadDetailColor}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <audio ref={clickSound} src={buttonClickSound} />
    </div>
);
};

export default CustomizationInterface;
