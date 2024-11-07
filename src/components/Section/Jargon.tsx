export default function Jargon() {
    return (
        <>
            <section
                id="jargon"
                className="w-full relative overflow-hidden shrink-0 flex flex-col gap-2 lg:gap-4 bg-white rounded-xl p-4 lg:p-6 shadow-sm"
            >
                {/* Left Card */}
                <div className="absolute -left-14 -top-4 rotate-[35deg] w-20 h-40 bg-Blue rounded-xl shadow"></div>
                {/* End Left Card */}
                {/* Jargon */}
                <span className="block text-Blue font-bold lg:font-bold text-xl lg:text-2xl text-center">
                    BERANI MELANGKAH ,
                    <span className="block text-Yellow">
                        {" "}
                        MENGUKIR SEJARAH!!!{" "}
                    </span>
                </span>
                {/* End Jargon */}
                {/* Right Card */}
                <div className="absolute -right-14 -top-10 rotate-[35deg] w-20 h-40 bg-Yellow rounded-xl shadow"></div>
                {/* End Right Card */}
            </section>
        </>
    );
}
