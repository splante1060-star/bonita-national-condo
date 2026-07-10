import type { Highlight } from '../types/highlight';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import BedIcon from '@mui/icons-material/Bed';
import ForestIcon from '@mui/icons-material/Forest';
import PoolIcon from '@mui/icons-material/Pool';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PlaceIcon from '@mui/icons-material/Place';

export const highlights: Highlight[] = [
    {
        id: "veranda",
        icon: ForestIcon,
        title: "First-Floor Veranda",
        description: "Spacious indoor-outdoor living with two screened lanais and peaceful golf course views."
    },
    {
        id: "extended-stays",
        icon: BedIcon,
        title: "Designed for Extended Stays",
        description: "Two bedrooms, a den, two bathrooms, and everything needed to feel comfortably at home."
    },
    {
        id: "resort-lifestyle",
        icon: PoolIcon,
        title: "Resort Lifestyle",
        description: "Optional access to pools, fitness, spa, dining, and more during your stay."
    },
    {
        id: "golf",
        icon: GolfCourseIcon,
        title: "Championship Golf",
        description: "Enjoy the setting of one of Southwest Florida's premier golf communities, with optional golf access."
    },

    {
        id: "golf-cart",
        icon: CarRentalIcon,
        title: "Golf Cart Available",
        description: "An optional four-seat golf cart makes it easy to explore the community in comfort."
    },
    {
        id: "location",
        icon: PlaceIcon,
        title: "Bonita Springs Location",
        description: "Minutes from beaches, Naples, shopping, dining, and Southwest Florida attractions."
    },

];