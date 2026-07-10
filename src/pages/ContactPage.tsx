import PageHero from "../components/sections/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/layout/Container";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Let's plan your stay."
                description="Every great getaway starts with a conversation. Whether you're checking availability or planning an extended stay, we're happy to answer your questions and help you prepare for your time at Unit 1912." />

            <Section className="contact-actions">
                <Container>
                    <div className="contact-actions_grid">

                        <a
                            className="contact-card"
                            href="https://docs.google.com/forms/d/e/1FAIpQLScXbe9m-OHUtB-MOMNAI9tfQw8mnzPhJiUJewZQ-luu__DZHA/viewform"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <CalendarMonthIcon />

                            <h2>Check Availability</h2>

                            <p>
                                Tell us when you'd like to visit and we'll help you
                                determine availability, pricing, and the best options
                                for your stay.
                            </p>

                            <span>
                                Open Interest Form →
                            </span>

                        </a>

                        <a
                            className="contact-card"
                            href="mailto:amyplanterealtor@gmail.com"
                        >

                            <EmailIcon />

                            <h2>Email the Host</h2>

                            <p>
                                Have a question before booking? We'd be happy to answer
                                anything about the condo, amenities, golf, or your stay.
                            </p>

                            <span>
                                Send Email →
                            </span>

                        </a>

                    </div>
                </Container >
            </Section >

            <Section className="contact-ending">
                <Container>

                    <p>
                        We look forward to welcoming you to Unit 1912.
                    </p>

                </Container>
            </Section>
        </>
    );
}