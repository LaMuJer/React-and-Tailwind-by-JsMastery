import {logo} from '../assets';
import styles from "../style.js";
import {footerLinks, socialMedia} from '../constants'

function Footer(props) {
    return (
        <section className={`flex flex-col w-full pt-16 pb-10`}>
            <div className={`${styles.flexStart} flex-col justify-between items-start sm:flex-row`}>
                <div className={`w-[100%] md:w-[40%] lg:w-[40%] px-10  mb-10`}>
                    <img src={logo} alt="logo" className={`mb-6`}/>
                    <p className={`text-dimWhite font-mono `}>
                        A new way to make the payments
                        <br className={`hidden sm:block`}/> {' '}
                        easy, reliable and secure.
                    </p>
                </div>
                <div className={`flex w-full flex-wrap`}>
                    {footerLinks.map((link,index) => (
                        <div key={index} className={`flex flex-col flex-wrap justify-start items-start flex-1`}>
                            <h1 className={`font-mono text-[20px] mb-6 font-semibold text-white`}>{link.title}</h1>
                            {link.links.map((arrLink,index) => (
                                <p key={index} className={`cursor-pointer font-mono text-[18px] min-h-[40px] text-dimWhite`}>{arrLink.name}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <hr className={`my-6`}/>
            <div className={`flex justify-between items-center px-6`}>
                <h1 className={`text-dimWhite font-mono`}>
                    Copyright ⓒ 2021 HooBank. All Rights Reserved.
                </h1>
                <div className={`flex justify-between items-center`}>
                    {socialMedia.map(social => (
                        <a href={social.link} target='_blank' key={social.id} className={`w-[50px]`}>
                            <img src={social.icon} alt="social"/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;