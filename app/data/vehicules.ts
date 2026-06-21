export interface Vehicule {
  id: number
  title: string
  price: string
  year: number
  km: string
  image: string
  type: 'vente' | 'location'
  description: string
}

export const vehicules: Vehicule[] = [
  // À VENDRE
  {
    id: 1,
    title: 'Audi RS7',
    price: '40 000 000',
    year: 2022,
    km: '35 000',
    image: '/images/vehicules/rs7.jpg',
    type: 'vente',
    description: 'Berline sportive haute performance, motorisation puissante, finitions haut de gamme.'
  },
  {
    id: 2,
    title: 'Brabus AMG',
    price: '80 000 000',
    year: 2022,
    km: '20 000',
    image: '/images/vehicules/brabus.jpg',
    type: 'vente',
    description: 'Véhicule d\'exception préparé Brabus, puissance et prestige réunis.'
  },
  {
    id: 3,
    title: 'Rolls-Royce',
    price: '100 000 000',
    year: 2022,
    km: '15 000',
    image: '/images/vehicules/rr.jpg',
    type: 'vente',
    description: 'Le summum du luxe automobile, confort et raffinement incomparables.'
  },
  {
    id: 4,
    title: 'BMW',
    price: '45 000 000',
    year: 2022,
    km: '25 000',
    image: '/images/vehicules/bmw.jpg',
    type: 'vente',
    description: 'Berline allemande alliant performance et élégance, équipements haut de gamme.'
  },
  {
    id: 5,
    title: 'Cadillac',
    price: '350 000 000',
    year: 2023,
    km: '8 000',
    image: '/images/vehicules/cadillac.jpg',
    type: 'vente',
    description: 'Véhicule de luxe américain, prestige et confort exceptionnel.'
  },
  {
    id: 6,
    title: 'SUV',
    price: '150 000 000',
    year: 2023,
    km: '12 000',
    image: '/images/vehicules/suv.jpg',
    type: 'vente',
    description: 'SUV premium, spacieux et robuste, parfait pour tous les terrains.'
  },
  // EN LOCATION
  {
    id: 7,
    title: 'Véhicule premium 1',
    price: '50 000',
    year: 2022,
    km: '15 000',
    image: '/images/vehicules/11.jpg',
    type: 'location',
    description: 'Véhicule premium disponible à la location, confort et performance assurés.'
  },
  {
    id: 8,
    title: 'Véhicule premium 2',
    price: '50 000',
    year: 2022,
    km: '18 000',
    image: '/images/vehicules/22.jpg',
    type: 'location',
    description: 'Véhicule premium disponible à la location, confort et performance assurés.'
  },
  {
    id: 9,
    title: 'Véhicule premium 3',
    price: '60 000',
    year: 2023,
    km: '10 000',
    image: '/images/vehicules/range-rover.jpg',
    type: 'location',
    description: 'Véhicule premium disponible à la location, confort et performance assurés.'
  },
  {
    id: 10,
    title: 'BMW Série Future',
    price: '70 000',
    year: 2023,
    km: '10 000',
    image: '/images/vehicules/futur-bmw.jpg',
    type: 'location',
    description: 'Véhicule récent et performant, idéal pour une expérience de conduite premium.'
  },
  {
    id: 11,
    title: 'Honda CR-V',
    price: '40 000',
    year: 2022,
    km: '22 000',
    image: '/images/vehicules/honda-crv.jpg',
    type: 'location',
    description: 'SUV familial fiable et confortable, parfait pour vos déplacements en groupe.'
  },
  {
    id: 12,
    title: 'Jetour',
    price: '35 000',
    year: 2022,
    km: '18 000',
    image: '/images/vehicules/jetour.jpg',
    type: 'location',
    description: 'SUV moderne et économique, bon compromis confort et budget.'
  }
]