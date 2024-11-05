import { Poppins, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    adjustFontFallback: false,
});
