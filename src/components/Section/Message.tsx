export default function Message() {
    return (
        <section
            id="message"
            className="relative h-auto w-full bg-stone-50/60 z-20 flex flex-col text-blue-800 pt-0 pb-14 px-10 lg:px-40"
        >
            <div className="flex flex-col gap-3">
                {/* White Line */}
                <div className="bg-stone-50 w-full h-8 mb-4"></div>
                {/* End White Line */}

                {/* Title */}
                <span className="block text-yellow-300 font-medium text-lg lg:text-xl text-center">
                    From Us
                </span>
                {/* End Title */}

                {/* Message */}
                <div className="w-full flex flex-col gap-1">
                    <span className="block text-lg lg:text-xl text-center font-medium">
                        &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur possimus cumque molestiae et ex
                        praesentium facilis est, voluptatem deleniti fuga
                        architecto tenetur id quod minima accusantium quae rerum
                        quasi repellendus! Rem doloribus, nostrum, libero
                        consectetur quasi optio maiores distinctio reiciendis
                        eius autem alias nulla, voluptates dolorum similique.
                        Perspiciatis cum magni cumque harum atque non, quibusdam
                        &quot;
                    </span>
                    {/* <span className="block text-lg lg:text-xl text-center font-bold">
                        SI24
                    </span> */}
                </div>
                {/* End Message */}
            </div>
        </section>
    )
}
