import { motion } from "motion/react";
import Container from "../layout/Container";
import Section from "../ui/Section";

type SplitSectionProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
    image: string;
    imageAlt: string;
    secondaryImage?: string;
    secondaryImageAlt?: string;
    imagePosition?: "left" | "right";
    imageSize?: "standard" | "large" | "breakout" | "xlarge";
    layout?: "split" | "stacked" | "gallery";
    className?: string;
};

export default function SplitSection({ children, footer, image, imageAlt, secondaryImage, secondaryImageAlt, imagePosition = "right", imageSize = "standard", layout = "split", className = "" }: SplitSectionProps) {
    return (
        <Section className={`split-section ${className}`}>
            <Container>
                <div className={`split-section_grid split-section_grid--image-${imagePosition} split-section_grid--${imageSize} split-section_grid--${layout}`}>
                    <motion.div
                        className="split-section_content"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        {children}
                    </motion.div>

                    <motion.div
                        className="split-section_image"
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
                        <div className={`split-section_image-stack ${secondaryImage ? "split-section_image-stack--double" : ""}`}>
                            <img className="split-section_primary-image" src={image} alt={imageAlt} />
                            {secondaryImage && secondaryImageAlt && (
                                <img className="split-section_secondary-image" src={secondaryImage} alt={secondaryImageAlt} />
                            )}
                        </div>
                        {footer && (
                            <div className="split-section_footer">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}