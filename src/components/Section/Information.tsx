// import { motion } from 'framer-motion';

export default function Information() {
    return (
        <section
            id="information"
            className="relative w-full h-fit flex flex-col gap-4 px-6 lg:px-14 my-10"
        >
            {/* Title */}
            <span className="block text-yellow-500 font-medium text-xl text-left">
                Informasi Lainnya
            </span>
            {/* End Title */}
            {/* Contents */}
            <div className="w-full h-72 grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-8">
                <div className="w-full h-full p-5 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400 rounded-xl shadow flex flex-col gap-1 lg:gap-2 transition-all duration-1000">
                    {/* Card Title */}
                    <span className="block text-lg lg:text-xl font-bold text-blue-800">
                        Apa itu HMSI?
                    </span>
                    {/* End Card Title */}
                    {/* Card Content */}
                    <span className="block text-sm lg:text-base text-blue-600 font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius, porro sed nesciunt possimus ducimus,
                        incidunt ipsum tempora eligendi velit quo animi labore
                        dignissimos obcaecati, error voluptatum exercitationem
                        eum repudiandae quasi.
                    </span>
                    {/* End Card Content */}
                    {/* Card Button */}
                    <div className="w-fit inline-block text-blue-700 font-medium text-sm lg:text-base mt-4">
                        Lihat selengkapnya
                    </div>
                    {/* End Card Button */}
                </div>
                <div className="w-full h-full p-5 bg-gradient-to-br from-red-200 via-red-200 to-blue-200 rounded-xl shadow flex flex-col gap-1 lg:gap-2">
                    {/* Card Title */}
                    <span className="block text-lg lg:text-xl font-bold text-blue-800">
                        Kontak HMSI
                    </span>
                    {/* End Card Title */}
                    {/* Card Content */}
                    <span className="block text-sm lg:text-base text-blue-600 font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius, porro sed nesciunt possimus ducimus,
                        incidunt ipsum tempora eligendi velit quo animi labore
                        dignissimos obcaecati, error voluptatum exercitationem
                        eum repudiandae quasi.
                    </span>
                    {/* End Card Content */}
                    {/* Card Button */}
                    <div className="w-fit inline-block text-blue-700 font-medium text-sm lg:text-base mt-4">
                        Lihat selengkapnya
                    </div>
                    {/* End Card Button */}
                </div>
                <div className="w-full h-full p-5 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400 rounded-xl shadow flex flex-col gap-1 lg:gap-2">
                    {/* Card Title */}
                    <span className="block text-lg lg:text-xl font-bold text-blue-800">
                        Kapan berdirinya HMSI?
                    </span>
                    {/* End Card Title */}
                    {/* Card Content */}
                    <span className="block text-sm lg:text-base text-blue-600 font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius, porro sed nesciunt possimus ducimus,
                        incidunt ipsum tempora eligendi velit quo animi labore
                        dignissimos obcaecati, error voluptatum exercitationem
                        eum repudiandae quasi.
                    </span>
                    {/* End Card Content */}
                    {/* Card Button */}
                    <div className="w-fit inline-block text-blue-700 font-medium text-sm lg:text-base mt-4">
                        Lihat selengkapnya
                    </div>
                    {/* End Card Button */}
                </div>
            </div>
            {/* End Contents */}
        </section>
    );
}
