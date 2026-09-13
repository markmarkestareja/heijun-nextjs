export interface Product {
    id: number;
    productName: string;
    productDescription: string;
    productImage: string;
    productImageAlt: string;
    productLink: string;
}

export type ProductCategory =
    | "HotelAmenities";