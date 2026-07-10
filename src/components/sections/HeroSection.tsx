import Section from "../ui/Section"
import Button from "../ui/Button";
import Container from "../layout/Container"
import ScrollIndicator from "../ui/ScrollIndicator";

export default function HeroSection() {
    return (
        <Section className="hero">
            <Container>
                <div className="hero_grid">
                    <div className="hero_content">

                        <p className="hero_eyebrow">Bonita National Golf & Country Club • Bonita Springs, Florida</p>

                        <h1>Plan Your Stay At
                            <h1>Unit 1912</h1>
                        </h1>

                        <p className="hero_description">
                            Enjoy a beautifully furnished first-floor Veranda condo in Bonita National Golf & Country Club.
                            Relax with spacious indoor-outdoor living and customize your stay with optional resort amenities,
                            golf, and golf cart access.
                        </p>

                        <div className="hero_actions">
                            <Button to="/contact" variant="primary">
                                Inquire About Availability
                            </Button>
                            <Button to="/tour" variant="secondary">
                                View the Condo
                            </Button>
                        </div>
                    </div>

                    <div className="hero_image_card">
                        <img src="/images/hero/hero-feature.jpg" alt="Bonita National Condo Living Space" />
                    </div>
                </div>

                <ScrollIndicator targetId="highlights" />
            </Container>

        </Section>
    );
}