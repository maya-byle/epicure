import claro from "../Assets/png/dishes/claro.png";
import garbanzoFrito from "../Assets/png/dishes/garbanzoFrito.png";
import tamalako from "../Assets/png/dishes/ta-ma-la-ko.png";
import spicyIcon from "../Assets/svg/Spicy.svg";
import veganIcon from "../Assets/svg/vegan.svg";
import vegitarianIcon from "../Assets/svg/Vegitarian.svg";

import { CardType } from "../Components/Card/Card";

const container: { title: string; cards: CardType[] } = {
  title: "Signature Dish Of:",
  cards: [
    {
      img: claro,
      title: "Pad Ki Mao",
      subTitle:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      foodIcon: spicyIcon,
      price: 88,
    },
    {
      img: garbanzoFrito,
      title: "Garbanzo Frito",
      subTitle:
        "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      foodIcon: vegitarianIcon,
      price: 78,
    },
    {
      img: tamalako,
      title: "ta ma la ko",
      subTitle:
        "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
      foodIcon: veganIcon,
      price: 65,
    },
  ],
};

export default container;
