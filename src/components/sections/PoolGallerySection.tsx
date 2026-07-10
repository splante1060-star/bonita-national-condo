import { poolPhotos } from "../../data/poolPhotos";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowBackRounded } from "@mui/icons-material";
import { ArrowForwardRounded } from "@mui/icons-material";

export default function PoolGallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPhoto = poolPhotos[currentIndex];

    function showPrevious() {
        setCurrentIndex((currentIndex - 1 + poolPhotos.length) % poolPhotos.length);
    }

    function showNext() {
        setCurrentIndex((currentIndex + 1) % poolPhotos.length);
    }

    return (
        <Section className="pool-gallery">
            <Container>
                <motion.div
                    className="pool-gallery_intro"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Eyebrow>Resort Pools</Eyebrow>
                    <h2>From sunny swims to evening lounging.</h2>
                    <p>The resort pool area is one of Bonita National’s signature spaces,
                        offering a beautiful setting to swim, relax, gather, and unwind.</p>
                    <p>  From the main resort pool and waterfall to lap lanes, lounge areas,
                        hot tub spaces, and quieter satellite pools throughout the
                        community, there are plenty of ways to enjoy poolside living during
                        your stay.</p>
                    <p>Explore the poolside spaces that make Bonita National feel like a true resort getaway.</p>
                </motion.div>

                <motion.div
                    className="pool-carousel"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <button onClick={showPrevious} className="pool-carousel_button">
                        <ArrowBackRounded />
                    </button>

                    <div className="pool-carousel_content">
                        <img src={currentPhoto.src} alt={currentPhoto.alt} />

                        <p>{currentPhoto.caption}</p>
                    </div>

                    <button onClick={showNext} className="pool-carousel_button">
                        <ArrowForwardRounded />
                    </button>
                </motion.div>
            </Container>
        </Section>
    )
}