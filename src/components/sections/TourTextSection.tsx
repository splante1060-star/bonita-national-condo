import { motion } from "motion/react";
import Container from "../layout/Container";
import Section from "../ui/Section";

type TourTextSectionProps = {
    children: React.ReactNode;
};

export default function TourTextSection({ children }: TourTextSectionProps) {
    return (
        <Section className="tour-text-section">
            <Container>
                <motion.div
                    className="tour-text-section_content"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </Container>
        </Section>
    );
}