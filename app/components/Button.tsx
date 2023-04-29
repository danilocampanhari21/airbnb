import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void:
    disable?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button = () => {
    return (
        <button></button>
    );
}

export default Button;