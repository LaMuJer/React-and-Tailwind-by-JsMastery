import {feedback} from '../constants';
import styles from "../style.js";
import {quotes} from '../assets'

function FeedBackCard({content, name, title, img, index}) {
    return (
        <div className={`flex justify-between flex-wrap flex-col px-10 py-12 rounded-[20px] feedback-card max-w-[370px]`}>
            <img src={quotes} alt="quotes" className={`w-[42px] h-[27px] object-contain mb-12`}/>
            <p className={`text-white font-mono font-semibold mb-10 leading-[32px] text-[20px]`}>
                {content}
            </p>
            <div className={`flex justify-start items-center`}>
                <img src={img} alt="img" className={`w-[20%] h-[100%] object-contain mr-2`}/>
                <div>
                    <h1 className={`text-white font-mono font-semibold `}>{name}</h1>
                    <p className={`text-dimWhite font-mono `}>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default FeedBackCard;