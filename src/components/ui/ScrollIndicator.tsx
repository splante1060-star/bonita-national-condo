import { KeyboardArrowDownRounded } from "@mui/icons-material";

type ScrollIndicatorProps = {
    targetId: string;
};

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
    function handleClick() {
        document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
        });
    }


    return (
        <button className="scroll-indicator" onClick={handleClick} aria-label="Scroll to next section">
            <KeyboardArrowDownRounded fontSize="large" />
        </button>
    );
}