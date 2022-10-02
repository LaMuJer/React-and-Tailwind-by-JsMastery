import styles from "../style.js";
import {discount, robot} from '../assets'
import GetStarted from "./GetStarted.jsx";

function Hero(props) {
    return (
        <>
        <section id='home' className={`flex md:flex-row flex-col`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:px-3 md:mt-5`}>
                <div className={`flex flex-row items-center py-[6px] px-4 mb-2 rounded-[10px] bg-discount-gradient`}>
                    <img src={discount} className={`w-[32px] h-[32px]`} alt="discount"/>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className={`text-white`}>20% </span> DISCOUNT FOR {' '}
                        <span className={`text-white`}>1 MONTH </span> ACCOUNT {' '}
                    </p>
                </div>
                <div className={`absolute top-40 left-0 z-1 white__gradient w-[20%] h-[40%]`}></div>
                <div className={`flex flex-row  justify-between items-center w-full`}>
                    <h1 className={`text-white flex-1 font-mono font-semibold text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px]`}>
                        The Next
                        <br className={`sm:block hidden`}/> {' '}
                        <span className={`text-gradient`}>Generation </span> {' '}
                    </h1>
                    <div className={`ss:flex lg:block md:hidden hidden md:mr-4 mr-0`}>
                        <GetStarted/>
                    </div>
                </div>
                <h1 className={`text-white font-mono font-semibold text-[52px] ss:text-[68px] ss:leading-[100px] leading-[75px] w-full`}>
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[420px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 md:items-end`}>
                <img src={robot} alt="robot" className={`w-[100%] h-[100%] relative z-[5] md:h-[80%] lg:h-[100%]`}/>
                <div className={`absolute top-0 z-0 pink__gradient w-[30%] h-[35%]`}></div>
                <div className={`absolute bottom-40 z-1 white__gradient w-[20%] h-[80%]`}></div>
                <div className={`absolute right-20 bottom-20 z-0 blue__gradient w-[30%] h-[50%]`}></div>
            </div>

            <div className={`sm:hidden  ${styles.flexCenter}`}>
                <GetStarted/>
            </div>
        </section>
            <div className={`md:block flex justify-center ml-[280px] mt-10 hidden lg:hidden xl:hidden`}>
                <GetStarted/>
            </div>
        </>
    );
}

export default Hero;