import sweatshirt from "./img/sweatshirt.png";
import lanyard from "./img/lanyard.png";
import cap from "./img/cap.png";
import sticker from "./img/sticker.png";
import totebag from "./img/totebag.png";
import tumbler from "./img/tumbler.png";
import keychain from "./img/keychain.png";
import classic from "./img/nuclassic.png";

const products = [
  {
    name: "campus-tote-bag",
    title: "Campus Tote Bag",
    category: "Bags",
    price: "PHP 499",
    stock: "In stock",
    image: totebag,
    content: [
      "A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.",
      "Made with thick canvas, reinforced handles, and a clean monochrome print.",
      "Best for students who want one simple carry-all bag for class and after-class plans.",
    ],
  },
  {
    name: "triangular-nu-keychain",
    title: "Triangular NU Keychain",
    category: "Accessories",
    price: "PHP 39",
    stock: "In stock",
    image: keychain,
    content: [
      "Features a unique triangular design made from durable, high-grade acrylic.",
      "Comes with a sturdy metal ring to keep your keys, ID, or bag charms secure.",
      "A sleek and lightweight way to carry your NU pride wherever you go.",
    ],
  },
  {
    name: "stainless-tumbler",
    title: "Stainless Tumbler",
    category: "Drinkware",
    price: "PHP 599",
    stock: "Low stock",
    image: tumbler,
    content: [
      "A double-wall tumbler built for water, coffee, or tea during long school days.",
      "The matte finish keeps the look simple while the lid helps reduce spills in your bag.",
      "Fits most side pockets and keeps drinks ready between classes.",
    ],
  },
  {
    name: "nu-classic-tee",
    title: "NU Classic Tee",
    category: "Apparel",
    price: "PHP 249",
    stock: "In stock",
    image: classic,
    content: [
      "Made from premium, breathable cotton for maximum comfort during long campus days.",
      "Features a timeless minimalist design with the iconic NU logo printed in high-quality ink.",
      "Designed with a standard unisex fit that pairs perfectly with casual or athletic wear.",
    ],
  },
  {
    name: "sweatshirt",
    title: "Sweat Shirt",
    category: "Apparel",
    price: "PHP 1,199",
    image: sweatshirt,
    stock: "Preorder",
    content: [
      "A soft everyday sweatshirt with a relaxed fit for classrooms, commute days, and weekends.",
      "The heavy cotton blend keeps structure while staying comfortable for regular wear.",
      "Available through preorder so sizes can be reserved before release.",
    ],
  },
  {
    name: "nu-sticker",
    title: "NU Sticker",
    category: "Accessories",
    price: "PHP 49",
    stock: "In stock",
    image: sticker,
    content: [
      "Waterproof and scratch-resistant vinyl material, perfect for laptops and water bottles.",
      "Vibrant, high-quality print featuring iconic NU graphics and school spirit colors.",
      "Easy to apply and leaves no sticky residue when removed or repositioned.",
    ],
  },
  {
    name: "id-lanyard-set",
    title: "ID Lanyard Set",
    category: "Accessories",
    price: "PHP 179",
    stock: "In stock",
    image: lanyard,
    content: [
      "A durable lanyard and card holder set for IDs, access cards, and small passes.",
      "The clip is easy to detach when scanning or presenting credentials.",
      "Simple enough for daily use and sturdy enough for a full semester.",
    ],
  },
  {
    name: "nu-cap",
    title: "NU Cap",
    category: "Apparel",
    price: "PHP 399",
    stock: "In stock",
    image: cap,
    content: [
      "Premium quality fabric featuring the signature embroidered NU logo.",
      "Designed with an adjustable strap for a comfortable, custom fit for all-day wear.",
      "A stylish and versatile accessory to showcase your school pride on or off campus.",
    ],
  },
];

export default products;
