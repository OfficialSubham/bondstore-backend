import type { ProductInter } from "@codersubham/bond-store-types";
import { atom, selector, selectorFamily } from "recoil";

export const mockProducts: ProductInter[] = [
  {
    productId: 1,
    productName: "Classic Mens Wallet",
    productDesc: "Made from premium leather, compact and durable.",
    productAcutalPrice: 1200,
    productDiscountedPrice: 1000,
    productCategory: "menswallet",
    productImages: [
      {
        imgId: 1,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet1/400",
        fileId: "file_wallet1",
      },
      {
        imgId: 2,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet2/400",
        fileId: "file_wallet2",
      },
      {
        imgId: 3,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet3/400",
        fileId: "file_wallet3",
      },
    ],
  },
  {
    productId: 2,
    productName: "Luxury Leather Bag",
    productDesc: "Stylish leather bag perfect for office and casual use.",
    productAcutalPrice: 3500,
    productDiscountedPrice: 2999,
    productCategory: "leatherbags",
    productImages: [
      {
        imgId: 4,
        productId: 2,
        imgUrl: "https://picsum.photos/seed/leatherbag1/400",
        fileId: "file_leatherbag1",
      },
      {
        imgId: 5,
        productId: 2,
        imgUrl: "https://picsum.photos/seed/leatherbag2/400",
        fileId: "file_leatherbag2",
      },
    ],
  },
  {
    productId: 3,
    productName: "Imported Travel Bag",
    productDesc: "Durable imported bag with spacious compartments.",
    productAcutalPrice: 5000,
    productDiscountedPrice: 4200,
    productCategory: "importedbags",
    productImages: [
      {
        imgId: 6,
        productId: 3,
        imgUrl: "https://picsum.photos/seed/importedbag1/400",
        fileId: "file_importedbag1",
      },
      {
        imgId: 7,
        productId: 3,
        imgUrl: "https://picsum.photos/seed/importedbag2/400",
        fileId: "file_importedbag2",
      },
    ],
  },
  {
    productId: 4,
    productName: "Elegant Hand Clutch",
    productDesc: "Trendy hand clutch suitable for parties and events.",
    productAcutalPrice: 2000,
    productDiscountedPrice: 1599,
    productCategory: "handclutch",
    productImages: [
      {
        imgId: 8,
        productId: 4,
        imgUrl: "https://picsum.photos/seed/handclutch1/400",
        fileId: "file_handclutch1",
      },
      {
        imgId: 9,
        productId: 4,
        imgUrl: "https://picsum.photos/seed/handclutch2/400",
        fileId: "file_handclutch2",
      },
    ],
  },
  {
    productId: 5,
    productName: "Casual Mens Side Bag",
    productDesc: "Perfect for daily use, compact yet spacious.",
    productAcutalPrice: 1800,
    productDiscountedPrice: 1500,
    productCategory: "mensidebag",
    productImages: [
      {
        imgId: 10,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/mensidebag1/400",
        fileId: "file_mensidebag1",
      },
      {
        imgId: 11,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/mensidebag2/400",
        fileId: "file_mensidebag2",
      },
    ],
  },
  {
    productId: 6,
    productName: "Slim Leather Wallet",
    productDesc: "Minimalist design, perfect for cards and cash.",
    productAcutalPrice: 1400,
    productDiscountedPrice: 1100,
    productCategory: "menswallet",
    productImages: [
      {
        imgId: 12,
        productId: 6,
        imgUrl: "https://picsum.photos/seed/wallet4/400",
        fileId: "file_wallet4",
      },
    ],
  },
  {
    productId: 7,
    productName: "Premium Office Leather Bag",
    productDesc: "High-quality office bag with laptop compartment.",
    productAcutalPrice: 4200,
    productDiscountedPrice: 3799,
    productCategory: "leatherbags",
    productImages: [
      {
        imgId: 13,
        productId: 7,
        imgUrl: "https://picsum.photos/seed/leatherbag3/400",
        fileId: "file_leatherbag3",
      },
      {
        imgId: 14,
        productId: 7,
        imgUrl: "https://picsum.photos/seed/leatherbag4/400",
        fileId: "file_leatherbag4",
      },
    ],
  },
  {
    productId: 8,
    productName: "Imported Shoulder Bag",
    productDesc: "Comfortable and stylish imported shoulder bag.",
    productAcutalPrice: 2700,
    productDiscountedPrice: 2399,
    productCategory: "importedbags",
    productImages: [
      {
        imgId: 15,
        productId: 8,
        imgUrl: "https://picsum.photos/seed/importedbag3/400",
        fileId: "file_importedbag3",
      },
    ],
  },
  {
    productId: 9,
    productName: "Party Hand Clutch",
    productDesc: "Shiny finish with metallic chain strap.",
    productAcutalPrice: 2500,
    productDiscountedPrice: 1999,
    productCategory: "handclutch",
    productImages: [
      {
        imgId: 16,
        productId: 9,
        imgUrl: "https://picsum.photos/seed/handclutch3/400",
        fileId: "file_handclutch3",
      },
      {
        imgId: 17,
        productId: 9,
        imgUrl: "https://picsum.photos/seed/handclutch4/400",
        fileId: "file_handclutch4",
      },
    ],
  },
  {
    productId: 10,
    productName: "Crossbody Side Bag",
    productDesc: "Trendy crossbody design for modern men.",
    productAcutalPrice: 2200,
    productDiscountedPrice: 1799,
    productCategory: "mensidebag",
    productImages: [
      {
        imgId: 18,
        productId: 10,
        imgUrl: "https://picsum.photos/seed/mensidebag3/400",
        fileId: "file_mensidebag3",
      },
    ],
  },
  {
    productId: 11,
    productName: "Classic Brown Wallet",
    productDesc: "Traditional brown wallet made of genuine leather.",
    productAcutalPrice: 1600,
    productDiscountedPrice: 1299,
    productCategory: "menswallet",
    productImages: [
      {
        imgId: 19,
        productId: 11,
        imgUrl: "https://picsum.photos/seed/wallet5/400",
        fileId: "file_wallet5",
      },
    ],
  },
  {
    productId: 12,
    productName: "Designer Leather Bag",
    productDesc: "Elegant leather bag designed for professionals.",
    productAcutalPrice: 4800,
    productDiscountedPrice: 4399,
    productCategory: "leatherbags",
    productImages: [
      {
        imgId: 20,
        productId: 12,
        imgUrl: "https://picsum.photos/seed/leatherbag5/400",
        fileId: "file_leatherbag5",
      },
    ],
  },
  {
    productId: 13,
    productName: "Imported Duffle Bag",
    productDesc: "Perfect for travel and gym, lightweight and durable.",
    productAcutalPrice: 3000,
    productDiscountedPrice: 2599,
    productCategory: "importedbags",
    productImages: [
      {
        imgId: 21,
        productId: 13,
        imgUrl: "https://picsum.photos/seed/importedbag4/400",
        fileId: "file_importedbag4",
      },
    ],
  },
  {
    productId: 14,
    productName: "Minimalist Hand Clutch",
    productDesc: "Lightweight and elegant hand clutch with modern style.",
    productAcutalPrice: 1700,
    productDiscountedPrice: 1399,
    productCategory: "handclutch",
    productImages: [
      {
        imgId: 22,
        productId: 14,
        imgUrl: "https://picsum.photos/seed/handclutch5/400",
        fileId: "file_handclutch5",
      },
    ],
  },
  {
    productId: 15,
    productName: "Everyday Side Bag",
    productDesc: "Durable and comfortable, perfect for daily errands.",
    productAcutalPrice: 1900,
    productDiscountedPrice: 1599,
    productCategory: "mensidebag",
    productImages: [
      {
        imgId: 23,
        productId: 15,
        imgUrl: "https://picsum.photos/seed/mensidebag4/400",
        fileId: "file_mensidebag4",
      },
    ],
  },
];

export const bulkProduct = atom<ProductInter[] | null>({
  key: "bulkProduct",
  default: selector({
    key: "bulkProductSelector",
    get: () => {
      return mockProducts;
    },
  }),
});

export const categoryProductSelector = selectorFamily({
  key: "categoryProducts",
  get:
    ({ category }: { category: string }) =>
    ({ get }) => {
      const products = get(bulkProduct);
      if (!products) return [];
      const filtered =
        category == "explorebags"
          ? products
          : products.filter((p) => p.productCategory == category);
      return [...filtered].sort(
        (a, b) => a.productDiscountedPrice - b.productDiscountedPrice
      );
    },
});
