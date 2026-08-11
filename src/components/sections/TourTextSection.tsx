import { motion } from "motion/react";
import Container from "../layout/Container";
import Section from "../ui/Section";
import ExpandableImage from "../ui/ExpandableImage";
import { tourGallery } from "../../data/tourGallery";

type TourImage = {
    src: string;
    alt: string;
};

type TourTextSectionProps = {
    children: React.ReactNode;
    image?: string;
    imageAlt?: string;
    secondaryImage?: string;
    secondaryImageAlt?: string;
    imagePosition?: "left" | "right";
    supportingImages?: TourImage[];
};

export default function TourTextSection({ children, image, imageAlt = "", secondaryImage, secondaryImageAlt = "", imagePosition = "right", supportingImages }: TourTextSectionProps) {
    const hasImage = Boolean(image);
    const hasDoubleImage = Boolean(image && secondaryImage);

    return (
        <Section className="tour-text-section">
            <Container>
                <div
                    className={
                        `tour-text-section_layout
                        ${hasImage ? "tour-text-section_layout--with-image" : ""}
                        ${hasDoubleImage ? "tour-text-section_layout--with-double" : ""}
                        ${hasImage ? `tour-text-section_layout--image-${imagePosition}` : ""}`
                    }
                >
                    <motion.div
                        className="tour-text-section_content"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>

                    {image && (
                        <motion.div
                            className="tour-text-section_images"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                        >
                            <ExpandableImage
                                className="tour-text-section_image"
                                src={image}
                                alt={imageAlt}
                                gallery={tourGallery}
                            />

                            {secondaryImage && (
                                <ExpandableImage
                                    className="tour-text-section_image"
                                    src={secondaryImage}
                                    alt={secondaryImageAlt}
                                    gallery={tourGallery}
                                />
                            )}
                        </motion.div>
                    )}
                </div>

                {supportingImages && supportingImages.length > 0 && (
                    <motion.div
                        className="tour-text-section_supporting-images"
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                    >
                        {supportingImages.map((supportingImage) => (
                            <ExpandableImage
                                key={supportingImage.src}
                                src={supportingImage.src}
                                alt={supportingImage.alt}
                                gallery={tourGallery}
                            />
                        ))}
                    </motion.div>
                )}

            </Container>
        </Section>
    );
}