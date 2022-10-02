import {stats} from '../constants';
import styles from "../style.js";

function Stats(props) {
    return (
        <section className={`${styles.flexCenter} flex-col lg:flex-row md:flex-row flex-wrap mt-6 sm:my-[70px]`}>
            {stats.map((stat,index) => (
                <div key={stat.id} className={`flex flex-1 items-center justify-around flex-row lg:w-[30%] md:w-[30%] w-full mt-3`}>
                    <p className={`text-white font-mono font-semibold xs:text-[40px] xs:leading-[53px] leading-[43px] text-[30px] lg:text-[30px] md:text-[20px]`}>{stat.value}</p>
                    <p className={`text-gradient uppercase font-mono font-normal xs:text-[20px] xs:leading-[26px] leading-[21px] text-[15px] lg:text-[15px] md:text-[10px]`}>{stat.title}</p>
                    <span className={`${index === stats.length - 1 ? 'hidden' : 'text-dimWhite'}`}> | </span>
                </div>
            ))}
        </section>
    );
}

export default Stats;