import PageHero from "../components/sections/PageHero";
import SplitSection from "../components/sections/SplitSection";
import Container from "../components/layout/Container";
import Section from "../components/ui/Section";
import ImageRow from "../components/ui/ImageRow";
import FeatureCallout from "../components/ui/FeatureCallout";
import PetsIcon from '@mui/icons-material/Pets';
import TourTextSection from "../components/sections/TourTextSection";

export default function TourPage() {
    return (
        <>
            <PageHero
                eyebrow="Take the Tour"
                title="Step inside Unit 1912."
                description="As you enter our private oasis, you’re immediately welcomed by a sense of
                ease and comfort that sets the tone for your stay. Thoughtfully designed
                with relaxed Florida living in mind, this condo offers a seamless blend of
                indoor and outdoor spaces, inviting you to slow down and settle in from the
                moment you arrive."
            />

            {/* FRONT LANAI */}
            <TourTextSection>
                <h2>A quiet place to begin the day.</h2>

                <p>
                    <strong>The Front Lanai</strong> serves as an extension of the living space and quickly
                    becomes a favorite spot to gather. Overlooking the beautifully maintained
                    surroundings and just steps from the fairway, it’s the perfect place to enjoy
                    morning coffee, casual meals, or a quiet evening under the ceiling fan.
                    Comfortable seating and dining space make it ideal for both relaxing and
                    entertaining, while the screened enclosure allows you to enjoy the fresh air
                    year-round.
                </p>

                <p>
                    Whether you’re starting your day or winding down after a round of golf or
                    time by the pool, the front lanai offers a peaceful, private setting to take in
                    the sights, sounds, and rhythm of Bonita National living.
                </p>

            </TourTextSection>

            <Section className="tour-image-row-selection">
                <Container>
                    <ImageRow
                        images={[
                            {
                                src: "/images/tour/front-lanai1.jpg",
                                alt: "Front lanai at Unit 1912",
                            },
                            {
                                src: "/images/tour/front-lanai2.jpg",
                                alt: "Front lanai at Unit 1912",
                            },
                        ]}
                    />
                </Container>
            </Section>


            {/* KITCHEN */}
            <TourTextSection>
                <h2>Where comfort meets comfort food.</h2>

                <p>
                    Just inside to the right, you’ll find <strong>the Kitchen</strong> — open,
                    inviting, and thoughtfully designed to make settling in
                    effortless. With clear sightlines to the living area and
                    sliding glass door access to the front lanai, this space
                    stays connected to the rest of the home while still
                    feeling comfortable and functional.
                </p>

                <p>
                    The kitchen is fully equipped for everything from quick breakfasts to
                    relaxed home-cooked meals. Guests will find stainless steel appliances, a
                    full set of cookware including pots, pans, baking sheets, and utensils,
                    along with thoughtfully stocked essentials such as spices and serving
                    pieces. Coffee lovers are well covered with both a Keurig and Nespresso
                    setup, making mornings easy whether you prefer a quick cup or a crafted
                    espresso.
                </p>

                <p>
                    Whether you’re preparing a full dinner, enjoying takeout, or simply
                    grabbing coffee before heading out for the day, the kitchen is designed to
                    feel intuitive, complete, and ready for everyday living.
                </p>

            </TourTextSection>

            <Section className="tour-image-row-selection">
                <Container>
                    <ImageRow
                        images={[
                            {
                                src: "/images/tour/kitchen.jpg",
                                alt: "Kitchen at Unit 1912",
                            },
                            {
                                src: "/images/tour/breakfast-nook.jpg",
                                alt: "Breakfast Nook at Unit 1912",
                            },
                        ]}
                    />
                </Container>
            </Section>


            {/* DINING AREA */}
            <SplitSection
                image="/images/tour/dining.jpg"
                imageAlt="Dining Area at Unit 1912"
                imagePosition="left"
                imageSize="xlarge"
            >
                <h2>Gather for easy meals and unhurried evenings.</h2>

                <p>
                    Turning the corner, the space opens into <strong>the dining and living areas</strong> —
                    bright, welcoming, and designed for both gathering and unwinding. <strong>The
                        Dining Area</strong> sits comfortably between the kitchen and living room, making
                    it an easy hub for meals, games, or lingering conversations after a day out.
                    Bar seating along the kitchen counter provides additional space for casual
                    meals, morning coffee, or keeping the cook company.
                </p>

            </SplitSection>

            {/* LIVING AREA */}
            <TourTextSection>
                <h2>Relax into the rhythm of resort living.</h2>

                <p>
                    <strong>The Living Room</strong> offers a relaxed, comfortable setting with plush seating
                    and thoughtfully arranged furnishings that invite you to settle in. Large
                    sliding doors lead directly to the front lanai, filling the space with natural
                    light and offering peaceful views just beyond. It’s the perfect place to
                    unwind—whether you’re watching a movie, reading a book, or simply
                    enjoying the calm rhythm of Bonita National living.
                </p>

                <FeatureCallout icon={<PetsIcon />} title="Pet-Friendly Touch">
                    A dedicated doggy corner with food and water bowls helps four-legged guests
                    feel at home from the moment they arrive.
                </FeatureCallout>

            </TourTextSection>

            <Section className="tour-image-row-selection">
                <Container>
                    <ImageRow
                        images={[
                            {
                                src: "/images/tour/living1.jpg",
                                alt: "Living Area at Unit 1912",
                            },
                            {
                                src: "/images/tour/living2.jpg",
                                alt: "Living Area at Unit 1912",
                            },
                        ]}
                    />
                </Container>
            </Section>



            {/* PRIMARY BEDROOM */}
            <SplitSection
                image="/images/tour/primary-bed.jpg"
                imageAlt="Primary Bedroom at Unit 1912"
                imagePosition="right"
                imageSize="xlarge"
            >
                <h2>Your private retreat with room to unwind</h2>

                <p>
                    <strong>The Primary Bedroom</strong> offers a peaceful retreat designed for rest and
                    relaxation. Anchored by a comfortable king-sized bed, the room feels
                    spacious and serene, with soft natural light and thoughtful furnishings
                    that make it easy to unwind at the end of the day.
                </p>

                <p>
                    A dedicated desk overlooks the golf course, creating a
                    quiet, scenic spot to check emails, journal, or enjoy a
                    morning coffee while taking in the view. The bedroom also
                    features generous closet space and direct access to a
                    private ensuite bathroom, providing both comfort and
                    convenience throughout your stay.
                </p>

                <p>
                    With its calm atmosphere and well-appointed layout, the
                    primary bedroom serves as a welcoming sanctuary—perfect
                    for recharging after time on the course, by the pool, or
                    exploring the area.
                </p>

            </SplitSection>

            <Section className="tour-image-row-selection">
                <Container>
                    <ImageRow
                        images={[
                            {
                                src: "/images/tour/primary-bath.jpg",
                                alt: "Primary bathroom at Unit 1912",
                            },
                            {
                                src: "/images/tour/primary-bed2.jpg",
                                alt: "Primary bedroom details at Unit 1912",
                            },
                        ]}
                    />
                </Container>
            </Section>



            {/* GUEST BEDROOM 1 */}
            <SplitSection
                image="/images/tour/guest-bed1.jpg"
                imageAlt="Guest Bedroom 1 at Unit 1912"
                imagePosition="left"
                imageSize="xlarge"
            >
                <h2>Comfortable accommodations for family or friends.</h2>

                <p>
                    <strong>The First Guest Bedroom</strong> features a comfortable queen-
                    sized bed, creating a welcoming and restful space for
                    visitors. With ample closet storage and a dedicated
                    desk, this room is well-suited for both short stays and
                    longer visits, offering a quiet place to relax or catch up
                    on work while enjoying the calm, coastal-inspired
                    design.
                </p>

            </SplitSection>

            {/* GUEST BEDROOM 2 */}
            <SplitSection
                image="/images/tour/den.jpg"
                imageAlt="Guest Bedroom 2 / Den at Unit 1912"
                imagePosition="right"
                imageSize="xlarge"
            >
                <h2>A flexible space for work, guests, or quiet downtime.</h2>

                <p>
                    <strong>The Second Guest Bedroom</strong> features two twin
                    beds, making it ideal for family members or
                    additional guests. Thoughtfully furnished with a
                    dresser and desk, the room provides both comfort
                    and functionality. Pocket doors open directly from
                    the dining area, keeping the space connected yet
                    easily closed off for privacy when needed.
                </p>

            </SplitSection>

            {/* GUEST BATHROOM */}
            <SplitSection
                image="/images/tour/guest-bath.jpg"
                imageAlt="Guest Bathroom at Unit 1912"
                imagePosition="left"
                imageSize="xlarge"
            >
                <h2>Clean, convenient, and thoughtfully appointed.</h2>

                <p>
                    <strong>The Shared Guest Bathroom</strong> is conveniently located near the guest
                    bedrooms and features a combination tub and shower, making it
                    comfortable and versatile for all guests. Clean, bright finishes and ample
                    counter space make it easy to get ready for the day or unwind in the
                    evening.


                </p>

            </SplitSection>

            <Section className="bedroom-amenities">
                <Container>
                    <div className="bedroom-amenities_card">

                        <h2>Comforts included in every bedroom.</h2>

                        <ul>
                            <li>Smart TVs in every bedroom</li>
                            <li>Comfortable bedding and linens</li>
                            <li>Closet storage for longer stays</li>
                            <li>Quiet spaces to unwind after a day in the sun</li>
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* LAUNDRY */}
            <SplitSection
                image="/images/tour/laundry.jpg"
                imageAlt="Laundry at Unit 1912"
                imagePosition="right"
                imageSize="xlarge"
            >
                <h2>Everything you need for a longer stay.</h2>

                <p>
                    Next to the guest bathroom in the hallway, <strong>the Laundry Area</strong> offers a full-
                    size washer and dryer with easy accessibility, providing added
                    convenience during longer stays. Whether you’re refreshing beach towels,
                    golf attire, or everyday essentials, this thoughtfully placed laundry space
                    helps make your stay feel effortless and well cared for.
                </p>

            </SplitSection>

            {/* BACK LANAI */}
            <TourTextSection>
                <h2>End the day with peaceful golf course views.</h2>

                <p>
                    <strong>The Back Lanai</strong> offers sweeping views of the golf course and provides a
                    peaceful, private setting to relax and unwind. Overlooking the lush fairway,
                    this outdoor space is ideal for enjoying morning sunshine, afternoon
                    breezes, or quiet evenings as the day winds down.
                </p>

                <p>
                    Comfortable seating makes it easy to settle in, while the mounted smart
                    Roku TV allows you to watch your favorite shows or catch a game without
                    leaving the fresh air behind. Whether you’re sipping coffee, enjoying a
                    cocktail, or simply taking in the scenery, the back lanai delivers the perfect
                    blend of outdoor living and modern comfort.
                </p>

            </TourTextSection>

            <Section className="tour-image-row-selection">
                <Container>
                    <ImageRow
                        images={[
                            {
                                src: "/images/tour/back-lanai1.jpg",
                                alt: "Back Lanai at Unit 1912",
                            },
                            {
                                src: "/images/tour/back-lanai2.jpg",
                                alt: "Back Lanai details at Unit 1912",
                            },
                        ]}
                    />
                </Container>
            </Section>


            {/* LAYOUT PLAN */}
            <Section className="tour-map-section">
                <Container>
                    <div className="tour-map-section_content">

                        <h2>See how the home flows from front to back.</h2>

                        <p>
                            The Veranda layout offers comfortable separation between living
                            spaces, bedrooms, bathrooms, laundry, and both screened lanais.
                        </p>
                    </div>

                    <div className="tour-map-section_cta">
                        <a
                            className="button button--secondary"
                            href="https://photos.google.com/share/AF1QipO1WhNdpcMukQrLDS22UoBA_wj9nqhdpyPhauOpss1mcwYNX_1qKBCmUFDCqwvuug?key=R3lXeVl4aFg4VjNVeXdyVnVOVVh1SHVtM05NWVhR"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View More Photos
                        </a>
                    </div>

                    <div className="tour-map-section_image">
                        <img
                            src="/images/tour/layout.jpg"
                            alt="Layout plan for Unit 1912"
                        />
                    </div>


                </Container>
            </Section>
        </>
    );
}

