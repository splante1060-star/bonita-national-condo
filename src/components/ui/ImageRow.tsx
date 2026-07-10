import { motion } from "motion/react";

type ImageRowImage = {
    src: string;
    alt: string;
};

type ImageRowProps = {
    images: ImageRowImage[];
};

export default function ImageRow({ images }: ImageRowProps) {
    return (
        <motion.div
            className="image-row"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {images.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} />
            ))}
        </motion.div>
    );
}