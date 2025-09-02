// Products
export interface Product {
    id?: number;
    productName?: string;
    title?: string;
    description?: string;
    pictureUrl?: PictureUrl[];
    colorsNames?: string[];
    genders?: string[];
    shape?: string;
    frameType?: string;
    frameSize?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
    mostPopular?: number;
    isFavorite?: boolean;
    
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}


// Add PictureUrl interface definition
export interface PictureUrl {
    id?: string;
    isDefault?: boolean;
    colorId?: string;
    pictureUrl?: string;
}