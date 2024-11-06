export default function Message() {
    return (
        <section
            id="message"
            className="relative h-auto w-full bg-white/60 z-20 flex flex-col lg:flex-row text-Blue py-14 px-5 lg:px-14 lg:items-end gap-2"
        >
            <div className="w-full lg:w-4/12 shrink-0 flex justify-center lg:justify-normal">
                {/* Title */}
                <span className="block text-Yellow font-bold lg:font-bold text-2xl lg:text-3xl">
                    PESAN
                    <span className="lg:block">
                        <span className="text-Blue"> DARI SI24</span>
                    </span>
                </span>
                {/* End Title */}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
                <span className="block text-lg lg:text-lg text-center lg:text-left font-medium">
                    &quot;Happy Anniversary HMSI yang ke-11 dari kami, Mahasiswa
                    Sistem Informasi Angakatan 24. Kami bangga menjadi bagian
                    dari himpunan ini dan berterima kasih atas semua kesempatan,
                    momen dan ilmu yang diberikan. Sukses selalu HMSI!!&quot;
                </span>
            </div>
            {/* End Message */}
        </section>
    );
}
