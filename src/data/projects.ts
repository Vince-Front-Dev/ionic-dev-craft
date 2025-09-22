export type Project = {
  id: string;
  title: string;
  short: string;
  long: string;
  tech: string[];
  image: string;
  demo: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    short: "A responsive portfolio to showcase projects and skills.",
    long: "Full description: Built with React + Ionic, responsive design, dark mode, animations, and project CMS-friendly data. Features smooth animations, mobile-first design, and accessibility best practices.",
    tech: ["React", "Ionic", "TypeScript"],
    image: "/assets/project-portfolio.jpg",
    demo: "https://example.com/portfolio-demo",
    repo: "https://github.com/yourname/portfolio",
    featured: true
  },
  {
    id: "todo",
    title: "Todo App",
    short: "A modern todo app with local persistence and filters.",
    long: "Full description: Uses localStorage, smooth animations, accessible UI, and keyboard shortcuts. Features include task categories, due dates, priority levels, and search functionality.",
    tech: ["React", "Ionic", "LocalStorage"],
    image: "/assets/project-todo.jpg",
    demo: "https://example.com/todo-demo",
    repo: "https://github.com/yourname/todo-app"
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    short: "A weather dashboard using a public API with search and favorites.",
    long: "Full description: Search by city, saves favorites, shows hourly / daily charts. Includes weather maps, alerts, and detailed forecasts with beautiful data visualizations.",
    tech: ["React", "Ionic", "Fetch API"],
    image: "/assets/project-weather.jpg",
    demo: "https://example.com/weather-demo",
    repo: "https://github.com/yourname/weather-dashboard"
  },
  {
    id: "ecommerce",
    title: "Mini E-commerce",
    short: "Product listing, cart, and checkout flow (mock).",
    long: "Full description: Product grid, cart state, modal checkout, and responsive layout. Features product filtering, wishlist, user reviews, and payment integration simulation.",
    tech: ["React", "Ionic", "Context API"],
    image: "/assets/project-ecom.jpg",
    demo: "https://example.com/ecom-demo",
    repo: "https://github.com/yourname/mini-ecommerce"
  }
];