import card1 from "./giftCard/card-15k.png";
import card2 from "./giftCard/card-25k.png";
import card3 from "./giftCard/card-50k.png";
import card4 from "./giftCard/card-150k.png";
import card5 from "./giftCard/card-200.png";
import card6 from "./giftCard/card-any.png";
import card7 from "./giftCard/gift-card.png";

interface GiftCard {
  image: string;
  cardTitle: string;
  price: number;
  id: number;
  selected: boolean;
}

const giftCardData: GiftCard[] = [
  {
    id: 1,
    image: card1,
    cardTitle: "Gift Card",
    price: 15000,
    selected: true,
  },
  {
    id: 2,
    image: card2,
    cardTitle: "Gift Card",
    price: 25000,
    selected: true,
  },
  {
    id: 4,
    image: card3,
    cardTitle: "Gift Card",
    price: 50000,
    selected: true,
  },
  {
    id: 4,
    image: card7,
    cardTitle: "Gift Card",
    price: 100000,
    selected: true,
  },
  {
    id: 5,
    image: card4,
    cardTitle: "Gift Card",
    price: 15000,
    selected: true,
  },
  {
    id: 6,
    image: card5,
    cardTitle: "Gift Card",
    price: 200000,
    selected: true,
  },
  {
    id: 7,
    image: card6,
    cardTitle: "Gift Card",
    price: 15000,
    selected: true,
  },
];
