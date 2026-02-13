export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
  id: string;
  title: string;
  description: string;
  path: string;
  type: SiteItemType;
  section: string;
  keywords: string[];
  icon: string;    
  color: string;   
  otro?: string; 
};

export const SITE_INDEX: SiteItem[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    description: 'Página principal del sitio de práctica.',
    path: '/',
    type: 'pagina',
    section: 'Estructura',
    keywords: ['inicio', 'home', 'principal'],
    icon: 'bi-house-door-fill',
    color: '#4e73df' // Azul
  },
  {
    id: 'elementos',
    title: 'Elementos del sitio',
    description: 'Identifica los elementos que componen un sitio web.',
    path: '/elementos',
    type: 'pagina',
    section: 'Estructura',
    keywords: ['elementos', 'sitio', 'layout'],
    icon: 'bi-grid-1x2-fill',
    color: '#f6c23e' // Amarillo/Dorado
  },
  {
    id: 'menu',
    title: 'Menú',
    description: 'Elementos principales del menú web y su utilidad.',
    path: '/menu',
    type: 'pagina',
    section: 'Navegación',
    keywords: ['menu', 'navegación', 'navbar'],
    icon: 'bi-segmented-nav',
    color: '#1cc88a' // Verde
  },
  {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    description: 'Funcionamiento y utilidad de las migas de pan.',
    path: '/breadcrumbs',
    type: 'pagina',
    section: 'Navegación',
    keywords: ['breadcrumbs', 'migas', 'ruta'],
    icon: 'bi-arrow-right-short',
    color: '#36b9cc' // Cian
  },
  {
    id: 'mapa',
    title: 'Mapa del sitio',
    description: 'Diseño del mapa del sitio y relación con la navegación.',
    path: '/mapa-sitio',
    type: 'pagina',
    section: 'Estructura',
    keywords: ['mapa', 'sitio', 'sitemap'],
    icon: 'bi-map-fill',
    color: '#e74a3b' // Rojo
  },
  {
    id: 'error404',
    title: 'Error 404',
    description: 'Página para rutas no existentes (404).',
    path: '/no-existe',
    type: 'seccion',
    section: 'Errores',
    keywords: ['404', 'error', 'no encontrado'],
    icon: 'bi-exclamation-octagon-fill',
    color: '#858796' // Gris
  },
];