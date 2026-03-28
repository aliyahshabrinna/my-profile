import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-pinkBg dark:bg-gray-900 min-h-screen transition-all duration-500">

        {/* Navbar */}
        <div className="flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-800 backdrop-blur-md shadow-sm">
          <h1 className="text-pinkBold font-semibold text-lg">
            My Profile
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-pinkBold text-pinkBold px-4 py-1 rounded-full hover:bg-pinkBold hover:text-white transition"
          >
            Dark Mode
          </button>
        </div>

        {/* Hero */}
        <div className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800 dark:text-white">
            Aliyah Fitri Shabrina
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
            Mahasiswa
          </p>
        </div>

        {/* About */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-pinkBold mb-4">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Saya adalah mahasiswa yang memiliki minat dalam pengembangan website modern.
            Saya fokus pada pembuatan tampilan yang clean, responsive, dan user friendly
            menggunakan teknologi seperti React dan Tailwind CSS.
          </p>
        </div>

        {/* Portfolio */}
        <div className="px-6 py-12 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-pinkBold mb-8">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Card 1 */}
            <div className="p-5 rounded-2xl shadow hover:shadow-xl transition bg-white dark:bg-gray-700">
              <h3 className="font-semibold text-pinkBold dark:text-pinkSoft mb-2">
                Cafe App
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Aplikasi pemesanan cafe berbasis mobile dengan UI modern.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl shadow hover:shadow-xl transition bg-white dark:bg-gray-700">
              <h3 className="font-semibold text-pinkBold dark:text-pinkSoft mb-2">
                Portfolio Website
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Website profil pribadi menggunakan React dan Tailwind CSS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl shadow hover:shadow-xl transition bg-white dark:bg-gray-700">
              <h3 className="font-semibold text-pinkBold dark:text-pinkSoft mb-2">
                UI Design Project
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Desain antarmuka modern dengan pendekatan minimalis.
              </p>
            </div>

          </div>
        </div>

        {/* Contact */}
        <div className="text-center py-12 px-4">
          <h2 className="text-2xl font-semibold text-pinkBold mb-4">
            Contact
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Email: aliyahshabrinna@email.com
          </p>
        </div>

        {/* Footer */}
        <div className="text-center py-4 text-sm text-gray-400 dark:text-gray-500">
          © 2026 - Your Name
        </div>

      </div>
    </div>
  );
}

export default App;