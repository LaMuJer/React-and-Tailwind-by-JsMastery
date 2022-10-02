import {arrowUp} from '../assets';
import styles from "../style.js";

function GetStarted(props) {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`} >
            <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className={`font-mono font-medium text-[18px] leading-[23px] mr-2`}>
                        <span className={`text-gradient`}>Get</span>
                    </p>
                    <img src={arrowUp} className={`w-[23px] h-[23px] object-contain`} alt="arrowUp"/>
                </div>
                <p className={`font-mono font-medium text-[18px] leading-[23px]`}>
                    <span className={`text-gradient`}>Started</span>
                </p>
            </div>
        </div>
    );
}

export default GetStarted;