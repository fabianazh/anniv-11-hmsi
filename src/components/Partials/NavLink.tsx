import { Link } from "react-scroll";

export default function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className={`group text-[0.8em] 2xl:text-sm cursor-pointer relative text-Blue font-medium`}
            to={href}
            smooth={true}
            spy={true}
        >
            {children}
            <div
                className={`absolute w-full h-[2px] bottom-0 left-0 bg-Blue origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left scale-x-0`}
            />
        </Link>
    );
}
