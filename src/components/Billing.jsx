import {apple, google, bill} from '../assets';
import styles,{layout} from "../style.js";

function Billing(props) {
    return (
        <section id='product' className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="billing" className={`w-[100%] h-[100%] relative z-[5] lg:h-[100%] md:h-[80%]`}/>
                <div className={`absolute top-0 z-[3] -left-1/2 pink__gradient w-[30%] h-[35%] rounded-full`}></div>
                <div className={`absolute bottom-40 z-1 white__gradient w-[20%] h-[80%]`}></div>
                <div className={`absolute left-20 bottom-20 z-0 blue__gradient w-[30%] h-[50%]`}></div>
            </div>
            <div className={`${layout.sectionInfo}`}>
                <h1 className={`${styles.heading2}`}>
                    Easily control your
                    <br className={`hidden md:hidden sm:block`}/>
                    {' '}billing & invoicing.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] my-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci
                    rhoncus aliporttitor integer platea placerat.
                </p>
                <div className={`flex`}>
                    <img src={apple} alt="apple" className={`mr-5 cursor-pointer`}/>
                    <img src={google} alt="apple" className={`mr-5 cursor-pointer`}/>
                </div>
            </div>
        </section>
    );
}

export default Billing;