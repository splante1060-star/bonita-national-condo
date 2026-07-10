import Container from "../layout/Container";
import Button from "../ui/Button";

type IntroSectionProps = {
    buttonText?: string;
    buttonTo?: string;
};

export default function IntroSection({ buttonText, buttonTo }: IntroSectionProps) {
    return (
        <section className="section intro">
            <Container>
                <div className="intro_grid">
                    <div className="intro_content">
                        <h2>Your Home Away From Home</h2>

                        <p>
                            Spacious, bright, and thoughtfully furnished, Unit 1912 is designed
                            for comfortable extended stays. Enjoy open living spaces, two screened
                            lanais, and peaceful golf course views that invite you to slow down and unwind.
                        </p>

                        <p>
                            Whether you're escaping the winter or planning a longer Florida getaway,
                            you'll find everything you need to settle in and enjoy resort living at
                            your own pace.
                        </p>

                        <p>
                            We invite you to browse the sections of this website
                            to explore the home, learn more about the golf
                            membership and community amenities, and discover
                            what makes this location so special. If you're
                            interested in renting or have any questions, please
                            don't hesitate to reach out through the contact page
                            — we'd be happy to help.
                        </p>

                        {buttonText && buttonTo && (
                            <div className="intro-section_cta">
                                <Button showArrow to={buttonTo}>
                                    {buttonText}
                                </Button>
                            </div>
                        )}
                    </div>


                    <div className="intro_image">
                        <img
                            src="/images/intro/intro-feature.jpg"
                            alt="Unit 1912 Location"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}