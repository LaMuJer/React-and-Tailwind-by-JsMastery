import {clients} from '../constants';
import styles from "../style.js";

function Clients(props) {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client , index) => (
                    <div className={`flex-1 ${styles.flexCenter} sm:min-w-[200px] min-w-[120px] min-h-[100px]`} key={client.id}>
                        <img src={client.logo} alt="logo" className={`w-[140px] sm:[192px] object-contain`}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clients;