import Container from "../layout/Container";
import Section from "../ui/Section";
import { highlights } from "../../data/highlights";


export default function HighlightsSection() {
    return (
        <Section id="highlights" className="highlights">
            <Container>
                <div className="highlights_intro">

                    <h2>Everything you need for an unforgettable stay.</h2>

                    <p>
                        From spacious indoor-outdoor living to optional resort experiences,
                        Unit 1912 is designed for comfort, convenience, and a true Southwest
                        Florida escape.
                    </p>
                </div>

                <div className="highlights_grid">
                    {highlights.map((highlight) => {
                        const Icon = highlight.icon;

                        return (
                            <article className="highlight_card" key={highlight.id}>
                                <span className="highlight_icon">
                                    <Icon fontSize="large" />
                                </span>

                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}