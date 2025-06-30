// lib/data/shopData.ts

export type Shop = {
  id: number
  name: string
  bio: string
  picture: string
  owner: number
  star: number
  district: number
  region: number
  point: string
  location_text: string
  phone_number: string
  telegram: string
  is_active: boolean
  region_name: string
  district_name: string
}

export const shops: Shop[] = [
      {
    id: 1,
    name: "Book.uz",
    bio: "Yoshlar uchun motivatsion kitoblar.",
    picture: "https://avatars.mds.yandex.net/get-altay/13458328/2a0000018f649dc544b289bb20c195fac5fa/orig",
    owner: 5,
    star: 4,
    district: 103,
    region: 10,
    point: "41.3123, 69.2798",
    location_text: "Toshkent, Mirzo Ulug‘bek",
    phone_number: "+998935554433",
    telegram: "@yoshkitob",
    is_active: true,
    region_name: "Toshkent",
    district_name: "Mirzo Ulug‘bek"
  },
  {
    id: 2,
    name: "Qamar",
    bio: "Ilmiy va badiiy kitoblar yetkazib berish xizmati.",
    picture: "https://avatars.mds.yandex.net/get-altay/13220791/2a00000194786cc3c039668f2dc31ed98e1d/orig",
    owner: 6,
    star: 5,
    district: 205,
    region: 20,
    point: "39.6545, 66.9589",
    location_text: "Samarqand, Siyob bozori",
    phone_number: "+998933214567",
    telegram: "@oltinqalam",
    is_active: true,
    region_name: "Samarqand",
    district_name: "Siyob"
  },
  {
    id: 3,
    name: "Ziyo nur",
    bio: "Mashhur mualliflarning asarlari to‘plami.",
    picture: "https://avatars.mds.yandex.net/get-altay/3518606/2a000001793260993d51e5d3fbc80239da0c/orig",
    owner: 7,
    star: 3,
    district: 303,
    region: 30,
    point: "40.7820, 72.3439",
    location_text: "Andijon, Shahrixon t.",
    phone_number: "+998907654321",
    telegram: "@asrbooks",
    is_active: true,
    region_name: "Andijon",
    district_name: "Shahrixon"
  },
  {
    id: 4,
    name: "KItob olami",
    bio: "Zamonaviy o‘zbek va jahon adabiyoti do‘koni.",
    picture: "https://avatars.mds.yandex.net/get-altay/2051686/2a0000016fbc69f49cb340abfb670a4c15ef/orig",
    owner: 8,
    star: 4,
    district: 104,
    region: 10,
    point: "41.3131, 69.2811",
    location_text: "Toshkent, Sergeli t.",
    phone_number: "+998944445566",
    telegram: "@readbox_uz",
    is_active: true,
    region_name: "Toshkent",
    district_name: "Sergeli"
  },
  {
    id: 5,
    name: "Ziyo Books",
    bio: "Zamonaviy va klassik adabiyotlar markazi.",
    picture: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    owner: 1,
    star: 4,
    district: 101,
    region: 10,
    point: "41.311081, 69.240562",
    location_text: "Toshkent, Chilonzor-7",
    phone_number: "+998901234567",
    telegram: "@ziyobooks",
    is_active: true,
    region_name: "Toshkent",
    district_name: "Chilonzor"
  },
  {
    id: 6,
    name: "Yoshlik",
    bio: "Bolalar va o‘quv kitoblar do‘koni.",
    picture: "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
    owner: 2,
    star: 5,
    district: 102,
    region: 10,
    point: "41.2995, 69.2401",
    location_text: "Toshkent, Yunusobod 12",
    phone_number: "+998911234567",
    telegram: "@kitob_olami",
    is_active: true,
    region_name: "Toshkent",
    district_name: "Yunusobod"
  },
  {
    id: 7,
    name: "Nuroniy Kitoblar",
    bio: "Diniy va falsafiy adabiyotlar do‘koni.",
    picture: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    owner: 3,
    star: 3,
    district: 203,
    region: 20,
    point: "39.6542, 66.9597",
    location_text: "Samarqand, Registon maydoni",
    phone_number: "+998901112233",
    telegram: "@nuroniykitob",
    is_active: true,
    region_name: "Samarqand",
    district_name: "Registon"
  },
  {
    id: 8,
    name: "Istiqlol Bookstore",
    bio: "Chegara bilmaydigan bilimlar markazi.",
    picture: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    owner: 4,
    star: 5,
    district: 304,
    region: 30,
    point: "40.7821, 72.3442",
    location_text: "Andijon, Asaka sh.",
    phone_number: "+998909876543",
    telegram: "@istiqlolshop",
    is_active: true,
    region_name: "Andijon",
    district_name: "Asaka"
  },

  {
    id: 9,
    name: "ClassicBooks.uz",
    bio: "Klassik adabiyotlar va arxiv nusxalar do‘koni.",
    picture: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
    owner: 9,
    star: 5,
    district: 306,
    region: 30,
    point: "40.7810, 72.3420",
    location_text: "Andijon, Ulug‘nor",
    phone_number: "+998939393939",
    telegram: "@classicbooks",
    is_active: true,
    region_name: "Andijon",
    district_name: "Ulug‘nor"
  },
  {
    id: 10,
    name: "Ilm Ziyo",
    bio: "Akademik va ilmiy kitoblar markazi.",
    picture: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    owner: 10,
    star: 4,
    district: 206,
    region: 20,
    point: "39.6540, 66.9577",
    location_text: "Samarqand, Shohruh ko‘chasi",
    phone_number: "+998936667788",
    telegram: "@ilmziyo",
    is_active: true,
    region_name: "Samarqand",
    district_name: "Shohruh"
  },
  {
    id: 11,
    name: "Navoiy Kitoblari",
    bio: "Alisher Navoiy asarlari va adabiy meros do‘koni.",
    picture: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    owner: 111,
    star: 4,
    district: 1,
    region: 4,
    point: "40.1100,65.3792",
    location_text: "Navoiy viloyati, Karmana tumani",
    phone_number: "+998901212121",
    telegram: "@navoiy_books",
    is_active: true,
    region_name: "Navoiy",
    district_name: "Karmana"
  },
  {
    id: 12,
    name: "Qalam & Qog‘oz",
    bio: "Kitoblar bilan birga ofis jihozlari ham mavjud.",
    picture: "https://images.unsplash.com/photo-1516972810927-80185027ca84",
    owner: 112,
    star: 4,
    district: 4,
    region: 5,
    point: "41.5520,60.6311",
    location_text: "Nukus shahri, Shumanay tumani",
    phone_number: "+998934343434",
    telegram: "@qalam_qogoz",
    is_active: true,
    region_name: "Qoraqalpog‘iston",
    district_name: "Shumanay"
  }
]
