import {feedback} from '../constants';
import FeedBackCard from "./FeedBackCard.jsx";
import styles, {layout} from "../style.js";

function Testimonials(props) {
    return (
        <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='clients'>
            <div className={`flex w-full justify-between items-center flex-col md:flex-row mb-6 sm:mb-16`}>
                <h1 className={`${styles.heading2}`}>
                    What people are
                    <br className={`hidden lg:block md:hidden sm:block`}/> {' '}
                    saying about us.
                </h1>
                <p className={`${styles.paragraph} max-w-[450px] mr-16 lg:mt-0 mt-6`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
                {feedback.map((fb, index) => (
                    <FeedBackCard {...fb} key={fb.id} index={index} />
                ))}
                <div className={`absolute -right-[50%] bottom-20 z-0 blue__gradient rounded-full w-[80%] h-[80%]`}></div>
            </div>
        </section>
    );
}

export default Testimonials;