import PageHero from "../components/sections/PageHero";
// import AmenityGroupsSection from "../components/sections/AmenityGroupsSection";
import SplitSection from "../components/sections/SplitSection";
import PoolGallerySection from "../components/sections/PoolGallerySection";
import Section from "../components/ui/Section";
import Container from "../components/layout/Container";

export default function AmenitiesPage() {
    return (
        <>
            <PageHero
                eyebrow="Amenities"
                title="Everything you need for a resort-style stay."
                description="From championship golf and poolside afternoons to fitness, tennis, dining, 
                and spa services, Bonita National offers a full vacation experience right inside the community."
            // image="/images/amenities/resort-lifestyle.jpg"
            // imageAlt="Bonita National resort pool and clubhouse"
            />
            {/* <AmenityGroupsSection /> */}
            <Section className="amenities-note">
                <Container>
                    <p>
                        Guests may enjoy access to Bonita National’s community amenities with the
                        required social membership transfer fee, subject to community rules and seasonal
                        availability.
                    </p>
                </Container>
            </Section>

            <PoolGallerySection />

            <SplitSection
                image="/images/amenities/fitness-center.jpg"
                imageAlt="Fitness center at Bonita National Golf and Country Club"
                imagePosition="right"
                imageSize="large"
            >
                <h2>Start the morning strong, then head straight for the pool.</h2>

                <p>
                    The fitness center at Bonita National gives you everything you need to keep
                    your routine while still feeling like you are on vacation.
                </p>

                <p>
                    Bonita National offers a fully equipped fitness center with modern
                    equipment and a welcoming atmosphere, making it easy to stay active
                    during your stay. Guests also enjoy access to daily group fitness classes,
                    offering a fun and motivating way to maintain routines or try something
                    new.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/amenities/spa.jpg"
                imageAlt="Spa and salon services at Bonita National"
                imagePosition="left"
                imageSize="standard"
                footer={<a
                    className="button button--secondary"
                    href="https://www.u-topiaspa.com/services"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Spa Services
                </a>}
            >

                <h2>Unwind, refresh, and make vacation feel effortless.</h2>

                <p>
                    Bonita National also offers an on-site spa, including a nail salon, ideal
                    for unwinding after a workout, round of golf, or day by the pool.
                </p>

                <p>
                    From a relaxing treatment to a fresh manicure, it is one more way the
                    community brings resort-style convenience right to your stay.
                </p>

            </SplitSection>

            <SplitSection
                image="/images/amenities/tennis-courts.jpg"
                imageAlt="Har-Tru tennis courts at Bonita National"
                imagePosition="right"
                imageSize="large"
            >

                <h2>Enjoy Florida sunshine from the court.</h2>

                <p>
                    Bonita National features beautifully maintained Har-Tru tennis courts,
                    providing the perfect setting for everything from a friendly match to
                    competitive league play. Whether you're an experienced player or simply
                    looking to enjoy an active afternoon, the courts are just steps from the
                    clubhouse.
                </p>

                <p>
                    The community is also expanding its outdoor recreation with dedicated
                    pickleball and bocce courts coming soon, giving guests even more ways to
                    enjoy Florida's beautiful weather and resort lifestyle.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/amenities/poolside-cafe.jpg"
                imageAlt="Poolside Café at Bonita National"
                secondaryImage="/images/amenities/clubhouse-dining.jpg"
                secondaryImageAlt="Clubhouse dining at Bonita National"
                imagePosition="left"
                imageSize="large"
                layout="stacked"
                footer={
                    <a
                        className="button button--secondary"
                        href="https://drive.google.com/file/d/12izVbmji80wuldiCTZR38mR6uyuzBghx/view"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Dining Menus
                    </a>
                }
            >

                <h2>From poolside bites to clubhouse evenings.</h2>

                <p>
                    Dining at Bonita National offers a variety of on-site options, from refined
                    meals in the Clubhouse to relaxed, casual fare at the Poolside Café.
                </p>

                <p>
                    Whether you're enjoying an evening out or grabbing a quick bite after golf,
                    tennis, or a day by the pool, the community's dining venues wrap convenience
                    and quality into an easy, enjoyable experience, all without ever leaving
                    Bonita National.
                </p>
            </SplitSection>

            <Section className="amenity-map-section">
                <Container>
                    <div className="amenity-map-section__content">
                        <h2>Find your way around Bonita National.</h2>

                        <p>
                            From the resort pool and clubhouse to tennis, fitness, spa, dining, and
                            satellite pools, the amenity map gives guests an easy overview of the
                            community layout before they arrive.
                        </p>
                    </div>
                    <div className="amenity-map-section__image">
                        <img
                            src="/images/amenities/amenity-map.png"
                            alt="Amenity map of Bonita National Golf and Country Club"
                        />
                    </div>
                </Container>
            </Section>

        </>
    );
}