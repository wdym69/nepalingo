import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, ...rest } = props;

    const buttonClasses = `h-full bg-primary text-white font-primary font-bold m-0 py-2 px-4 rounded-lg ${className}`;

    return (
        <button ref={ref} className={buttonClasses} {...rest}>
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
