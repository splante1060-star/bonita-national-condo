import Eyebrow from "./Eyebrow";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
    return (
        <div className="section-header">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2>{title}</h2>

            {description && <p>{description}</p>}
        </div>
    );
}