import { House, ShieldEllipsis, ContactRound, Phone } from "lucide-react";

export const MenuItems = [
    {
        label: "Home",
        icon: <House color="black" size="20"/>,
        url: "/",
    },
    {
        label: "Admin",
        icon: <ShieldEllipsis color="black" size="20"/>,
        url: "/admin",
    },
    {
        label: "About",
        icon: <ContactRound color="black" size="20"/>,
        url: "/about",
    },
    {
        label: "Contact",
        icon: <Phone color="black" size="20"/>,
        url: "/contact",
    },
];