import { montserrat } from "@/app/fonts";
import Link from "next/link";

export default function AppIcon({ size = "sm" }: { size?: "sm" | "lg" }) {
    return (
        <>
            <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                className={`text-black font-extrabold w-fit flex ${
                    size === "sm" ? "text-base" : "text-xl"
                } ${montserrat.className}`}
            >
                SI<span className="text-blue-600">24</span>.
            </Link>
        </>
    );
}
