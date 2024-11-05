export default function Chip({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`bg-Blue text-white inline-flex rounded-lg px-2 ${className}`}
        >
            {children}
        </div>
    );
}
