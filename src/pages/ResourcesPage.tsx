import PageHero from "../components/sections/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/layout/Container";
import { resources } from "../data/resources";

export default function ResourcesPage() {
    return (
        <>
            <PageHero
                eyebrow="Resources"
                title="Helpful links for your stay."
                description="Everything you need to plan ahead, get familiar with Bonita Nationa;, and enjoy a smooth stay at Unit 1912."
            />
            <Section className="resources-section">
                <Container>
                    <div className="resources-grid">
                        {resources.map((resource) => (
                            <a
                                key={resource.title}
                                className="resource-card"
                                href={resource.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h2>{resource.title}</h2>
                                <p>{resource.description}</p>
                                <span>View More →</span>
                            </a>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}