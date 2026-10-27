export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string; // Highlight pencapaian
}

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Blockchain Document Verification System',
    description: 'Sistem verifikasi dokumen berbasis blockchain yang dibangun dengan React, Node.js, dan Solidity. Menggunakan kriptografi SHA-256 untuk hashing berkas sebelum di-deploy ke jaringan Ethereum (Sepolia testnet) guna menjamin keaslian dan keamanan data.',
    image: '/pict2.png',
    tags: ['React', 'Node.js', 'Solidity', 'Ethereum', 'SHA-256', 'Tailwind CSS'],
    demoUrl: 'https://frontend-verifikasi-v2.vercel.app/',
    githubUrl: 'https://github.com/Samuelarando',
    featured: true,
    metrics: 'Immutable data security & Sepolia testnet integrated',
  },
  {
    id: 'project-2',
    title: 'Game Store & Marketplace Platform',
    description: 'Platform e-commerce dan jual-beli game digital modern dengan katalog interaktif, manajemen keranjang belanja, sistem transaksi aman, dan antarmuka responsif.',
    image: '/pict3.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    demoUrl: 'https://game-store-iota-three.vercel.app/',
    githubUrl: 'https://github.com/Samuelarando',
    featured: true,
    metrics: 'Fast filtering & responsive store layout',
  },
  {
    id: 'project-3',
    title: 'CHA™ Graphology Course Learning Platform',
    description: 'Website belajar dan kursus grafologi (Certified Handwriting Analyst) interaktif dengan landing page hero section yang elegan, pendaftaran kelas, dan modul pembelajaran analitis.',
    image: '/pict4.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    demoUrl: 'https://grafologi-re-design.vercel.app/',
    githubUrl: 'https://github.com/Samuelarando',
    featured: true,
    metrics: 'Professional graphology certification UI',
  },
];