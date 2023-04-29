import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disable?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disable,
    outline,
    small,
    icon
}) => {
    return (
        <button
            className={`
                relative
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
            `}
        >
            {label}
        </button>
    );
}

export default Button;