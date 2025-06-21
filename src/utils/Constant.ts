import { Review } from "@/components/ReviewCard";
import { CartState } from "@/lib/cartSlice";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export enum DRESS_STYLE {
    CASUAL = 'causal',
    FORMAL = 'formal',
    GYM = 'gym',
    PARTY = 'party'
}

export enum SPECIAL_FILTERS {
    NEW_ARRIVALS = 'New Arrivals',
    TOP_SELLING = 'Top Selling',
    ON_SALE = 'On Sale'
}

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
          { color: "darkorange", images: ['/images/tshirts/comfort_tee.png'] },
          { color: "darkred", images: [] },
          { color: "darkslateblue", images: [] }
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
          { color: "black", images: ['/images/tshirts/urban_tee.png'] },
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
      discountedPrice: 50,
      price: 185,
      quantity: 410,
      rating: 3,
      variants: {
        colorVariants: [
          { color: "darkgoldenrod", images: ['/images/tshirts/weekend_tee.png'] },
          { color: "darkgray", images: [] },
          { color: "darkgreen", images: [] },
          
        ],
        sizeVariants: ["small", "medium", "large"]
      },
      categoryId: 1,
      isNew: false,
      onSale: true
    },
    {
      id: "4",
      name: "Bold Graphic Tee",
      description: "Make a statement with bold graphics on premium cotton. Designed for casual expression and streetwear flair. Smooth texture with a regular fit. Adds personality to everyday outfits. Great for weekend hangouts or day trips.",
      discountedPrice: 245,
      price: 295,
      quantity: 160,
      rating: 3.5,
      variants: {
        colorVariants: [
          { color: "darkviolet", images: ['/images/tshirts/graphic_tee.png'] },
          { color: "darkblue", images: [] },
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 1,
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
          { color: "darkslategray", images: ['/images/tshirts/fit_tee.png'] },
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
                { color: "black", images: ["/images/P1_black_front.png", "/images/P1_black_back.png"]}
            ],
            sizeVariants : ["small", "medium", "large", "x-large"]
        },
        categoryId: 2,
        isNew: true
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
          { color: "darkolivegreen", images: ['/images/shirts/oxford.png'] },
          { color: "darkslateblue", images: [] },
          { color: "darkgoldenrod", images: [] },
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 2,
      isNew: true
    },
    {
      id: "7",
      name: "Slim Fit Formal Shirt",
      description: "A sleek slim-fit shirt designed for professional settings. Stretchable fabric offers ease without compromising fit. Features a sharp collar and button cuffs. Perfect for business meetings or formal events. Sharp and sophisticated choice.",
      discountedPrice: 310,
      price: 360,
      quantity: 300,
      rating: 3.5,
      variants: {
        colorVariants: [
          { color: "darkmagenta", images: ['/images/shirts/slimfit.png'] },
          { color: "midnightblue", images: [] },
          { color: "darkcyan", images: [] },
        ],
        sizeVariants: ["medium", "large", "x-large"]
      },
      categoryId: 2
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
          { color: "darkslategray", images: ['/images/shirts/lenin_shirt.png'] },
          { color: "black", images: [] },
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
          { color: "darkred", images: ['/images/shirts/check_shirt.png'] },
          { color: "indigo", images: [] }
        ],
        sizeVariants: ["small", "medium", "large", "x-large"]
      },
      categoryId: 2
    },
  
];

const FORMAL_SHIRTS: Product[] = [
  {
    "id": "1",
    "name": "Textured Button-Down Formal Shirt",
    "description": "Add dimension to your formalwear with this textured shirt. Crafted from soft, breathable cotton with a subtle weave. Button-down collar keeps your look sharp all day. Ideal for office, interviews, or formal dinners. Combines comfort and elegance effortlessly.",
    "discountedPrice": 199,
    "price": 249,
    "quantity": 210,
    "rating": 4,
    "variants": {
      colorVariants: [
        { "color": "white", "images": ["/images/formal_shirts/textured_shirt.png"] },
        { "color": "skyblue", "images": [] },
        { "color": "navy", "images": [] }
      ],
      sizeVariants: ["small", "medium", "large", "x-large"],
    },
    categoryId: 4,
  },
  {
    "id": "2",
    "name": "Classic Spread Collar Shirt",
    "description": "Timeless elegance meets comfort in this spread collar shirt. Designed with wrinkle-resistant cotton for all-day neatness. Buttoned cuffs and a curved hem for versatility. A staple for corporate professionals. Pairs effortlessly with suits or chinos.",
    "discountedPrice": 179,
    "price": 229,
    "quantity": 180,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "steelblue", "images": ["/images/formal_shirts/spread_collar_shirt.png"] },
        { "color": "lightgray", "images": [] },
        { "color": "maroon", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 4,
  },
  {
    "id": "3",
    "name": "Premium Twill Formal Shirt",
    "description": "Crafted from premium twill cotton for a soft and smooth feel. Cut in a tailored fit with subtle sheen for elegance. Ideal for client presentations and formal events. Features double-stitched seams for durability. A refined wardrobe essential.",
    "discountedPrice": 249,
    "price": 299,
    "quantity": 120,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "dimgray", "images": ["/images/formal_shirts/twill_shirt.png"] },
        { "color": "lightblue", "images": [] },
        { "color": "forestgreen", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 4,
  },
  {
    "id": "4",
    "name": "Checkered Business Shirt",
    "description": "A contemporary twist on classic formals with subtle checks. Made from breathable and lightweight poplin fabric. Enhances appearance without overpowering the look. Ideal for semi-formal meetings and everyday office use. Keeps you sharp from 9 to 5.",
    "discountedPrice": 159,
    "price": 209,
    "quantity": 300,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "firebrick", "images": ["/images/formal_shirts/check_shirt.png"] },
        { "color": "midnightblue", "images": [] },
        { "color": "gray", "images": [] },
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 4,
  },
  {
    "id": "5",
    "name": "Stretch Cotton Dress Shirt",
    "description": "Combining comfort with structure, this shirt features stretch cotton. Gives ease of movement without sacrificing a tailored look. Designed with a slim placket and reinforced seams. Perfect for long workdays and evening dinners. Stays crisp all day.",
    "discountedPrice": 219,
    "price": 269,
    "quantity": 170,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "teal", "images": ["/images/formal_shirts/stretch_cotton_shirt.png"] },
        { "color": "ivory", "images": [] },
        { "color": "steelblue", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"], 
    },
    categoryId: 4,
  }
];

const BLAZERS_AND_SUITS = [
  {
    "id": "1",
    "name": "Modern Fit Two-Button Blazer",
    "description": "Tailored for a sharp, modern silhouette. This two-button blazer features structured shoulders and notched lapels. Made from a breathable blend for all-season comfort. Ideal for office, events, or smart casual wear. A wardrobe essential with versatile charm.",
    "discountedPrice": 279,
    "price": 299,
    "quantity": 85,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "navy", "images": [] },
        { "color": "darkslategray", "images": [] },
        { "color": "black", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large"]
    }
  },
  {
    "id": "2",
    "name": "Classic Single-Breasted Suit",
    "description": "This single-breasted suit brings timeless elegance to your formalwear. Crafted with a fine wool-blend fabric for refined drape. Flat-front trousers complete the ensemble. Designed for business meetings and formal events. Elevates your style with confidence.",
    "discountedPrice": 299,
    "price": 349,
    "quantity": 60,
    "rating": 4.5,
    "variants": {
      "colorVariants": [
        { "color": "gray", "images": [] },
        { "color": "midnightblue", "images": [] },
        { "color": "darkolivegreen", "images": [] }
      ],
      "sizeVariants": ["medium", "large", "x-large"]
    }
  },
  {
    "id": "3",
    "name": "Slim Fit Tuxedo Blazer",
    "description": "Elevate your evening look with this slim-fit tuxedo blazer. Features satin lapels and a tailored profile. Perfect for weddings, galas, and black-tie events. Lightweight lining ensures comfort without bulk. Designed for a confident, polished appearance.",
    "discountedPrice": 259,
    "price": 299,
    "quantity": 40,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "black", "images": [] },
        { "color": "darkred", "images": [] },
        { "color": "slategray", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    }
  },
  {
    "id": "4",
    "name": "Double-Breasted Formal Suit",
    "description": "Classic double-breasted design with a modern touch. Features peak lapels and structured fit for a bold silhouette. Pants are tapered for contemporary appeal. Ideal for power dressing or formal presentations. Durable, wrinkle-resistant fabric for lasting wear.",
    "discountedPrice": 289,
    "price": 329,
    "quantity": 55,
    "rating": 4.5,
    "variants": {
      "colorVariants": [
        { "color": "darkgray", "images": [] },
        { "color": "steelblue", "images": [] },
        { "color": "saddlebrown", "images": [] }
      ],
      "sizeVariants": ["small", "large", "x-large"]
    }
  },
  {
    "id": "5",
    "name": "Casual Cotton Blazer",
    "description": "A smart-casual cotton blazer perfect for semi-formal days. Lightweight, breathable fabric with unstructured fit. Features patch pockets and a soft shoulder line. Pairs well with chinos or dark jeans. Style without sacrificing comfort.",
    "discountedPrice": 189,
    "price": 229,
    "quantity": 120,
    "rating": 3.5,
    "variants": {
      "colorVariants": [
        { "color": "beige", "images": [] },
        { "color": "lightgray", "images": [] },
        { "color": "rosybrown", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    }
  }
];

const JOGGERS: Product[] = [
  {
    "id": "1",
    "name": "Performance Flex Joggers",
    "description": "Engineered for tough workouts with stretchable fabric. Sweat-wicking finish keeps you dry during intense sessions. Elastic waistband and ankle cuffs ensure a snug fit. Tapered silhouette boosts movement. Ideal for gym, running, and daily training.",
    "discountedPrice": 60,
    "price": 100,
    "quantity": 160,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "darkslategray", "images": ["/images/joggers/performance_joggers.png"] },
        { "color": "black", "images": [] },
        { "color": "navy", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    onSale: true,
    categoryId: 6
  },
  {
    "id": "2",
    "name": "Breathable Mesh Joggers",
    "description": "Stay cool with these ultra-light joggers featuring mesh panels. Designed for airflow and high performance. Elasticated waist and zippered pockets for comfort and utility. Built for gym sessions and HIIT. Looks great even post-workout.",
    "discountedPrice": 85,
    "price": 95,
    "quantity": 120,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "lightgray", "images": ["/images/joggers/mesh_joggers.png"] },
        { "color": "gray", "images": [] },
        { "color": "slategray", "images": [] },
        
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 6
  },
  {
    "id": "3",
    "name": "Stretch Fit Training Joggers",
    "description": "Made with durable stretch fabric for squats and sprints. Athletic fit enhances movement without restriction. Quick-dry fabric keeps sweat in check. Side stripe adds sporty edge. Great for both gym and warm-up routines.",
    "discountedPrice": 79,
    "price": 90,
    "quantity": 140,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "darkolivegreen", "images": ["/images/joggers/stretch_fit_joggers.png"] },
        { "color": "black", "images": [] },
        { "color": "steelblue", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 6
  },
  {
    "id": "4",
    "name": "High-Rise Active Joggers",
    "description": "Designed for active women with a flattering high-rise fit. Stretch fabric supports freedom of movement. Moisture-wicking and quick-dry material keeps you fresh. Features side pockets and a soft waistband. Ideal for yoga, cardio, or strength training.",
    "discountedPrice": 95,
    "price": 100,
    "quantity": 110,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "deeppink", "images": ["/images/joggers/highrise_joggers.png"] },
        { "color": "black", "images": [] },
        { "color": "slategray", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 6
  },
  {
    "id": "5",
    "name": "Breathable Mesh Panel Joggers",
    "description": "Lightweight joggers with breathable mesh panels for airflow. Crafted with quick-dry polyester for intense workouts. Stylish contrast piping on sides. Elastic waistband with inner drawstring for a custom fit. Perfect for gym, pilates, or Zumba sessions.",
    "discountedPrice": 89,
    "price": 99,
    "quantity": 90,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "lightcoral", "images": ["/images/joggers/mesh_panel_joggers.png"] },
        { "color": "darkmagenta", "images": [] },
        { "color": "gray", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 6
  }
];

const PARTY_DRESSES: Product[] = [
  {
    "id": "1",
    "name": "Sequin Bodycon Party Dress",
    "description": "Turn heads with this shimmering bodycon dress. Covered in sparkling sequins for a bold, festive vibe. Designed with a sleeveless cut and scoop neckline. Stretchable fabric ensures a snug, flattering fit. Ideal for club nights or celebrations.",
    "price": 150,
    "quantity": 80,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "gold", "images": ["/images/party_dresses/bodycon.png"] },
        { "color": "silver", "images": [] },
        { "color": "black", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 8,
  },
  {
    "id": "2",
    "name": "Ruffled One-Shoulder Dress",
    "description": "Make a chic statement with this one-shoulder dress. Features dramatic ruffle detailing along the neckline. Lightweight, flowy fabric adds graceful movement. Perfect balance of elegance and fun. Great for cocktail parties or date nights.",
    "discountedPrice": 89,
    "price": 99,
    "quantity": 100,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "mediumvioletred", "images": ["/images/party_dresses/one_shoulder.png"] },
        { "color": "crimson", "images": [] },
        { "color": "midnightblue", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 8
  },
  {
    "id": "3",
    "name": "Satin Slip Party Dress",
    "description": "Minimalist and glamorous satin slip dress. Features a soft sheen with a flattering drape. Adjustable spaghetti straps for a custom fit. Midi length offers classy coverage. Ideal for dinner parties and evening events.",
    "discountedPrice": 75,
    "price": 90,
    "quantity": 120,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "rosybrown", "images": ["/images/party_dresses/slip_dress.png"] },
        { "color": "darkslategray", "images": [] },
        { "color": "lavender", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 8
  },
  {
    "id": "4",
    "name": "Floral Fit & Flare Dress",
    "description": "Flattering fit-and-flare silhouette with floral print. Sleeveless design with round neck and flared hem. Breathable and soft-touch fabric for all-night comfort. Adds playful charm to your party look. Pairs well with heels or sandals.",
    "discountedPrice": 69,
    "price": 85,
    "quantity": 90,
    "rating": 5,
    "variants": {
      "colorVariants": [
        { "color": "coral", "images": ["/images/party_dresses/floral_dress.png"] },
        { "color": "lightpink", "images": [] },
        { "color": "orchid", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 8,
    isNew: true
  },
  {
    "id": "5",
    "name": "Velvet Wrap Party Dress",
    "description": "Elegant velvet dress with a wrap-front design. Soft, rich texture adds a luxurious feel. Waist tie detail for a flattering shape. V-neckline and long sleeves offer coverage and style. Perfect for winter parties and formal gatherings.",
    "discountedPrice": 95,
    "price": 100,
    "quantity": 70,
    "rating": 4,
    "variants": {
      "colorVariants": [
        { "color": "darkred", "images": ["/images/party_dresses/velvet.png"] },
        { "color": "indigo", "images": [] },
        { "color": "slateblue", "images": [] }
      ],
      "sizeVariants": ["small", "medium", "large", "x-large"]
    },
    categoryId: 8,
    isNew: true
  },
  
];


  
export const PRODUCTS_LIST: Product[] = [...CASUAL_SHIRTS, ...CASUAL_TSHIRTS, ...FORMAL_SHIRTS, ...JOGGERS, ...PARTY_DRESSES].map((p, index) => {
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