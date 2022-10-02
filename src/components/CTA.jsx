import React from 'react';
import styles from "../style.js";
import Button from "./Button.jsx";

function Cta(props) {
    return (
        <section className={`flex flex-col sm:flex-row justify-between items-center bg-black-gradient rounded-[20px] my-16 px-6 sm:px-16 py-16 w-full`}>
            <div className={`flex flex-col justify-between items-start`}>
                <h1 className={`${styles.heading2} font-semibold text-[48px] mb-6`}>Let’s try our service now!</h1>
                <p className={`${styles.paragraph} mb-10 sm:mb-0 max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <Button/>
            </div>
        </section>
    );
}

export default Cta;