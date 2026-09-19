export interface BedSize {
    name: "Single" | "Double" | "Queen" | "Eastern King" | "Western King";
    dimensions: string;
}

// export interface ProductDetails {
//     label: string;
//     value: string;
// }

export interface Product {
    id: number;
    productName: string;
    productDescription: string;
    productImage: string;
    productImageAlt: string;
    productLink: string;

    productDetails?: {
        label: string;
        value: string;
    }[];

    metaTitle?: string;
    metaDescription?: string;
}

export type ProductCategory =
    | "hotel-amenities";
    