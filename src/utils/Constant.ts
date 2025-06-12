import { Review } from "@/components/ReviewCard";
import { CartState } from "@/lib/cartSlice";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

// export const PRODUCTS_LIST: Product[] = [
//     {
//         id: "1",
//         name: "VERTICAL STRIPED SHIRT",
//         description: "Elevate your casual look with this vertical striped shirt. Crafted from breathable cotton for all-day comfort. Pairs perfectly with jeans or chinos.",
//         discountedPrice: 212,
//         price: 232,
//         quantity: 100,
//         rating: 5, 
//         variants: {
//             colorVariants: [
//                 { color: "darkred", images: ["/images/P1_front.png", "/images/P1_back.png", "/images/P1_side.png"]},
//                 { color: "green", images: ["/images/P1_green_front.png", "/images/P1_green_back.png", "/images/P1_green_side.png"]},
//                 { color: "black", images: ["/images/P1_black_front.png", "/images/P1_black_back.png", "/images/P1_black_side.png"]}
//             ],
//             sizeVariants : ["small", "medium", "large", "x-large"]
//         }
//       },
//       {
//         id: "2",
//         name: "SLIM FIT JEANS",
//         description: "Classic slim fit jeans with a modern edge. Features a mid-rise waist and subtle stretch for comfort. Ideal for both casual and semi-formal looks.",
//         discountedPrice: 149,
//         price: 179,
//         quantity: 200,
//         // images: [],
//         rating: 4.5,

//         // colorsVariants : ["darkred", "green", "black"],
//         // sizeVariants : ["x-small", "small",  "medium", "large"]
//       },
//       {
//         id: "3",
//         name: "CROPPED DENIM JACKET",
//         description: "This cropped denim jacket adds instant style to any outfit. Designed with a frayed hem and silver buttons. A wardrobe must-have for every season.",
//         discountedPrice: 289,
//         price: 329,
//         quantity: 80,
//         // images: [],
//         rating: 4.8,

//         // colorsVariants : ["darkred", "green", "black"],
//         // sizeVariants : ["x-small", "small",  "medium", "large", "x-large"]
//       },
//       {
//         id: "4",
//         name: "OVERSIZED HOODED SWEATSHIRT",
//         description: "Stay cozy in this oversized hoodie made from soft fleece. Features a front pocket and adjustable drawstring hood. Great for chilly evenings and layering.",
//         discountedPrice: 199,
//         price: 229,
//         quantity: 150,
//         // images: [],
//         rating: 4.6,
//         // sizeVariants : ["small",  "medium", "large"]
//       },
//       {
//         id: "5",
//         name: "FLORAL PRINT MAXI DRESS",
//         description: "Flowy maxi dress adorned with delicate floral patterns. Lightweight fabric keeps you cool and stylish. Ideal for brunches, beach days, and summer outings.",
//         discountedPrice: 319,
//         price: 359,
//         quantity: 75,
//         // images: [],
//         rating: 4.9
//       }, 
//     {
//         id: "6", name: "Polo with Tipping Details", description: "COURAGE GRAPHIC T-SHIRT Desc", price: 145, quantity: 100, 
//         // images: ["top-selling/P2.png"], 
//         rating: 4
//     },
//     {   id: "7", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quantity: 100, 
//         // images: ["top-selling/P3.png"], 
//         rating: 3},
//     {   id: "8", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quantity: 100,
//         // images: ["top-selling/P4.png"], 
//         rating: 4.5},
//     {   id: "9", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quantity: 100, 
//         // images: ["top-selling/P3.png"], 
//         rating: 3},
//     {   id: "10", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quantity: 100, 
//         // images: ["top-selling/P4.png"], 
//         rating: 4.5},
//     {   id: "11", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quantity: 100, 
//         // images: ["top-selling/P3.png"], 
//         rating: 3},
//     {   id: "12", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quantity: 100, 
//         // images: ["top-selling/P4.png"], 
//         rating: 4.5
//     }
// ];

export enum DRESS_STYLE {
    CASUAL = 'causal',
    FORMAL = 'formal',
    GYM = 'gym',
    PARTY = 'party'
}

export enum SPECIAL_FILTERS {
    NEW_ARRIVALS = 'New Arrivals',
    TOP_SELLING = 'Top Selling'
}

export const DYNAMIC_SECTIONS_DATA = [
    {   
        title: "NEW ARRIVALS", 
        filterName: SPECIAL_FILTERS.NEW_ARRIVALS,
        products: [
            {id: "1", name: "T-SHIRT WITH TAPE DETAILS", description: "T-SHIRT Desc", price: 120, quantity: 100, images: ["new-arrivals/P1.png"], rating: 4, categoryId: 1},
            {id: "2", name: "SKINNY FIT JEANS", description: "SKINNY FIT JEANS Desc", discountedPrice: 240, price: 260, quantity: 100, images: ["new-arrivals/P2.png"], rating: 4.5, categoryId: 1},
            {id: "3", name: "CHECKERED SHIRT", description: "CHECKERED SHIRT Desc", price: 180, quantity: 100, images: ["new-arrivals/P3.png"], rating: 5, categoryId: 1},
            {id: "4", name: "SLEEVE STRIPED T-SHIRT", description: "SLEEVE STRIPED T-SHIRT Desc", discountedPrice: 130, price: 160, quantity: 100, images: ["new-arrivals/P4.png"], rating: 3, categoryId: 1}
        ]
    }, 
    { 
        title: "TOP SELLING", 
        filterName: SPECIAL_FILTERS.TOP_SELLING,
        products: [
            {id: "1", name: "VERTICAL STRIPED SHIRT", description: "VERTICAL STRIPED SHIRT Desc", discountedPrice: 212, price: 232, quantity: 100, images: ["top-selling/P1.png"], rating: 5, categoryId: 1},
            {id: "2", name: "COURAGE GRAPHIC T-SHIRT", description: "COURAGE GRAPHIC T-SHIRT Desc", price: 145, quantity: 100, images: ["top-selling/P2.png"], rating: 4, categoryId: 1},
            {id: "3", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quantity: 100, images: ["top-selling/P3.png"], rating: 3, categoryId: 1},
            {id: "4", name: "FADED SKINNY JEANS", description: "FADED SKINNY JEANS Desc", price: 210, quantity: 100, images: ["top-selling/P4.png"], rating: 4.5, categoryId: 1}
        ]
    }
];

// {id: 3, name: 'jeans', dressStyle: DRESS_STYLE.CASUAL}
export const CATEGORIES_LIST: Category[] = [
    {id: 1, name: 't-shirts', dressStyle: DRESS_STYLE.CASUAL }, { id: 2, name: 'shirts', dressStyle: DRESS_STYLE.CASUAL},

    {id: 4, name: 'Formal Shirts', dressStyle: DRESS_STYLE.FORMAL }, { id: 5, name: 'Blazers & Suits', dressStyle: DRESS_STYLE.FORMAL},

    {id: 6, name: 'Joggers', dressStyle: DRESS_STYLE.GYM }, { id: 7, name: 'Workout Tank Tops', dressStyle: DRESS_STYLE.GYM},

    {id: 8, name: 'Party Dresses', dressStyle: DRESS_STYLE.PARTY }, { id: 9, name: 'Party T-Shirts ', dressStyle: DRESS_STYLE.PARTY},
];

 
const CASUAL_TSHIRTS: Product[] = [
    {
      id: "1",
      name: "Everyday Comfort Tee",
      description: "Soft cotton T-shirt designed for daily wear. Lightweight and breathable fabric ensures all-day comfort. Minimalist design suitable for any casual look. Stays in shape after multiple washes. Your go-to option for effortless style.",
      discountedPrice: 199,
      price: 249,
      quantity: 320,
      rating: 4,
      variants: {
        colorVariants: [
          { color: "darkred", images: [] },
          { color: "darkslateblue", images: [] },
          { color: "darkorange", images: [] }
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 1
    },
    {
      id: "2",
      name: "Urban Vibe Tee",
      description: "Designed for city life, this tee brings casual and cool together. Stretchable cotton blend provides flexibility and durability. Tag-free neckline for added comfort. Modern fit for a stylish edge. Works great solo or layered.",
      discountedPrice: 179,
      price: 219,
      quantity: 275,
      rating: 5,
      variants: {
        colorVariants: [
          { color: "black", images: [] },
          { color: "darkolivegreen", images: [] },
          { color: "darkcyan", images: [] }
        ],
        sizeVariants: ["medium", "large", "x-large"]
      },
      categoryId: 1
    },
    {
      id: "3",
      name: "Weekend Relax Tee",
      description: "Kick back in this relaxed-fit T-shirt perfect for weekends. Ultra-soft fabric feels great against the skin. Slightly oversized for a laid-back look. Stitched with reinforced seams for long-term use. Simple yet stylish essential.",
      discountedPrice: 155,
      price: 185,
      quantity: 410,
      rating: 3,
      variants: {
        colorVariants: [
          { color: "darkgray", images: [] },
          { color: "darkgreen", images: [] },
          { color: "darkgoldenrod", images: [] }
        ],
        sizeVariants: ["small", "medium", "large"]
      },
      categoryId: 1
    },
    {
      id: "4",
      name: "Bold Graphic Tee",
      description: "Make a statement with bold graphics on premium cotton. Designed for casual expression and streetwear flair. Smooth texture with a regular fit. Adds personality to everyday outfits. Great for weekend hangouts or day trips.",
      discountedPrice: 245,
      price: 295,
      quantity: 160,
      rating: 5,
      variants: {
        colorVariants: [
          { color: "darkviolet", images: [] },
          { color: "darkblue", images: [] }
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 1
    },
    {
      id: "5",
      name: "Minimalist Fit Tee",
      description: "Clean design with a perfect trim fit. Crafted for casual comfort and modern simplicity. Light yet durable fabric holds up wash after wash. Pairs easily with jeans or joggers. Ideal for minimal style lovers.",
      discountedPrice: 210,
      price: 260,
      quantity: 350,
      rating: 4,
      variants: {
        colorVariants: [
          { color: "darkslategray", images: [] },
          { color: "maroon", images: [] }
        ],
        sizeVariants: ["medium", "large"]
      },
      categoryId: 1
    }
];

const CASUAL_SHIRTS: Product[] = [
    {
        id: "1",
        name: "Vertical Striped Shirt",
        description: "Elevate your casual look with this vertical striped shirt. Crafted from breathable cotton for all-day comfort. Pairs perfectly with jeans or chinos.",
        discountedPrice: 212,
        price: 232,
        quantity: 100,
        rating: 5, 
        variants: {
            colorVariants: [
                { color: "darkred", images: ["/images/P1_front.png", "/images/P1_back.png", "/images/P1_side.png"]},
                { color: "green", images: ["/images/P1_green_front.png", "/images/P1_green_back.png", "/images/P1_green_side.png"]},
                { color: "black", images: ["/images/P1_black_front.png", "/images/P1_black_back.png", "/images/P1_black_side.png"]}
            ],
            sizeVariants : ["small", "medium", "large", "x-large"]
        },
        categoryId: 2
    },
    {
      id: "6",
      name: "Classic Oxford Shirt",
      description: "Timeless oxford shirt with a crisp finish. Ideal for both casual Fridays and smart evenings. Crafted from premium cotton for durability. Features a button-down collar and a structured silhouette. Comfortable yet polished look.",
      discountedPrice: 295,
      price: 340,
      quantity: 260,
      rating: 5,
      variants: {
        colorVariants: [
          { color: "darkslateblue", images: [] },
          { color: "darkgoldenrod", images: [] },
          { color: "darkolivegreen", images: [] }
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 2
    },
    {
      id: "7",
      name: "Slim Fit Formal Shirt",
      description: "A sleek slim-fit shirt designed for professional settings. Stretchable fabric offers ease without compromising fit. Features a sharp collar and button cuffs. Perfect for business meetings or formal events. Sharp and sophisticated choice.",
      discountedPrice: 310,
      price: 360,
      quantity: 300,
      rating: 4.5,
      variants: {
        colorVariants: [
          { color: "midnightblue", images: [] },
          { color: "darkcyan", images: [] },
          { color: "darkmagenta", images: [] }
        ],
        sizeVariants: ["medium", "large", "x-large"]
      },
      categoryId: 2,
      isNew: true
    },
    {
      id: "8",
      name: "Casual Linen Shirt",
      description: "Breathable linen shirt for warm days and relaxed evenings. Slightly textured fabric with a lightweight feel. Rollable sleeves for a laid-back vibe. Designed for all-day comfort. Great for travel and vacation looks.",
      discountedPrice: 280,
      price: 330,
      quantity: 230,
      rating: 3,
      variants: {
        colorVariants: [
          { color: "darkkhaki", images: [] },
          { color: "darkslategray", images: [] },
          { color: "darkorchid", images: [] }
        ],
        sizeVariants: ["small", "medium", "large"]
      },
      categoryId: 2
    },
    {
      id: "9",
      name: "Checked Cotton Shirt",
      description: "Smart checked shirt for casual to semi-formal wear. Made from soft cotton for everyday ease. Features a relaxed collar and front pocket. Stylish checks never go out of fashion. Pair it with jeans or chinos.",
      discountedPrice: 265,
      price: 310,
      quantity: 280,
      rating: 3.5,
      variants: {
        colorVariants: [
          { color: "darkred", images: [] },
          { color: "indigo", images: [] }
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 2
    }
];
  
  


export const PRODUCTS_LIST: Product[] = [...CASUAL_SHIRTS, ...CASUAL_TSHIRTS].map((p, index) => {
    return {...p, id: (index+1).toString()}
});

  

export const REVIEWS_LIST: Review[] = [
    {
        id: "1",
        name: "Sarah M.", 
        reviewText: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        postedDate: new Date(2024, 0, 14).toDateString(),
        rating: 5
    },
    {
        id: "2",
        name: "Alex K.", 
        reviewText: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        postedDate: new Date(2024, 3, 11).toDateString(),
        rating: 4.3
    },
    {
        id: "3",
        name: "James L.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2024, 5, 4).toDateString(),
        rating: 3.8
    },
    {
        id: "4",
        name: "Rober T.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2024, 12, 28).toDateString(),
        rating: 3,
    },
    {
        id: "5",
        name: "Julian W.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2025, 3, 28).toDateString(),
        rating: 2
    }
];

export const DATA_CART: CartState = {
    id: "112",
    createdOn: "2025-05-25",
    items: [
        {id: "1", productName: "VERTICAL STRIPED SHIRT", price: 212, sizeVariant: 'Small', colorvarinat: 'red', imageUrl: "top-selling/P1.png", quantity: 1 },
        {id: "2", productName: "FADED SKINNY JEANS", price: 210, sizeVariant: 'Medium', colorvarinat: 'yellow', imageUrl: "top-selling/P4.png", quantity: 1  },
        {id: "3", productName: "LOOSE FIT BERMUDA SHORTS", price: 80, sizeVariant: 'Small', colorvarinat: 'black', imageUrl: "top-selling/P3.png", quantity: 1  }
    ]
}

export const US_STATE_LIST = [
    { name: "Alabama", code: "AL" },
    { name: "Alaska", code: "AK" },
    { name: "Arizona", code: "AZ" },
    { name: "Arkansas", code: "AR" },
    { name: "California", code: "CA" },
    { name: "Colorado", code: "CO" },
    { name: "Connecticut", code: "CT" },
    { name: "Delaware", code: "DE" },
    { name: "Florida", code: "FL" },
    { name: "Georgia", code: "GA" },
    { name: "Hawaii", code: "HI" },
    { name: "Idaho", code: "ID" },
    { name: "Illinois", code: "IL" },
    { name: "Indiana", code: "IN" },
    { name: "Iowa", code: "IA" },
    { name: "Kansas", code: "KS" },
    { name: "Kentucky", code: "KY" },
    { name: "Louisiana", code: "LA" },
    { name: "Maine", code: "ME" },
    { name: "Maryland", code: "MD" },
    { name: "Massachusetts", code: "MA" },
    { name: "Michigan", code: "MI" },
    { name: "Minnesota", code: "MN" },
    { name: "Mississippi", code: "MS" },
    { name: "Missouri", code: "MO" },
    { name: "Montana", code: "MT" },
    { name: "Nebraska", code: "NE" },
    { name: "Nevada", code: "NV" },
    { name: "New Hampshire", code: "NH" },
    { name: "New Jersey", code: "NJ" },
    { name: "New Mexico", code: "NM" },
    { name: "New York", code: "NY" },
    { name: "North Carolina", code: "NC" },
    { name: "North Dakota", code: "ND" },
    { name: "Ohio", code: "OH" },
    { name: "Oklahoma", code: "OK" },
    { name: "Oregon", code: "OR" },
    { name: "Pennsylvania", code: "PA" },
    { name: "Rhode Island", code: "RI" },
    { name: "South Carolina", code: "SC" },
    { name: "South Dakota", code: "SD" },
    { name: "Tennessee", code: "TN" },
    { name: "Texas", code: "TX" },
    { name: "Utah", code: "UT" },
    { name: "Vermont", code: "VT" },
    { name: "Virginia", code: "VA" },
    { name: "Washington", code: "WA" },
    { name: "West Virginia", code: "WV" },
    { name: "Wisconsin", code: "WI" },
    { name: "Wyoming", code: "WY" }
];
  
export const NO_IMAGE_URL = 'https://placehold.co/1024x1024?text=Image%20Coming%20Soon';

// const TEMP_PRODUCT_IMAGES = ["/productP1.jpeg", "/productP3.png", "/productP2.png"];

export const TEMP_PRODUCT_IMAGES = new Array(3).fill(NO_IMAGE_URL);