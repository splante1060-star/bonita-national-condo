import PageHero from "../components/sections/PageHero";
import SplitSection from "../components/sections/SplitSection";


export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About Bonita National Golf & Country Club"
                title="Discover One of Southwest Florida's Premier Golf Resort Communities."
                description="Nestled in beautiful Bonita Springs, Bonita National blends championship golf, 
                exceptional amenities, and a relaxed resort atmosphere into a destination you'll look forward 
                to returning to year after year."
            />

            <SplitSection
                image="/images/about/clubhouse-drone.jpg"
                imageAlt="Bonita National Clubhouse"
                imagePosition="right"
                imageSize="breakout"
            >
                <h2>A resort-style community designed for relaxation.</h2>
                <p>
                    Bonita National is known for its palm-lined streets, lush fairways,
                    peaceful preserves, and welcoming atmosphere.
                </p>
                <p>
                    From morning walks to sunset views, the community offers a setting
                    that feels both tranquil and connected to everything Southwest Florida
                    has to offer.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/about/golf.jpg"
                imageAlt="Bonita National Golf Course"
                imagePosition="left"
                imageSize="large"
            >
                <h2>Golf woven beautifully throughout the community.</h2>
                <p>
                    Bonita National is centered around a scenic championship golf course with
                    lush fairways, peaceful preserves, and beautiful views throughout the
                    neighborhood.
                </p>
                <p>
                    Whether you are playing a round or simply enjoying the view from the lanai,
                    the golf course is part of what makes the community feel so open, relaxed,
                    and distinctly Southwest Florida.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/about/resort-pool.jpg"
                imageAlt="Bonita National resort-style pool and clubhouse"
                imagePosition="right"
                imageSize="breakout"
            >
                <h2>All the ease of a private getaway with resort-style amenities.</h2>
                <p>
                    From the resort pool and clubhouse to dining, fitness, tennis, spa services,
                    and social spaces, Bonita National offers the kind of lifestyle that makes
                    every day feel like vacation.
                </p>
                <p>
                    It is a community designed for slow mornings, sunny afternoons, and evenings
                    spent enjoying everything Southwest Florida has to offer.
                </p>
            </SplitSection>

            <SplitSection
                image="/images/about/fifth-ave.jpg"
                imageAlt="Fifth Avenue, Naples FL"
                secondaryImage="/images/about/clam-pass-beach.jpg"
                secondaryImageAlt="Class Pass Beach, Naples FL"
                imagePosition="left"
                imageSize="breakout"
                layout="stacked"
            >
                <h2>Minutes from sunrise on the beach to evenings in Naples.</h2>
                <p>
                    Bonita National offers the perfect home base for experiencing Southwest Florida. Spend your mornings at Bonita Beach, enjoy an afternoon of shopping at Coconut Point, dine along Fifth Avenue South in Naples, or simply watch another unforgettable Gulf Coast sunset. No matter how you choose to spend your day, everything is just a short drive away.
                </p>

                <ul className="area-callouts">
                    <li>
                        <span>Downtown Bonita Springs</span>
                        <strong>18 min</strong>
                    </li>
                    <li>
                        <span>RSW Airport</span>
                        <strong>25 min</strong>
                    </li>
                    <li>
                        <span>Bonita Beach</span>
                        <strong>22 min</strong>
                    </li>
                    <li>
                        <span>Fifth Avenue South</span>
                        <strong>35 min</strong>
                    </li>
                    <li>
                        <span>Coconut Point</span>
                        <strong>22 min</strong>
                    </li>
                    <li>
                        <span>Marco Island</span>
                        <strong>48 min</strong>
                    </li>
                </ul>

            </SplitSection>
        </>
    );
}