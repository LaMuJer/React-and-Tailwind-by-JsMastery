import React from 'react';

function Button({styles}) {
    return (
        <button type={'button'}
            className={`bg-blue-gradient py-4 px-6 rounded font-mono font-medium text-[18px] text-black outline-none ${styles}`}
        >
            Get Started
        </button>
    );
}

export default Button;