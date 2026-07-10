import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import HighlightsSection from "../components/sections/HighlightsSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <HighlightsSection />
            <IntroSection
                buttonText="Explore the Condo"
                buttonTo="/tour" />
        </>
    );
}