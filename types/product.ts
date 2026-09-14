export interface BedSize {
    name: "Single" | "Double" | "Queen" | "Eastern King" | "Western King";
    dimensions: string;
}

export interface Product {
    id: number;
    productName: string;
    productDescription: string;
    productImage: string;
    productImageAlt: string;
    productLink: string;

    productDetails?: string;
    bedSize?: BedSize[];
}

export type ProductCategory =
    | "HotelAmenities"
    | "LinenTowel";