import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CloseIcon from '@mui/icons-material/Close';

type ExpandableImageProps = {
    src: string;
    alt: string;
    className?: string;
};

export default function ExpandableImage({ src, alt, className=""}: ExpandableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`expandable-image ${className}`}
                onClick={() => setIsOpen(true)}
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

                        <motion.img
                            className="image-dialog_image"
                            src={src}
                            alt={alt}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            onClick={(event) => event.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

}