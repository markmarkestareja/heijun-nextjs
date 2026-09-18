import { Product } from "@/types/product";

export const ProductHotelAmenities: Product[] = [
    {
        id: 1,
        productName: "Nature Bath Soaps",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, tenetur.",
        productImage: "bath-soap",
        productImageAlt: "Nature bath soap product of Heijun",
        productLink: "nature-bath-soap",
        productDetails: [
            {
                label: "Shapes",
                value: "Round and Square for oatmeal soap",
            },
            {
                label: "Available scent",
                value: "Nature and Green tea",
            },
            {
                label: "Weight",
                value: "20g | 15g | 12g",
            },
        ],
    },
    {
        id: 2,
        productName: "Bottle",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, tenetur.",
        productImage: "bottle",
        productImageAlt: "Nature bath soap product of Heijun",
        productLink: "bottle",
        productDetails: [
            {
                label: "Available",
                value: "Body Wash | Shampoo with Conditioner | Body Lotion",
            },
            {
                label: "Volume",
                value: "20ml",
            },
        ],
    },
]