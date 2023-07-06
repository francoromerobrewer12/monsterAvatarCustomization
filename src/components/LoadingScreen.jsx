import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/loadingScreen.css'
import { useProgress } from "@react-three/drei"


const LoadingScreen = ({ startedExperience, setStartedExperience }) => {

    const { progress } = useProgress()
    const [shouldShowLoadingScreen, setShouldShowLoadingScreen] = useState(true);

    // Remove loadingScreen component once the opacity is 0
    useEffect(() => {
        if(startedExperience){
            const timeoutId = setTimeout(() => {
                setShouldShowLoadingScreen(false);
            }, 1500);

            return () => {
            clearTimeout(timeoutId);
            };
        }
    },[startedExperience])


    return shouldShowLoadingScreen && <div className={
        startedExperience
        ? 'loading_screen_container disolve d-flex flex-column justify-content-center align-items-center'
        : 'loading_screen_container d-flex flex-column justify-content-center align-items-center'
    }>


        <button
            className="start_btn py-1 px-3" disabled={progress < 100}
            onClick={setStartedExperience}
            >
                {   progress < 100 
                    ? <h5 className="loading_message my-3">Loading experience...</h5>
                    : <h5 className="loading_message my-3">Start now</h5>
                }
        </button>
    </div>

}

export default LoadingScreen