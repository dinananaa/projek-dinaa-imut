import { useState } from 'react'; // 1. Import useState
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, RefreshCw } from 'lucide-react'; // Tambah ikon refresh
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  // 2. Buat state untuk menyimpan URL foto
  const [photo, setPhoto] = useState("//supabase/public/dinanaaa.jpeg");

  // Fungsi untuk mengubah foto (contoh: ganti ke foto lain)
  const changePhoto = () => {
    // Kamu bisa ganti URL ini dengan foto kedua kamu
    const newPhoto = photo === "//supabase/public/dinanaaa.jpeg" 
      ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" // Foto cadangan/baru
      : "//supabase/public/dinanaaa.jpeg";
    setPhoto(newPhoto);
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero py-20">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* --- BAGIAN KIRI: FOTO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end gap-4" // Tambah gap & alignment
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl glass border border-white/20 shadow-2xl">
                <motion.img 
                  key={photo} // Key penting agar Framer Motion tahu gambar berubah
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={photo} // 3. Gunakan state photo di sini
                  alt="Dina" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Tombol untuk ganti foto */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={changePhoto}
              className="text-xs text-muted-foreground hover:text-primary flex gap-2"
            >
              <RefreshCw className="h-3 w-3" /> Ganti Foto
            </Button>
          </motion.div>

          {/* --- BAGIAN KANAN: TEKS --- */}
          <div className="text-center md:text-left">
            {/* ... isi konten teks kamu sama seperti sebelumnya ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
                👋 Selamat datang di portfolio saya
              </motion.span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Portofolio <br />
              <span className="text-gradient"> Dina </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nama aku Dina, aku adalah seorang pelajar dari Aceh yang pertama kali
              mencoba coding. Terimakasih sudah bersedia melihat perjalanan portofolio saya.
            </motion.p>

            <div className="flex flex-col sm:row items-center justify-center md:justify-start gap-4 mb-12">
               {/* ... tombol project & kontak ... */}
               <Button size="lg" className="rounded-full px-8 shadow-glow">Lihat Projects</Button>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}