import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  Users, 
  ChevronDown,
  Anchor,
  Fish,
  Wrench,
  ChevronRight
} from 'lucide-react';
import fotoFormal from './foto-formal.jpg.jpeg';
// Komponen Card untuk Timeline (Pendidikan, Pengalaman, Organisasi)
const TimelineCard = ({ year, title, subtitle, location, points, icon: Icon }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Timeline Line & Dot */}
    <div className="flex flex-col items-center sm:flex-row absolute left-0 sm:left-24 top-7">
      <div className="h-full w-0.5 bg-blue-200 group-last:h-0 absolute top-4 sm:left-4 left-3.5 -z-10"></div>
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white shadow-sm z-10 relative sm:-left-4">
        <Icon size={14} />
      </div>
    </div>
    
    {/* Year (Desktop: Left side, Mobile: Top) */}
    <div className="hidden sm:block absolute left-0 top-7 w-20 text-right">
      <span className="text-sm font-bold text-blue-600">{year}</span>
    </div>

    {/* Content */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="sm:hidden mb-2">
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{year}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1 mb-4 text-sm gap-1 sm:gap-3">
        <span className="font-semibold text-blue-700">{subtitle}</span>
        {location && (
          <>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><MapPin size={14}/> {location}</span>
          </>
        )}
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-gray-700 text-sm leading-relaxed">
            <span className="mr-2 mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-blue-400 block"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Komponen Badge untuk Skill
const SkillBadge = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
    {Icon && <Icon size={16} />}
    {children}
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['beranda', 'pendidikan', 'pengalaman', 'organisasi', 'publikasi'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-6xl">
          <div className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            KASAB<span className={isScrolled ? 'text-blue-600' : 'text-blue-200'}>TOHARO</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Beranda', 'Pendidikan', 'Pengalaman', 'Organisasi', 'Publikasi'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.toLowerCase() 
                    ? (isScrolled ? 'text-blue-600 font-bold' : 'text-white font-bold border-b-2 border-white') 
                    : (isScrolled ? 'text-gray-500' : 'text-blue-50')
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
  {/* Flexbox untuk membagi teks di kiri dan foto di kanan */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
    
    {/* SISI KIRI: Teks & Kontak (Lebar disesuaikan agar tidak sempit) */}
    <div className="flex-1 text-left max-w-2xl">
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-4">
        S.Pi - Teknologi & Manajemen Perikanan Tangkap
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
        KASAB TOHARO
      </h1>
      <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
        Lulusan Sarjana Perikanan Institut Pertanian Bogor dengan keahlian dalam <span className="font-semibold text-white">pengembangan teknologi alat tangkap</span> dan <span className="font-semibold text-white">budidaya ikan</span>. Berpengalaman dalam riset lapangan, publikasi ilmiah, serta manajemen operasional dan pemeliharaan aset.
      </p>
      
      {/* Tombol Kontak */}
     <div className="flex flex-wrap gap-4 text-sm text-blue-50">
        <div className="flex items-center gap-2 bg-blue-950/40 px-4 py-2 rounded-lg backdrop-blur-sm">
          <Mail size={16} className="text-blue-300"/> kasabtoharo07@gmail.com
        </div>
        <div className="flex items-center gap-2 bg-blue-950/40 px-4 py-2 rounded-lg backdrop-blur-sm">
          <Phone size={16} className="text-blue-300"/> +62 896 1418 6474
        </div>
        <div className="flex items-center gap-2 bg-blue-950/40 px-4 py-2 rounded-lg backdrop-blur-sm">
          <MapPin size={16} className="text-blue-300"/> Serang, Indonesia
        </div>
      </div>
    </div>

   {/* SISI KANAN: Foto Profil Formal */}
    <div className="flex-1 flex justify-center md:justify-end w-full">
      <img 
        src={fotoFormal} 
        alt="Foto Formal Kasab Toharo" 
        className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl border-4 border-blue-500/30 shadow-2xl transition-transform duration-300 hover:scale-105"
      />
    </div>
    </div>

  </div>
</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave transition bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 text-gray-50">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-10 md:h-20 fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 md:px-8 py-16 max-w-5xl space-y-24">
        
        {/* Keahlian / Skills Section (Added based on CV inferrence) */}
        <section className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-8 inline-flex items-center gap-2">
            <Wrench className="text-blue-600" /> Keahlian Utama
          </h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={Anchor}>Teknologi Alat Penangkapan Ikan</SkillBadge>
            <SkillBadge icon={Fish}>Manajemen Budidaya Perikanan</SkillBadge>
            <SkillBadge icon={BookOpen}>Riset Lapangan & Pendataan</SkillBadge>
            <SkillBadge icon={Users}>Kepemimpinan & Organisasi</SkillBadge>
            <SkillBadge icon={Wrench}>Pemeliharaan & Restorasi Aset</SkillBadge>
            <SkillBadge>Microsoft Office</SkillBadge>
            <SkillBadge>Manajemen Operasional</SkillBadge>
          </div>
        </section>

        {/* Pendidikan Section */}
        <section id="pendidikan" className="pt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><GraduationCap size={24} /></div>
            Pendidikan
          </h2>
          <div className="max-w-4xl mx-auto">
            <TimelineCard 
              year="2021 - 2025"
              title="Institut Pertanian Bogor (IPB)"
              subtitle="Teknologi dan Manajemen Perikanan Tangkap, S.Pi (IPK: 3.41/4.00)"
              location="Bogor, Indonesia"
              icon={GraduationCap}
              points={[
                "Konsentrasi Studi: Teknologi Alat Penangkapan Ikan (TAPI).",
                "Skripsi Sarjana: Produktivitas Hasil Tangkapan Bagan Perahu Menggunakan Lampu Bawah Air di Pelabuhan Perikanan Nusantara Karangantu."
              ]}
            />
          </div>
        </section>

        {/* Pengalaman Kerja Section */}
        <section id="pengalaman" className="pt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Briefcase size={24} /></div>
            Pengalaman Kerja Profesional
          </h2>
          <div className="max-w-4xl mx-auto">
            <TimelineCard 
              year="2025 - 2026"
              title="Staf Pemeliharaan Aset"
              subtitle="Yayasan Pesantren Islam (YPI) Muáwanatusy Syubban"
              location="Serang, Indonesia"
              icon={Wrench}
              points={[
                "Merestorasi dan melakukan finishing pada furnitur sekolah berbahan besi (meja dan kursi) melalui proses pengamplasan dan pengecatan ulang.",
                "Mengoptimalkan efisiensi kerja dengan meningkatkan output restorasi dari rata-rata 2-8 komponen menjadi 10-15 komponen per set (peningkatan produktivitas 80%).",
                "Merevitalisasi aset furnitur yayasan guna memastikan standar kenyamanan dan kelayakan fasilitas pendidikan bagi siswa.",
                "Menerapkan standar kontrol kualitas selama proses pemeliharaan furnitur besi untuk memastikan hasil pengecatan merata dan tahan lama."
              ]}
            />
            <TimelineCard 
              year="2025"
              title="Petugas Operasional dan Customer Service"
              subtitle="Clean Sneakers IPB"
              location="Bogor, Indonesia"
              icon={Briefcase}
              points={[
                "Mengelola operasional harian laundry dan restorasi sepatu, sandal, tas, dan helm selama 4 shift per minggu, memproses rata-rata 10 pesanan per hari.",
                "Melayani pelanggan secara langsung, menjelaskan layanan, dan menangani keluhan dengan pendekatan ramah.",
                "Bertugas sebagai kasir, mengelola transaksi harian dengan akurasi tinggi dan pencatatan keuangan yang rapi.",
                "Berkoordinasi dengan tim dalam pengaturan jadwal kerja, pembagian tugas, dan pemenuhan target harian."
              ]}
            />
            <TimelineCard 
              year="2023"
              title="Asisten Proyek Pengembangan Alat Bantu Pengumpul Ikan"
              subtitle="DOSPULKAM IPB"
              location="Tegal, Lampung, & Serang, Indonesia"
              icon={Anchor}
              points={[
                "Merancang dan memproduksi sistem lampu bawah air portable untuk bagan perahu (Desain rangkaian LED tahan air, uji lapangan: meningkatkan volume tangkapan hingga 33%).",
                "Menyusun modul edukatif untuk nelayan mengenai peran strategis istri nelayan dalam menjaga kestabilan keuangan keluarga.",
                "Menyambut dan memfasilitasi interaksi dengan nelayan di balai nelayan, serta menjelaskan inovasi teknologi lampu bawah air.",
                "Melakukan dokumentasi lapangan berupa foto, video, dan catatan kegiatan untuk keperluan publikasi akademik."
              ]}
            />
            <TimelineCard 
              year="2024"
              title="Pendataan Bongkar Muat Ikan (Magang)"
              subtitle="Pelabuhan Perikanan Samudera Nizam Zachman"
              location="Jakarta, Indonesia"
              icon={Fish}
              points={[
                "Melakukan pendataan aktivitas bongkar muat ikan secara langsung di dermaga dan jembatan timbang (estimasi volume 1 ton per kapal).",
                "Mengidentifikasi jenis ikan, volume hasil tangkapan, dan kapal yang melakukan pendaratan.",
                "Mengolah dan merekap data harian menggunakan format standar pelabuhan, mencakup identifikasi kapal, komoditas, dan volume.",
                "Menginput dan mengunggah data ke sistem pelaporan Pelabuhan Perikanan untuk dokumentasi dan statistik nasional."
              ]}
            />
            <TimelineCard 
              year="2017 - 2021"
              title="Pendiri Usaha Budidaya Skala Kecil"
              subtitle="Farm Sea Land"
              location="Serang, Indonesia"
              icon={Users}
              points={[
                "Mendirikan dan mengelola usaha budidaya ikan lele secara menyeluruh, dari pembenihan hingga pembesaran.",
                "Meningkatkan rasio kelangsungan hidup larva lele dari 30.000 ekor (40%) menjadi 60.000 ekor (80%) per siklus dalam satu tahun.",
                "Menurunkan tingkat mortalitas larva lele usia 7-14 hari dari 40% menjadi 10% melalui penyesuaian frekuensi penggantian air dan probiotik.",
                "Mengembangkan sistem pemeliharaan yang efisien untuk menghadapi fluktuasi suhu dan kualitas air."
              ]}
            />
          </div>
        </section>

        {/* Pengalaman Kepemimpinan */}
        <section id="organisasi" className="pt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Users size={24} /></div>
            Pengalaman Kepemimpinan
          </h2>
          <div className="max-w-4xl mx-auto">
            <TimelineCard 
              year="2024"
              title="Ketua Koordinasi Desa"
              subtitle="Kuliah Kerja Nyata (KKN)"
              location="Indramayu, Indonesia"
              icon={Users}
              points={[
                "Memimpin tim 7 orang dalam merancang dan mengeksekusi program kerja berbasis pemberdayaan masyarakat pesisir.",
                "Mengembangkan program UMKM berbasis hasil laut, termasuk pelatihan pengemasan produk dan strategi pemasaran digital.",
                "Menghidupkan kembali kegiatan senam desa untuk partisipasi lintas usia.",
                "Mengajar anak-anak SD tentang pentingnya pendidikan dan kebersihan lingkungan."
              ]}
            />
            <TimelineCard 
              year="2024"
              title="Ketua Divisi Penanggung Jawab Peserta"
              subtitle="To Be a Good Fisher (TBGF)"
              location="Bogor & Sukabumi, Indonesia"
              icon={Users}
              points={[
                "Mengelola tim 22 mahasiswa untuk mendampingi 103 peserta baru departemen.",
                "Merancang strategi identifikasi dan pengumpulan informasi personal serta akademik peserta baru.",
                "Bertanggung jawab atas kesiapan mental, teknis, dan logistik peserta dalam kegiatan pengenalan.",
                "Menjalin hubungan kolaboratif dengan pengurus departemen dan panitia acara."
              ]}
            />
            <TimelineCard 
              year="2020"
              title="Ketua OSIS"
              subtitle="MAN 1 Kota Serang"
              location="Serang, Indonesia"
              icon={Award}
              points={[
                "Memimpin organisasi siswa dalam merancang program pengembangan karakter dan solidaritas.",
                "Menyelenggarakan kegiatan classmeeting antar kelas dengan berbagai jenis lomba.",
                "Menginisiasi program kajian online sebagai bentuk respons terhadap pandemi COVID-19 untuk pembinaan karakter siswa."
              ]}
            />
          </div>
        </section>

        {/* Publikasi & Penghargaan Grid */}
        <section id="publikasi" className="pt-8 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Publikasi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><BookOpen size={20} /></div>
                Publikasi Karya Tulis
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div className="group">
                  <div className="text-sm font-bold text-blue-600 mb-1">2025</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Yusfiandayani R, Imron M, Simbolon D, Wiyono ES, Bangun TNC, Negara BFSP, Nisa NS, Violita SR, <strong>Toharo K</strong>. 2025. 
                    <br/><span className="italic">Productivity and fishermen's perception of lamp attractors in Sebesi Island, Indonesia.</span>
                    <br/>In BIO Web of Conferences. Vol. 171, p. 01016. EDP Sciences.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div className="group">
                  <div className="text-sm font-bold text-blue-600 mb-1">2024</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Yusfiandayani R, Imron M, Simbolon D, Wiyono ES, Violitta SR, Rahmad A, <strong>Toharo K</strong>, Tiara. 2024. 
                    <br/><span className="italic">Komposisi dan Produksi Hasil Tangkapan di Pelabuhan Perikanan Pantai Larangan, Kabupaten Tegal.</span>
                    <br/>Jurnal Teknologi Perikanan dan Kelautan. 15(3): 345-352. 
                    <br/><a href="https://journal.ipb.ac.id/index.php/jtpk/article/view/52614" className="text-blue-600 hover:underline flex items-center mt-1 gap-1 text-xs" target="_blank" rel="noreferrer">
                      Lihat Jurnal <ChevronRight size={12}/>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Penghargaan */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Award size={20} /></div>
                Penghargaan & Pengalaman Lain
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6 h-full">
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Award size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Juara 3 Lomba Monolog</h4>
                    <p className="text-sm text-gray-500 mb-1">Tingkat Fakultas Perikanan dan Ilmu Kelautan IPB</p>
                    <p className="text-sm text-blue-600 font-semibold">2023 • Bogor, Indonesia</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Users size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Perwakilan Sekolah</h4>
                    <p className="text-sm text-gray-500 mb-1">Perkemahan Saka Kalpataru dan Saka Wanabakti</p>
                    <p className="text-sm text-blue-600 font-semibold">2019 • Jakarta & Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            <span className="text-white font-bold tracking-wider text-lg">KASAB TOHARO</span>
            <br />
            Sarjana Perikanan (S.Pi)
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:kasabtoharo07@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="tel:+6289614186474" className="hover:text-white transition-colors"><Phone size={20} /></a>
          </div>
          <p>© {new Date().getFullYear()} Kasab Toharo. Semua Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
