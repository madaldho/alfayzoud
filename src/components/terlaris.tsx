

const Terlaris = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-amber-800 hover:text-amber-600 transition-colors duration-300">
            Mobil Paling Banyak
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
            Di Rental
          </span>
        </h2>
        <div className="flex flex-wrap bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-2.png"
              alt="Most Rented Car - Innova Reborn"
              className="object-cover w-full h-full max-h-80 sm:max-h-full"
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
              Innova Reborn
            </h3>
            <p className="text-gray-600 mb-4 text-center md:text-left">
              Innova Reborn adalah mobil pilihan terbaik bagi pelanggan kami.
              Dengan desain yang mewah, kenyamanan kelas atas, dan performa luar
              biasa, mobil ini telah menjadi favorit untuk perjalanan bisnis,
              liburan keluarga, atau acara khusus.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-center md:text-left">
              <li>Kenyamanan premium dengan desain modern</li>
              <li>Dukungan driver profesional dan ramah</li>
              <li>Harga terjangkau untuk kualitas terbaik</li>
            </ul>
            <p className="text-lg font-semibold text-amber-600 mb-6 text-center md:text-left">
              Harga: Rp. 600.000/hr/tgl
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://wa.me/212716164271?text=Hallo%20Artha%20Raya%20Transportasi,%20saya%20mau%20booking%20mobil%20Innova%20Reborn,%20Terima%20Kasih!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-700 transition duration-300"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terlaris;
