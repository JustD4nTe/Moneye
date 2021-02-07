import FoodIcon from "../src/images/icons/food.png";
import ShoppingIcon from "../src/images/icons/shopping.png";
import TransportIcon from "../src/images/icons/transport.png";
import HomeIcon from "../src/images/icons/home.png";
import LeisureIcon from "../src/images/icons/leisure.png";
import GiftIcon from "../src/images/icons/gift.png";
import HealthIcon from "../src/images/icons/health.png";
import OtherIcon from "../src/images/icons/other.png";
import CardIcon from "../src/images/icons/card.png";
import CashIcon from "../src/images/icons/cash.png";
import SavingIcon from "../src/images/icons/savings.png";

export const URL_API = "http://localhost:5000/api";

export const LINKS = {
  OVERVIEW: "/",
  ACCOUNT: "/",
  SPENDING: "/spending",
  INCOME: "/income",
  CARD: "/card",
  CASH: "/cash",
  SAVINGS: "/savings",
};

export const CATEGORIES = [
  {
    value: "Food",
    icon: FoodIcon,
  },
  {
    value: "Shopping",
    icon: ShoppingIcon,
  },
  {
    value: "Transport",
    icon: TransportIcon,
  },
  {
    value: "Home",
    icon: HomeIcon,
  },
  {
    value: "Leisure",
    icon: LeisureIcon,
  },
  {
    value: "Gift",
    icon: GiftIcon,
  },
  {
    value: "Health",
    icon: HealthIcon,
  },
  {
    value: "Other",
    icon: OtherIcon,
  },
];

export const ACCOUNTS = [
  {
    name: "Card",
    icon: CardIcon,
    value: 1,
  },
  {
    name: "Cash",
    icon: CashIcon,
    value: 2,
  },
  {
    name: "Savings",
    icon: SavingIcon,
    value: 3,
  },
];
