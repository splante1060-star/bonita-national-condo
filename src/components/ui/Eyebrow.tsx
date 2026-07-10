type EyebrowProps = {
    children: React.ReactNode;
    icon?: string;
};

export default function Eyebrow({ children, icon }: EyebrowProps) {
    return (
        <div className="eyebrow">
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="eyebrow_icon"
                    aria-hidden="true"
                />
            )}
            <span>{children}</span>
        </div>
    );
}