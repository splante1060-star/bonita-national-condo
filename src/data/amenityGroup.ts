import PoolIcon from '@mui/icons-material/Pool';
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import type { AmenityGroup } from '../types/amenityGroup';

export const amenityGroup: AmenityGroup[] = [
    {
        id: "resort",
        title: "Resort Living",
        description: "Relax, unwind, and enjoy the community’s beautiful resort-style spaces.",
        icon: PoolIcon,
        amenities: [
            { id: "pool", name: "Resort pool with waterfall" },
            { id: "clubhouse", name: "Clubhouse access" },
            { id: "spa", name: "Spa and salon services" },
            { id: "satellite-pools", name: "Satellite pools" },
        ],
    },
    {
        id: "sports",
        title: "Sports & Recreation",
        description: "Stay active with golf, tennis, and outdoor recreation throughout the community.",
        icon: SportsTennisIcon,
        amenities: [
            { id: "golf", name: "Championship golf course" },
            { id: "tennis", name: "Har-Tru tennis courts" },
            { id: "biking", name: "Bikes available with the unit" },
        ],
    },
    {
        id: "wellness",
        title: "Wellness",
        description: "Keep your routine going with fitness and wellness amenities nearby.",
        icon: FitnessCenterIcon,
        amenities: [
            { id: "fitness", name: "Fitness center" },
            { id: "spin", name: "Spin room" },
            { id: "sauna", name: "Sauna" },
        ],
    },
    {
        id: "dining",
        title: "Dining",
        description: "Enjoy casual and clubhouse dining without leaving the community.",
        icon: RestaurantIcon,
        amenities: [
            { id: "pool-cafe", name: "Pool café" },
            { id: "club-dining", name: "Clubhouse dining" },
            { id: "bar", name: "Bar and social spaces" },
        ],
    },
];