/**
 * === CONTENIDO DE EJEMPLO - REEMPLAZAR POR CLIENTE ===
 * Nombre, textos, teléfono, redes, dirección, servicios y mensajes.
 *
 * === MOTOR - NO TOCAR SALVO CAMBIO DE LÓGICA ===
 * Estructura de hours.schedule (modelo flexible de horarios) y shape de datos.
 */

export const business = {
  // Configuración de sitio/deploy
  site: {
    siteUrl: 'https://example.com',
    basePath: '/',
    locale: 'es-AR',
  },

  // Nombres
  name: 'Veterinaria Modelo',
  fullName: 'Veterinaria Modelo',
  tagline: 'Atención clínica de perros, gatos y animales no tradicionales',
  branding: {
    logoAlt: 'Logo Veterinaria Modelo',
  },

  // Feature flags
  features: {
    catalogEnabled: false,
  },

  // Teléfono (formato internacional sin + ni espacios, para wa.me)
  phone: '5491155551234',
  phoneFormatted: '+54 9 11 5555-1234',

  // Mensajes prellenados de WhatsApp
  whatsappMessages: {
    general: 'Hola Veterinaria Modelo! Quiero contactar con ustedes',
    turno: 'Hola Veterinaria Modelo! Quiero pedir turno para consulta veterinaria',
    consultarGeneral: 'Hola Veterinaria Modelo! Quiero consultar por servicios veterinarios',
    consultarServicio: (especialidad: string) => `Hola Veterinaria Modelo! Quiero consultar por la especialidad: ${especialidad}`,
    consultarServicios: 'Hola Veterinaria Modelo! Quería consultar sobre las especialidades médicas que ofrecen',
    consultarProducto: (producto: string) => `Hola Veterinaria Modelo! Quiero consultar por el producto: ${producto}`,
    consultarProductoColor: (producto: string, color: string) => `Hola Veterinaria Modelo! Quiero consultar por el producto: ${producto} (Color: ${color})`,
    comoLlegar: 'Hola Veterinaria Modelo! Quiero saber cómo llegar a la clínica',
  },

  // Navegación y labels globales
  navigation: {
    primary: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Especialidades', href: '#servicios' },
      { label: 'Horarios', href: '#horarios' },
      { label: 'Ubicación', href: '#ubicacion' },
    ],
    ctaLabel: 'Pedir Turno por WhatsApp',
  },

  // Contenido del Hero (editable por cliente)
  hero: {
    headlineTop: 'Veterinaria Modelo',
    locationLine: 'en Villa Crespo, CABA',
    subtitle: 'Atención clínica integral con 18 especialidades médicas. Cuidamos lo que más amás.',
    primaryCtaLabel: 'Ver Especialidades',
    secondaryCtaLabel: 'Contactar por WhatsApp',
    trustItems: [
      'Veterinarios matriculados',
      '18 especialidades médicas',
      'Atención personalizada',
      'Ubicación: Av. Corrientes 4500',
    ],
  },

  // Labels de secciones (editable por cliente)
  sections: {
    services: {
      badge: 'Nuestras Especialidades',
      title: '18 especialidades médicas para el cuidado integral de tu mascota',
      subtitle: 'Atención clínica de perros, gatos y animales no tradicionales con profesionales especializados',
      generalTitle: 'Atención General',
      specialtiesTitle: 'Especialidades Médicas',
      specialtiesCtaLabel: 'Consultá por cualquier especialidad',
      specialtyButtonLabel: 'Consultar',
    },
    location: {
      badge: 'Horarios y Ubicación',
      title: 'Visitanos en Villa Crespo',
      subtitle: 'Estamos en Av. Corrientes 4500. Te esperamos con tu mascota.',
      hoursTitle: 'Horarios de Atención',
      hoursCardTitle: 'Clínica Veterinaria',
      whereToFindUsTitle: 'Dónde Encontrarnos',
      mapsButtonLabel: 'Abrir en Google Maps',
    },
    footer: {
      quickLinksTitle: 'Especialidades',
      contactTitle: 'Contacto',
      hoursTitle: 'Horarios',
      taglineSuffix: 'Cuidamos lo que más amás.',
      quickLinks: [
        { label: 'Atención clínica perros y gatos', href: '#servicios' },
        { label: 'Animales no tradicionales', href: '#servicios' },
        { label: 'Plan vacunal y antirrábico', href: '#servicios' },
        { label: 'Especialidades médicas', href: '#servicios' },
        { label: 'Cirugías y kinesiología', href: '#servicios' },
      ],
    },
  },

  // Datos de servicios (editable por cliente)
  servicesCatalog: {
    general: [
      { name: 'Atención clínica de perros y gatos', icon: 'dog-cat' },
      { name: 'Atención clínica de animales no tradicionales', icon: 'exotic' },
      { name: 'Plan vacunal', icon: 'vaccine' },
      { name: 'Certificado de salud', icon: 'certificate' },
      { name: 'Control antirrábico', icon: 'rabies' },
      { name: 'Colocación de microchip', icon: 'microchip' },
      { name: 'Análisis de laboratorio', icon: 'lab' },
      { name: 'Ecografías', icon: 'ultrasound' },
    ],
    specialties: [
      { name: 'Cardiología', icon: 'cardio' },
      { name: 'Nutrición', icon: 'nutrition' },
      { name: 'Endocrinología', icon: 'endocrine' },
      { name: 'Oftalmología', icon: 'eye' },
      { name: 'Dermatología', icon: 'skin' },
      { name: 'Gastroenterología', icon: 'stomach' },
      { name: 'Etología', icon: 'behavior' },
      { name: 'Traumatología', icon: 'trauma' },
      { name: 'Cirugías', icon: 'surgery' },
      { name: 'Kinesiología', icon: 'physio' },
    ],
  },

  // Dirección
  address: {
    street: 'Av. Corrientes 4500',
    city: 'Villa Crespo',
    region: 'Ciudad Autónoma de Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    // Para Google Maps / schema.org
    streetAddress: 'Av. Corrientes 4500',
    addressLocality: 'Villa Crespo',
    addressRegion: 'Ciudad Autónoma de Buenos Aires',
    // Texto completo para mostrar
    full: 'Av. Corrientes 4500, Villa Crespo, Ciudad Autónoma de Buenos Aires',
    short: 'Av. Corrientes 4500, Villa Crespo',
    withCrossStreet: 'Av. Corrientes 4500 - Villa Crespo, CABA',
  },

  // Redes sociales
  instagram: 'vetmodelo',
  instagramUrl: 'https://instagram.com/vetmodelo',
  whatsappUrl: 'https://wa.me/5491155551234',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Av.+Corrientes+4500,+Villa+Crespo,+CABA',
  googleMapsPlaceUrl: 'https://www.google.com/maps/place/?q=place_id:PLACEHOLDER_PLACE_ID',

  // Horarios de atención (modelo flexible)
  hours: {
    schedule: [
      {
        label: 'Lunes a Viernes',
        shortLabel: 'Lun–Vie',
        dayIndices: [1, 2, 3, 4, 5],
        ranges: [
          { from: '09:30', to: '13:00' },
          { from: '16:30', to: '20:00' },
        ],
      },
      {
        label: 'Sábados',
        shortLabel: 'Sábados',
        dayIndices: [6],
        ranges: [{ from: '10:00', to: '13:00' }],
      },
    ],
    closedDaysLabel: 'Domingos y Feriados',
  },

  // Google Maps Embed
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Av.+Corrientes+4500,+Villa+Crespo,+CABA&output=embed',

  // Coordenadas geográficas (centro de Buenos Aires aprox.)
  geo: {
    lat: -34.6037,
    lng: -58.3816,
  },

  // Google Place ID
  googlePlaceId: 'PLACEHOLDER_PLACE_ID',

  // SEO / Schema.org
  seo: {
    schemaType: 'VeterinaryCare',
    defaultTitle: 'Veterinaria Modelo | Villa Crespo | 18 Especialidades',
    homeTitle: 'Veterinaria Modelo en Villa Crespo | Atención Clínica y 18 Especialidades',
    defaultSection: 'Veterinaria',
    defaultTags: ['veterinaria', 'clínica veterinaria', 'especialidades médicas', 'Villa Crespo', 'CABA', 'Buenos Aires', 'mascotas', 'perros', 'gatos', 'animales no tradicionales'],
    author: 'Veterinaria Modelo',
    businessName: 'Veterinaria Modelo',
    alternateName: 'Modelo Veterinaria',
    description: 'Veterinaria Modelo en Villa Crespo, CABA. Atención clínica de perros, gatos y animales no tradicionales. 18 especialidades médicas. ¡Pedí turno por WhatsApp!',
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Transfer',
    areaServedRadius: '15000', // metros
    serviceType: [
      'Atención clínica de perros y gatos',
      'Atención clínica de animales no tradicionales',
      'Plan vacunal',
      'Certificado de salud',
      'Control antirrábico',
      'Colocación de microchip',
      'Análisis de laboratorio',
      'Ecografías',
      'Cardiología',
      'Nutrición',
      'Endocrinología',
      'Oftalmología',
      'Dermatología',
      'Gastroenterología',
      'Etología',
      'Traumatología',
      'Cirugías',
      'Kinesiología',
    ],
  },

  // Meta tags geo
  geoTags: {
    region: 'AR-C',
    placename: 'Villa Crespo, Ciudad Autónoma de Buenos Aires, Argentina',
    position: '-34.6037;-58.3816',
    icbm: '-34.6037, -58.3816',
  },

  // Open Graph address
  ogAddress: {
    phoneNumber: '5491155551234',
    streetAddress: 'Av. Corrientes 4500',
    locality: 'Villa Crespo',
    region: 'Ciudad Autónoma de Buenos Aires',
    postalCode: '',
    countryName: 'Argentina',
  },

  // PWA manifest (editable por cliente)
  manifest: {
    name: 'Veterinaria Modelo',
    shortName: 'Modelo Vet',
    description: 'Veterinaria Modelo en Villa Crespo, CABA. Atención clínica de perros, gatos y animales no tradicionales. 18 especialidades médicas.',
    categories: ['medical', 'lifestyle'],
    themeColor: '#1a5230',
    backgroundColor: '#ffffff',
    shortcuts: [
      {
        name: 'Pedir Turno',
        shortName: 'Pedir Turno',
        description: 'Pedir turno por WhatsApp',
        type: 'turno',
      },
      {
        name: 'Contactar por WhatsApp',
        shortName: 'WhatsApp',
        description: 'Contactar con el negocio por WhatsApp',
        type: 'general',
      },
    ],
  },
} as const;

// Tipos derivados para TypeScript
export type Business = typeof business;
export type HoursConfig = typeof business.hours;
export type HoursScheduleEntry = typeof business.hours.schedule[number];
export type AddressConfig = typeof business.address;
export type WhatsAppMessages = typeof business.whatsappMessages;