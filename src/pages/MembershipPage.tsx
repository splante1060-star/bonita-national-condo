import Section from "../components/ui/Section";
import Container from "../components/layout/Container";
import PageHero from "../components/sections/PageHero";
import SplitSection from "../components/sections/SplitSection";

export default function MembershipPage() {
    return (
        <>
            <PageHero
                eyebrow="Golf Membership"
                title="Championship golf, right in your backyard."
                description="Unit 1912 is one of Bonita National's golf membership homes, offering eligible guests the opportunity to experience championship golf, exceptional practice facilities, and one of Southwest Florida's premier private club communities through the membership transfer program."
                image="/images/golf/golf-hero.jpg"
            />
            <Section className="amenities-note">
                <Container>
                    <p>
                        Golf privileges are available to eligible guests through Bonita National's
                        membership transfer program. Transfer fees, golf cart fees, tee time
                        policies, and availability may vary by stay.
                    </p>
                </Container>
            </Section>

            <SplitSection
                image="/images/golf/course-view.jpg"
                imageAlt="Bonita National championship golf course"
                imagePosition="right"
                imageSize="large"
            >
                <h2>More than a beautiful view.</h2>
                <p>
                    Bonita National offers both social and golf membership options within the
                    community. Unit 1912 is a golf membership home, giving guests the opportunity
                    to enjoy not only peaceful course views, but also access to golf privileges
                    during their stay through the community’s membership transfer process.
                </p>

                <p>
                    For renters who want the full Bonita National experience, golf access adds
                    another layer of resort-style living just steps from home.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/golf/aerial-course.jpg"
                imageAlt="Aerial view of Bonita National golf course"
                imagePosition="left"
                imageSize="large"
            >

                <h2>A Gordon Lewis designed course built for every level of play.</h2>

                <p>
                    The 18-hole championship par 72 course winds through lush preserves,
                    sparkling lakes, and thoughtfully placed bunkers, creating a layout that is
                    both scenic and engaging.
                </p>

                <p>
                    With six sets of tees ranging from 4,488 to over 7,000 yards, the course
                    offers variety, playability, and challenge for golfers of all skill levels.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/golf/aqua-driving-range.jpg"
                imageAlt="Aqua driving range at Bonita National"
                imagePosition="right"
                imageSize="large"
            >

                <h2>Warm up, sharpen your game, or simply enjoy the setting.</h2>

                <p>
                    Guests with golf access can also enjoy excellent practice facilities,
                    including an aqua driving range, putting green, and chipping area.
                </p>

                <p>
                    Whether you're preparing for a round or spending a relaxed afternoon working
                    on your swing, the practice areas make golf feel easy, convenient, and part
                    of everyday life at Bonita National.
                </p>
            </SplitSection>
        </>
    );
}