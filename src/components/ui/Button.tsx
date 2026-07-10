import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type ButtonProps = {
    children: React.ReactNode;
    to: string;
    variant?: "primary" | "secondary";
    showArrow?: boolean;
};

export default function Button({ children, to, variant = "primary", showArrow = false }: ButtonProps) {
    return (
        <Link className={`button button--${variant}`} to={to}>
            {children}

            {showArrow && (
                <ArrowForwardIcon />
            )}
        </Link>
    );
}