type FeatureCalloutProps = {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
};

export default function FeatureCallout({ icon, title, children }: FeatureCalloutProps) {
    return (
        <div className="feature-callout">
            {icon && <span className="feature-callout_icon">{icon}</span>}

            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}