import PageHero from "../components/sections/PageHero";
import SplitSection from "../components/sections/SplitSection";
import Section from "../components/ui/Section";
import Container from "../components/layout/Container";

export default function CartPage() {
    return (
        <>
            <PageHero
                eyebrow="Golf Cart Rental"
                title="Cruise Bonita National in comfort and style."
                description="Guests staying at Unit 1912 may add our private four-seat golf cart to their rental for an easy, fun, and elevated way to enjoy the community."
            />

            <Section className="amenities-note">
                <Container>
                    <p>
                        The private golf cart is available as an optional rental add-on for guests
                        of Unit 1912. Rental fees, availability, usage rules, and security deposit
                        requirements may vary by stay.
                    </p>
                </Container>
            </Section>

            <SplitSection
                image="/images/cart/golf-cart.jpg"
                imageAlt="Private four-seat golf cart available with Unit 1912"
                imagePosition="right"
                imageSize="large"
            >

                <h2>Take your stay to the next level.</h2>

                <p>
                    Guests may rent the home’s private golf cart as an additional add-on during
                    their stay, perfect for cruising the community in comfort and style.
                </p>

                <p>
                    Whether you're heading to the clubhouse, pool, tennis courts, or simply
                    enjoying an evening ride through the neighborhood, this cart makes getting
                    around easy, fun, and unmistakably Bonita National.
                </p>
            </SplitSection>

            <Section className="cart-features">
                <Container>
                    <div className="cart-features__grid">
                        <span>Four leather seats</span>
                        <span>Built-in speaker system</span>
                        <span>Apple CarPlay</span>
                        <span>Golf bag straps</span>
                        <span>Backup camera</span>
                    </div>
                </Container>
            </Section>
        </>
    );
}