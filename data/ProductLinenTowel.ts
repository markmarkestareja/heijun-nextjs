import { Product } from "@/types/product";

export const ProductLinenTowel: Product[] = [
    {
        id: 1,
        productName: "Mattress Protector",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, tenetur.",
        productImage: "1",
        productImageAlt: "Nature bath soap product of Heijun",
        productLink: "/",
        productDetails: "100% Cotton Plain White Fabric & 150 gsm with super soft hypoallergenic anti-bacterial fiber fill",
        bedSize: [
            {
                name: "Single",
                dimensions: '39 x 75"',
            },{
                name: "Double",
                dimensions: '54 x 75"',
            },{
                name: "Queen",
                dimensions: '60 x 80"',
            },{
                name: "Eastern King",
                dimensions: '76 x 80"',
            },{
                name: "Western King",
                dimensions: '72 x 84"',
            },
        ],
    },

    {
        id: 1,
        productName: "Duvet Filler",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, tenetur.",
        productImage: "1",
        productImageAlt: "Nature bath soap product of Heijun",
        productLink: "/",
        productDetails: "100% Cotton Plain White Fabric & 150 gsm with super soft hypoallergenic anti-bacterial fiber fill",
        bedSize: [
            {
                name: "Single",
                dimensions: '64 x 90"',
            },{
                name: "Double",
                dimensions: '79 x 90"',
            },{
                name: "Queen",
                dimensions: '85 x 95"',
            },{
                name: "Eastern King",
                dimensions: '101 x 95"',
            },{
                name: "Western King",
                dimensions: '97 x 99"',
            },
        ],
    },
]