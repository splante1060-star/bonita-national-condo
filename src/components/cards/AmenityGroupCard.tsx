import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import type { AmenityGroup } from "../../types/amenityGroup";

type AmenityGroupCardProps = {
    group: AmenityGroup;
};

export default function AmenityGroupCard({ group }: AmenityGroupCardProps) {
    const Icon = group.icon;

    return (
        <article className="amenity-card">
            <div className="amenity-card_icon">
                <Icon fontSize="large" />
            </div>

            <h2>{group.title}</h2>
            <p>{group.description}</p>

            <ul className="amenity-card_list">
                {group.amenities.map((amenity) => (
                    <li key={amenity.id}>
                        <CheckRoundedIcon fontSize="small" />
                        <span>{amenity.name}</span>
                    </li>
                ))}
            </ul>
        </article>
    )
}