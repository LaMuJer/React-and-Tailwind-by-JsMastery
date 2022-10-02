import {card} from '../assets';
import styles,{layout} from "../style.js";
import Button from "./Button.jsx";

function CardDeal(props) {
    return (
        <section className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    Find a better card deal
                    <br className={`hidden md:hidden sm:block`}/>
                    {' '} in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[420px] my-5`}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
                <Button styles={`mt-5`}/>
            </div>
            <div className={`${layout.sectionImg}`}>
                <img src={card} alt="card" className={`w-[100%] h-[100%] relative lg:h-[100%] md:h-[80%]`}/>
                <div className={`absolute top-0 z-0 pink__gradient w-[30%] h-[35%]`}></div>
                <div className={`absolute right-10 bottom-10 z-0 blue__gradient w-[30%] h-[50%]`}></div>
            </div>
        </section>
    );
}

export default CardDeal;