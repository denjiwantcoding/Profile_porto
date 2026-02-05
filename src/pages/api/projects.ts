// API Endpoint: GET /api/projects
// Returns list of projects

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  date: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

// Mock data - replace with database or CMS
const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    slug: 'ecommerce-website',
    description: 'Full-stack e-commerce platform dengan payment gateway dan admin dashboard.',
    longDescription: 'Website e-commerce lengkap dengan fitur keranjang belanja, payment gateway integration (Midtrans), admin dashboard untuk manajemen produk, order tracking, dan sistem authentication yang aman.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    date: '2025-01-01',
    github: 'https://github.com/username/ecommerce',
    demo: 'https://demo-ecommerce.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    slug: 'mobile-banking-app',
    description: 'Aplikasi mobile banking dengan UI/UX modern dan fitur transfer real-time.',
    longDescription: 'Aplikasi mobile banking yang user-friendly dengan fitur transfer antar bank, pembayaran tagihan, top-up e-wallet, dan notifikasi real-time. Menggunakan biometric authentication untuk keamanan.',
    image: '/images/projects/banking-app.jpg',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    date: '2024-12-15',
    github: 'https://github.com/username/banking-app',
    featured: true
  },
  {
    id: 3,
    title: 'Portfolio CMS',
    slug: 'portfolio-cms',
    description: 'Content Management System untuk portfolio dengan drag-and-drop editor.',
    longDescription: 'CMS khusus untuk membuat portfolio dengan mudah. Fitur drag-and-drop builder, template library, SEO optimization tools, dan analytics dashboard.',
    image: '/images/projects/portfolio-cms.jpg',
    tags: ['Next.js', 'Strapi', 'PostgreSQL', 'AWS'],
    date: '2024-11-20',
    github: 'https://github.com/username/portfolio-cms',
    demo: 'https://portfolio-cms-demo.com',
    featured: false
  },
  {
    id: 4,
    title: 'AI Chatbot Assistant',
    slug: 'ai-chatbot-assistant',
    description: 'Chatbot AI untuk customer service menggunakan natural language processing.',
    longDescription: 'Chatbot pintar yang dapat memahami pertanyaan pelanggan dalam bahasa natural, memberikan jawaban relevan, dan melakukan escalation ke human agent jika diperlukan.',
    image: '/images/projects/chatbot.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
    date: '2024-10-10',
    github: 'https://github.com/username/ai-chatbot',
    featured: true
  },
  {
    id: 5,
    title: 'Task Management Tool',
    slug: 'task-management-tool',
    description: 'Aplikasi manajemen tugas dengan kolaborasi tim dan Kanban board.',
    longDescription: 'Tool manajemen proyek dengan fitur Kanban board, Gantt chart, time tracking, team collaboration, file sharing, dan integrasi dengan tools populer seperti Slack dan Google Drive.',
    image: '/images/projects/task-manager.jpg',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Socket.io'],
    date: '2024-09-05',
    github: 'https://github.com/username/task-manager',
    demo: 'https://task-manager-demo.com',
    featured: false
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    slug: 'weather-forecast-app',
    description: 'Aplikasi prakiraan cuaca dengan visualisasi data interaktif.',
    longDescription: 'Aplikasi cuaca dengan data real-time dari multiple weather APIs, visualisasi grafik interaktif, notifikasi cuaca ekstrem, dan forecast 7 hari ke depan.',
    image: '/images/projects/weather-app.jpg',
    tags: ['Svelte', 'D3.js', 'OpenWeather API', 'Vercel'],
    date: '2024-08-15',
    github: 'https://github.com/username/weather-app',
    demo: 'https://weather-app-demo.vercel.app',
    featured: false
  },{
    id: 7,
    title: 'Website Pengeloal Artikel Berita',
    slug: 'website-pengelola-artikel-berita',
    description: 'Website ini untuk Pengelola artikel multi login untuk admin dan tamu.',
    longDescription: 'Website pengelola artikel berita dengan fitur multi login untuk admin dan tamu. Admin dapat menambah, mengedit, dan menghapus artikel, sedangkan tamu dapat membaca artikel yang tersedia.',
    image: '/images/projects/weather-app.jpg',
    tags: ['HTML', 'CSS','Bootstrap', 'PHP', 'MySQL'],
    date: '2024-12-25',
    github: 'https://github.com/denjiwantcoding/PengelolaArtikel',
    featured: false
  }
];

export async function GET({ url }: { url: URL }) {
  try {
    const featured = url.searchParams.get('featured');
    
    let filteredProjects = projects;
    
    if (featured === 'true') {
      filteredProjects = projects.filter(p => p.featured);
    }

    return new Response(JSON.stringify({
      success: true,
      data: filteredProjects,
      count: filteredProjects.length
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch projects'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Get single project by slug
export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    const { slug } = body;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Project not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      data: project
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Invalid request'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
