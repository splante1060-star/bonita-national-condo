import AmenityGroupCard from "../cards/AmenityGroupCard";
import Container from "../layout/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { amenityGroup } from "../../data/amenityGroup";

export default function AmenityGroupsSection() {
    return (
        <Section className="amenity-groups">
            <Container>
                <SectionHeader
                    eyebrow="Resort Amenities"
                    title="A full resort experience, just steps from home."
                    description="Whether you want to relax by the pool, stay active, 
                    enjoy great dining, or spend the day on the course, Bonita National makes it easy."
                />
                <div className="amenity-groups_grid">
                    {amenityGroup.map((group) => (
                        <AmenityGroupCard key={group.id} group={group} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}