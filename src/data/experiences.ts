export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiencesData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Web Developer & Support Staff Intern',
    company: 'BBPK Bandung Barat',
    location: 'Bandung Barat, Indonesia (On-site)',
    period: 'Mei 2024 - Des 2024',
    type: 'Internship',
    description: 'Diberikan kepercayaan dan kesempatan untuk membangun serta mengembangkan website resmi BBPK Bandung Barat dengan mengacu pada standar portal informasi publik (referensi ppid.co.id). Selain pengembangan web, juga bertanggung jawab dalam dukungan administratif dan keuangan program.',
    achievements: [
      'Merancang dan mengembangkan portal web BBPK Bandung Barat yang mengadopsi standar aksesibilitas dan transparansi informasi publik.',
      'Mengintegrasikan fitur Text-to-Speech (TTS) untuk membantu pembacaan teks informasi secara audio serta menyediakan Grayscale mode untuk aksesibilitas visual.',
      'Memastikan arsitektur tampilan yang sepenuhnya responsif dan optimal diakses melalui berbagai perangkat.',
      'Melakukan validasi data rekening TKML untuk lebih dari 1.000 orang secara teliti dan akurat.',
      'Membantu dalam proses pemeriksaan dan pengecekan berkas SPJ (Surat Pertanggungjawaban) para peserta TKML.',
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Data Validation', 'Administrative Support', 'Financial Document Verification (SPJ)', 'Web Accessibility'],
  },
];