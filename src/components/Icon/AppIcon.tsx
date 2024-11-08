import { montserrat } from "@/app/fonts";
import Link from "next/link";

export default function AppIcon({ size = "sm" }: { size?: "sm" | "lg" }) {
    return (
        <>
            <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                className={`text-black font-extrabold w-fit flex ${
                    size === "sm"
                        ? "text-base 2xl:text-lg"
                        : "text-xl 2xl:text-2xl"
                } ${montserrat.className}`}
            >
                SI<span className="text-Blue">24</span>.
            </Link>
        </>
    );
}
