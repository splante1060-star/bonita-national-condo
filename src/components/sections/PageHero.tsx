import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

type PageHeroProps = {
    eyebrow: string;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
};

export default function PageHero({ eyebrow, title, description, image, imageAlt = "" }: PageHeroProps) {
    return (
        <Section className={`page-hero ${image ? "page-hero--with-image" : ""}`}>
            <Container>
                <div className="page-hero_grid">
                    <div>
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>

                    {image && (
                        <div className="page-hero_image">
                            <img src={image} alt={imageAlt} />
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
}
