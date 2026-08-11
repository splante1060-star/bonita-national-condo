import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type GalleryImage = {
    src: string;
    alt: string;
};

type ExpandableImageProps = {
    src: string;
    alt: string;
    className?: string;
    gallery?: GalleryImage[];
    galleryId?: string;
};

export default function ExpandableImage({ src, alt, className="", gallery}: ExpandableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const images = gallery?.length
        ? gallery
        : [{ src, alt }];

    const initialIndex = Math.max(0, images.findIndex((image) => image.src === src));
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const activeImage = images[activeIndex];
    const hasMultipleImages = images.length > 1;

    const showPrevious = () => {
        setActiveIndex((current) => current === 0 ? images.length - 1 : current - 1);
    };

    const showNext = () => {
        setActiveIndex((current) => current === images.length - 1 ? 0 : current + 1);
    };

    const openImage = () => {
        setActiveIndex(initialIndex);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
            if (event.key === "ArrowLeft" && hasMultipleImages) {
                showPrevious();
            }
            if (event.key === "ArrowRight" && hasMultipleImages) {
                showNext();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, hasMultipleImages]);

    
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`expandable-image ${className}`}
                onClick={openImage}
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="image-dialog"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={alt}
                    >
                        <button
                            className="image-dialog_close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close image"
                        >
                            <CloseIcon />
                        </button>

                        {hasMultipleImages && (
                            <>
                                <button
                                    className="image-dialog_nav image-dialog_nav--left"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        showPrevious();
                                    }}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeftIcon />
                                </button>

                                <button
                                    className="image-dialog_nav image-dialog_nav--right"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        showNext();
                                    }}
                                    aria-label="Next image"
                                >
                                    <ChevronRightIcon />
                                </button>
                            </>
                        )}

                        <motion.img
                            key={activeImage.src}
                            className="image-dialog_image"
                            src={activeImage.src}
                            alt={activeImage.alt}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            onClick={(event) => event.stopPropagation()}
                        />

                        {hasMultipleImages && (
                            <div
                                className="image-dialog_counter"
                                onClick={(event) => event.stopPropagation()}
                            >
                                {activeIndex + 1} / {images.length}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

}