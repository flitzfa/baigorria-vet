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
  name: 'Veterinaria Baigorria',
  fullName: 'Veterinaria Baigorria',
  tagline: 'Atención clínica de perros, gatos y animales no tradicionales',
  branding: {
    logoAlt: 'Logo Veterinaria Baigorria',
  },

  // Feature flags
  features: {
    catalogEnabled: false,
  },

  // Teléfono (formato internacional sin + ni espacios, para wa.me)
  phone: '5491135990190',
  phoneFormatted: '+54 9 11 3599-0190',

  // Mensajes prellenados de WhatsApp
  whatsappMessages: {
    general: 'Hola Veterinaria Baigorria! Quiero contactar con ustedes',
    turno: 'Hola Veterinaria Baigorria! Quiero pedir turno para consulta veterinaria',
    consultarGeneral: 'Hola Veterinaria Baigorria! Quiero consultar por servicios veterinarios',
    consultarServicio: (especialidad: string) => `Hola Veterinaria Baigorria! Quiero consultar por la especialidad: ${especialidad}`,
    consultarServicios: 'Hola Veterinaria Baigorria! Quería consultar sobre las especialidades médicas que ofrecen',
    consultarProducto: (producto: string) => `Hola Veterinaria Baigorria! Quiero consultar por el producto: ${producto}`,
    consultarProductoColor: (producto: string, color: string) => `Hola Veterinaria Baigorria! Quiero consultar por el producto: ${producto} (Color: ${color})`,
    comoLlegar: 'Hola Veterinaria Baigorria! Quiero saber cómo llegar a la clínica',
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
    headlineTop: 'Veterinaria Baigorria',
    locationLine: 'en Gregorio de Laferrere, Buenos Aires',
    subtitle: 'Atención clínica integral. Clínica general sin turno, ecografías y castraciones con turno. Especialidades médicas.',
    primaryCtaLabel: 'Ver Especialidades',
    secondaryCtaLabel: 'Contactar por WhatsApp',
    trustItems: [
      'Veterinarios matriculados',
      'Atención sin turno (por orden de llegada)',
      'Ecografías y castraciones con turno',
      'Ubicación: Estanislao del Campo 4239, La Ferrere',
    ],
  },

  // Labels de secciones (editable por cliente)
  sections: {
    services: {
      badge: 'Nuestras Especialidades',
      title: 'Atención clínica y especialidades médicas para tu mascota',
      subtitle: 'Clínica general sin turno, ecografías y castraciones con turno. Especialidades médicas con profesionales especializados.',
      generalTitle: 'Atención General',
      specialtiesTitle: 'Especialidades Médicas',
      specialtiesCtaLabel: 'Consultá por cualquier especialidad',
      specialtyButtonLabel: 'Consultar',
    },
    location: {
      badge: 'Horarios y Ubicación',
      title: 'Visitanos en Gregorio de Laferrere',
      subtitle: 'Estamos en Estanislao del Campo 4239, La Ferrere. Te esperamos con tu mascota.',
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
        { label: 'Clínica general', href: '#servicios' },
        { label: 'Ecografías', href: '#servicios' },
        { label: 'Castraciones', href: '#servicios' },
        { label: 'Gastroenterología', href: '#servicios' },
        { label: 'Cardiología', href: '#servicios' },
        { label: 'Etología', href: '#servicios' },
        { label: 'Cirugías', href: '#servicios' },
      ],
    },
  },

  // Datos de servicios (editable por cliente)
  servicesCatalog: {
    general: [
      { name: 'Clínica general', icon: 'dog-cat' },
      { name: 'Ecografías', icon: 'ultrasound' },
      { name: 'Castraciones', icon: 'surgery' },
    ],
    specialties: [
      { name: 'Gastroenterología', icon: 'stomach' },
      { name: 'Cardiología', icon: 'cardio' },
      { name: 'Etología', icon: 'behavior' },
      { name: 'Cirugías', icon: 'surgery' },
    ],
  },

  // Dirección
  address: {
    street: 'Estanislao del Campo 4239',
    city: 'La Ferrere',
    region: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    // Para Google Maps / schema.org
    streetAddress: 'Estanislao del Campo 4239',
    addressLocality: 'La Ferrere',
    addressRegion: 'Buenos Aires',
    // Texto completo para mostrar
    full: 'Estanislao del Campo 4239, La Ferrere (Gregorio de Laferrere), Buenos Aires, Argentina',
    short: 'Estanislao del Campo 4239, La Ferrere',
    withCrossStreet: 'Estanislao del Campo 4239 - La Ferrere (Gregorio de Laferrere), Buenos Aires',
  },

  // Redes sociales
  instagram: 'veterinariabaigorria',
  instagramUrl: 'https://instagram.com/veterinariabaigorria',
  whatsappUrl: 'https://wa.me/5491135990190',
  email: 'veterinariabaigorria1@gmail.com',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Estanislao+del+Campo+4239,+La+Ferrere,+Buenos+Aires,+Argentina',
  googleMapsPlaceUrl: 'https://www.google.com/maps/place/?q=place_id:PLACEHOLDER_PLACE_ID',

  // Horarios de atención (modelo flexible)
  hours: {
    schedule: [
      {
        label: 'Lunes a Sábado',
        shortLabel: 'Lun–Sáb',
        dayIndices: [1, 2, 3, 4, 5, 6],
        ranges: [
          { from: '09:00', to: '17:00' },
        ],
      },
    ],
    closedDaysLabel: 'Domingos y Feriados',
  },

  // Google Maps Embed
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.920344001602!2d-58.60592532443046!3d-34.73240217290836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc5c2671e5769%3A0x5cfac72833efc81!2sVeterinaria%20Baigorria!5e0!3m2!1ses-419!2sar!4v1786833421981!5m2!1ses-419!2sar',

  // Coordenadas geográficas
  geo: {
    lat: -34.7324022,
    lng: -58.6033504,
  },

  // Google Place ID
  googlePlaceId: 'ChIJaVceZ8LFvJURgfw-g3KszwU',

  // SEO / Schema.org
  seo: {
    schemaType: 'VeterinaryCare',
    defaultTitle: 'Veterinaria Baigorria | Gregorio de Laferrere | Atención Clínica y Especialidades',
    homeTitle: 'Veterinaria Baigorria en Gregorio de Laferrere, Buenos Aires | Atención Clínica y Especialidades',
    defaultSection: 'Veterinaria',
    defaultTags: ['veterinaria', 'clínica veterinaria', 'especialidades médicas', 'Gregorio de Laferrere', 'Buenos Aires', 'Argentina', 'mascotas', 'perros', 'gatos', 'animales no tradicionales'],
    author: 'Veterinaria Baigorria',
    businessName: 'Veterinaria Baigorria',
    alternateName: 'Baigorria Veterinaria',
    description: 'Veterinaria Baigorria en Gregorio de Laferrere, Buenos Aires. Atención clínica de perros, gatos y animales no tradicionales. Especialidades médicas. ¡Pedí turno por WhatsApp!',
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Transfer',
    areaServedRadius: '15000', // metros
    serviceType: [
      'Clínica general',
      'Ecografías',
      'Castraciones',
      'Gastroenterología',
      'Cardiología',
      'Etología',
      'Cirugías',
    ],
  },

  // Meta tags geo
  geoTags: {
    region: 'AR-B',
    placename: 'La Ferrere, Gregorio de Laferrere, Buenos Aires, Argentina',
    position: '-34.7324022;-58.6033504',
    icbm: '-34.7324022, -58.6033504',
  },

  // Open Graph address
  ogAddress: {
    phoneNumber: '5491135990190',
    streetAddress: 'Estanislao del Campo 4239',
    locality: 'La Ferrere',
    region: 'Buenos Aires',
    postalCode: '',
    countryName: 'Argentina',
  },

  // PWA manifest (editable por cliente)
  manifest: {
    name: 'Veterinaria Baigorria',
    shortName: 'Baigorria Vet',
    description: 'Veterinaria Baigorria en Gregorio de Laferrere, Buenos Aires. Atención clínica de perros, gatos y animales no tradicionales. Especialidades médicas.',
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