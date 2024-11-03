import Link from "next/link";

export default function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className={`group text-[0.8em] cursor-pointer relative text-blue-800 font-medium`}
            href={href}
        >
            {children}
            <div
                className={`absolute w-full h-[2px] bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left scale-x-0`}
            />
        </Link>
    );
}
