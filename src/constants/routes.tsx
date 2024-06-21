import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CartPage";
import { ContactsPage } from "../pages/ContactsPage";
import { MainPage } from "../pages/MainPage";
import { PaymentPage } from "../pages/Payment";

export const ROUTES = [
  { path: "/", element: <MainPage />, linkTitle: "Main" },
  { path: "/about", element: <AboutPage />, linkTitle: "About" },
  { path: "/payment", element: <PaymentPage />, linkTitle: "Payment" },
  { path: "/contacts", element: <ContactsPage />, linkTitle: "Contacts" },
  { path: "/cart", element: <CartPage />, linkTitle: "Cart" },
];
