export class Movies {
    constructor(
        public title: string,
        public description: string,
        public image: string,
        public stock: number,
        public rental_price: number,
        public sale_price: number,
        public availability: boolean,
        public name_image: string,
        public idMovie: number
    ) { }
}