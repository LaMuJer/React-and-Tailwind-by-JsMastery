import {features} from '../constants';
import styles, {layout} from "../style.js";
import Button from "./Button.jsx";

const FeaturedCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row items-start p-6 rounded-[20px] feature-card
            ${index === features.length - 1 ? 'mb-0' : 'mb-6'}`}>
        <div className={`w-[64px] h-[32px] rounded-full mr-5 ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`}/>
        </div>
        <div>
            <p className={`text-white font-mono font-semibold`}>{title}</p>
            <p className={`${styles.paragraph} font-mono `}>{content}</p>
        </div>
    </div>
)

function Business(props) {
    return (
        <section className={`${layout.section} sm:mt-10`} id='features'>
            <div className={`${layout.sectionInfo}`}>
                <h1 className={`${styles.heading2}`}>
                    You do the business,
                <br className={`hidden sm:block`}/>
                    we’ll handle the money.
                </h1>
                <p className={`${styles.paragraph} max-w-[420px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button styles='mt-10'/>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature,index) => (
                    <FeaturedCard {...feature} key={feature.id} index={index}/>
                ))}
            </div>
        </section>
    );
}

export default Business;