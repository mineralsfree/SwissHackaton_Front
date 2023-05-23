export type Product = {
    id: number,
    img: string,
    ean: string,
    name: string,
    type_of_trash: number
}
export type BackendProduct = {
    ean: string;
    image_url: string;
    name: string;
    emission_prevented: number
    mass: number
    type_of_trash: number
}