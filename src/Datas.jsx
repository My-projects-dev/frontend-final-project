const languages = ["English", "French", "Italian", "Spanish"];

const currency = ["USD", "GPV", "ISO"];

const categories = [
  "All Category",
  "Product Item",
  "Product Item 02",
  "Product Item 03",
  "Product Item 04",
  "Product Item 05",
];

var delivery_price = "$200";

const products = [
  {
    id: 1,
    category: "Fresh Fruits",
    productName: "Black Pepper Grains",
    price: "$80",
    new_price: "$70",
    color: "Black",
    size: "Medium",
    stock: "Stock",
    rating: 5,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/2.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-1-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-1-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
    ],
  },
  {
    id: 2,
    category: "Vegetable",
    productName: "Peanut Big Bean",
    price: "$70",
    new_price: "$50",
    color: "Red",
    size: "Large",
    stock: "Stock Out",
    rating: 5,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/3.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-2-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-1-555x645.jpg",
    ],
  },
  {
    id: 3,
    category: "Fish & Meat",
    productName: "Natural Coconut",
    price: "$60",
    new_price: "$50",
    color: "Yellow",
    size: "Small",
    stock: "Stock",
    rating: 4,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Lorem ipsum dolor sit amet, consecte adipisicin elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/4.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-3-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-1-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
    ],
  },
  {
    id: 4,
    category: "Wheat",
    productName: "Dried Lemon Green",
    price: "$70",
    new_price: "$68",
    color: "Red",
    size: "Large",
    stock: "Stock Out",
    rating: 3,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/5.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-4-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
    ],
  },
  {
    id: 5,
    category: "Fresh Fruits",
    productName: "Black Peppepr Read",
    price: "$60",
    new_price: "$50",
    color: "Black",
    size: "Medium",
    stock: "Stock",
    rating: 4,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Lorem ipsum dolor sit amet, consecte adipisicin elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/2.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-5-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
    ],
  },
  {
    id: 6,
    category: "Vegetable",
    productName: "Green Vegetable",
    price: "$60",
    new_price: "$40",
    color: "Green",
    size: "Large",
    stock: "Stock Out",
    rating: 5,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/3.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-6-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
    ],
  },
  {
    id: 7,
    category: "Fish & Meat",
    productName: "Lemon Juice",
    price: "$990",
    new_price: "$700",
    color: "Yellow",
    size: "Small",
    stock: "Stock",
    rating: 4,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Lorem ipsum dolor sit amet, consecte adipisicin elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/4.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-7-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-4-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
    ],
  },
  {
    id: 8,
    category: "Wheat",
    productName: "Cow Milk & Meat",
    price: "$880",
    new_price: "$750",
    color: "Red",
    size: "Large",
    stock: "Stock Out",
    rating: 5,
    product_tags: "Organic, Vegetable, Fruits",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
    categoryImage:
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/icon/5.png",
    images: [
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-2-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/medium-size/1-8-270x300.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-1-555x645.jpg",
      "https://template.hasthemes.com/harmic/harmic/assets/images/product/large-size/2-3-555x645.jpg",
    ],
  },
];

const slider = [
  {
    id: 1,
    image:
      "https://template.hasthemes.com/harmic/harmic/assets/images/slider/inner-img/1-3-601x534.png",
    title: "Natural & Organic",
    subtitle: "-40% Offer All Products.",
  },
  {
    id: 2,
    image:
      "https://template.hasthemes.com/harmic/harmic/assets/images/slider/inner-img/2-1-601x426.png",
    title: "Natural & Organic",
    subtitle: "-50% Offer All Products.",
  },
];

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free Home Delivery Offer",
    img: "https://template.hasthemes.com/harmic/harmic/assets/images/shipping/icon/plane.png",
  },
  {
    id: 2,
    title: "Online Support",
    description: "24/7 Online Support Provide",
    img: "https://template.hasthemes.com/harmic/harmic/assets/images/shipping/icon/earphones.png",
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "Fully Secure Payment System",
    img: "https://template.hasthemes.com/harmic/harmic/assets/images/shipping/icon/shield.png",
  },
];

export default {
  languages,
  currency,
  categories,
  delivery_price,
  products,
  slider,
  features,
};
