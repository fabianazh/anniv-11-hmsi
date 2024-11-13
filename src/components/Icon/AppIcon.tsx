import Image from "next/image";
import Link from "next/link";

export default function AppIcon({ size = "sm" }: { size?: "sm" | "lg" }) {
    return (
        <>
            <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                className={`flex w-fit h-fit`}
            >
                <Image
                    src={"/img/logo/si24.png"}
                    alt="SI24 Logo"
                    width={400}
                    height={400}
                    className="h-8 lg:h-10 2xl:h-12 w-fit"
                />
            </Link>
        </>
    );
}
