import type { SvgIconComponent } from "@mui/icons-material";

export type AmenityItem = {
    id: string;
    name: string;
};

export type AmenityGroup = {
    id: string;
    title: string;
    description: string;
    icon: SvgIconComponent;
    amenities: AmenityItem[];
};