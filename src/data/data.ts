interface ProductName {
    main: string;
    cap?: string;
    bag?: string;
    pants?: string;
    souvenir?: string;
  }
  
  interface ProductPrice {
    ts: string;
    hoodie: string;
    cap?: string;
    bag?: string;
    pants?: string;
    souvenir?: string;
  }
  
  interface ProductImage {
    img_ts: string;
    img_hoodie: string;
    img_cap?: string;
    img_bag?: string;
    img_pants?: string;
    img_souvenir?: string;
  }
  
  interface Product {
    id: number;
    name: ProductName;
    price: ProductPrice;
    img: ProductImage;
    img_alt: string;
  }
  

  export const prodList: Product[] = [
    {
        id: 1,
        name: { 
            main: "4OpToBa DIO}i{uHA (Black)",
            cap: "Чорна класика",
            bag: "Чорна класика",
            pants: "Чорна класика",
            souvenir: "Термостакан DEver"
        },
        price: {
            ts: "599 грн",
            hoodie: "799 грн",
            cap: "249 грн",
            bag: "1499 грн",
            pants: "1199 грн",
            souvenir: "199 грн"
        },
        img: {
            img_ts: "t-s_black-4OpToBa DIO}i{uHA.png",
            img_hoodie: "black-4OpToBa DIO}i{uHA_hoodie.png",
            img_cap: "cap_black.png",
            img_bag: "classic_bag.png",
            img_pants: "classic_pants.png",
            img_souvenir: "logo_cup.png"
        },
        img_alt:"Black_classic",
    },
    {
        id: 2,
        name: { 
            main: "Бджола Туги",
            cap: "DEver",
            bag: "Бджола Туги",
            pants: "Titus",
            souvenir: "Titus"
        },
        price: {
            ts: "499 грн",
            hoodie: "699 грн",
            cap: "349 грн",
            bag: "1999 грн",
            pants: "1599 грн",
            souvenir: "249 грн"
        },
        img: {
            img_ts: "t-s_pchela_toski.png",
            img_hoodie: "pchela_toski_hoodie.png",
            img_cap: "cap_white_logo.png",
            img_bag: "pchela_toski_bag.png",
            img_pants: "titus_pants.png",
            img_souvenir: "titus_cup.png"
        },
        img_alt:"Pchela_toski",
    },
    {
        id: 3,
        name: { 
            main: "Бджола Туги Remastered",
            cap: "Clown",
            bag: "Titus DEver",
            souvenir: "Flame"
        },
        price: {
            ts: "599 грн",
            hoodie: "799 грн",
            cap: "299 грн",
            bag: "1999 грн",
            souvenir: "249 грн"
        },
        img: {
            img_ts: "t-s_pchela_toski_remastered.png",
            img_hoodie: "pchela_toski_remastered_hoodie.png",
            img_cap: "cap_clown.png",
            img_bag: "logo2_bag.png",
            img_souvenir: "flame_cup.png"
        },
        img_alt:"Pchela_toski",
    },
    {
        id: 4,
        name: { 
            main: "Flame",
            cap: "Біла класика",
            bag: "Flame",
        },
        price: {
            ts: "799 грн",
            hoodie: "999 грн",
            cap: "249 грн",
            bag: "1799 грн"
        },
        img: {
            img_ts: "t-s_dimarik_flame.png",
            img_hoodie: "flame_hoodie.png",
            img_cap: "cap_white.png",
            img_bag: "falme_bag.png"
        },
        img_alt:"Flame",
    },
    {
        id: 5,
        name: { 
            main: "Titus",
            cap: "Titus",
            bag: "Titus",
        },
        price: {
            ts: "649 грн",
            hoodie: "849 грн",
            cap: "249 грн",
            bag: "2199 грн",
        },
        img: {
             img_ts: "t-s_titus_logo.png",
             img_hoodie: "titus_hoodie.png",
             img_cap: "cap_titus.png",
             img_bag: "titus_bag.png"
        },
        img_alt:"Titus",
    },
    {
        id: 6,
        name: { 
            main: "Stiker Titus",
            cap: "Flame",
            bag: "Stiker Titus"
        },
        price: {
            ts: "649 грн",
            hoodie: "849 грн",
            cap: "349 грн",
            bag: "1999 грн",
        },
        img: {
            img_ts: "t-s_titus_logo_stikers.png",
            img_hoodie: "stiker_titus_hoodie.png",
            img_cap: "cap_flame.png",
            img_bag: "stiker_titus_bag.png"
        },
        img_alt:"Stiker_titus",
    },
    {
        id: 7,
        name: { 
            main: "Королівська ніч",
            cap: "Бджола Туги (білий)",
            bag: "Frogus"
        },
        price: {
            ts: "849 грн",
            hoodie: "1099 грн",
            cap: "299 грн",
            bag: "2199 грн ",
        },
        img: {
            img_ts: "t-s_king_night.png",
            img_hoodie: "king_night_hoodie.png",
            img_cap: "cap_pchela_toski_white.png",
            img_bag: "frog_bag.png",
        },
        img_alt:"Stiker_titus",
    },
    {
        id: 8,
        name: { 
            main: "Жива класика",
            cap: "Бджола Туги (чорний)",
            bag: "DEver",
        },
        price: {
            ts: "199 грн",
            hoodie: "399 грн",
            cap: "299 грн",
            bag: "1799 грн",
        },
        img: {
            img_ts: "t-s_classic.png",
            img_hoodie: "classic_hoodie.png",
            img_cap: "cap_pchela_toski_black.png",
            img_bag: "logo_bag.png",
        },
        img_alt:"Classic",
    },
]