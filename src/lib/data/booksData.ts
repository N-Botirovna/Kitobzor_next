export type Book = {
  id: string
  title: string
  description: string
  image: string
  author: string
  price: number
  discountPrice: number | null
  region?: string
  shopId: number
}

export const allBooks: Book[] = [
  {
    id: "1",
    title: "Tushlar Qamrovi",
    description: "Mazkur kitob orzular, ruhiyat va o‘zligini anglash haqidagi sarguzashtga boy hikoyani o‘z ichiga oladi.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    author: "Aziz Shukurov",
    price: 49000,
    discountPrice: 39000,
    region: "toshkent",
    shopId: 1,
  },
  {
    id: "2",
    title: "Yomg‘ir Ostidagi Hayot",
    description: "Hayotning murakkabliklari va inson qalbidagi tinimsiz kurash haqida chuqur falsafiy hikoya.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
    author: "Malika Nizamova",
    price: 52000,
    discountPrice: null,
    region: "samarqand",
    shopId: 1,
  },
  {
    id: "3",
    title: "Sukutdagi Nola",
    description: "Sukut ortida yashiringan his-tuyg‘ular va insoniy munosabatlar haqida nozik roman.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    author: "Bahodir Karimov",
    price: 58000,
    discountPrice: 50000,
    region: "andijon",
    shopId: 2,
  },
  {
    id: "4",
    title: "Y",
    description: "Detektiv janridagi bu asar o‘quvchini kutilmagan burilishlar bilan lol qoldiradi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSmoHOI7RskEFEj3J60iGdiJnV90rpm3qIQ&s",
    author: "Dilorom Abdullayeva",
    price: 45000,
    discountPrice: null,
    region: "toshkent",
    shopId: 2,
  },
  {
    id: "5",
    title: "Yolg‘izlik Tarozisi",
    description: "Yolg‘izlik va o‘zlikni anglash mavzusida chuqur psixologik tahlilga boy asar.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
    author: "Javlon Islomov",
    price: 60000,
    discountPrice: 54000,
    region: "samarqand",
    shopId: 2,
  },
  {
    id: "6",
    title: "Uzoqdagi Yulduz",
    description: "Uzoq yillar davom etgan muhabbat va sabr haqida ilhomlantiruvchi hikoya.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
    author: "Zilola Qudratova",
    price: 48000,
    discountPrice: null,
    region: "andijon",
    shopId: 3,
  },
  {
    id: "7",
    title: "Qora Qalam",
    description: "San’at va hayot oralig‘idagi noaniqliklarni o‘rganadigan murakkab asar.",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=600&q=80",
    author: "Sherzod Nurmatov",
    price: 55000,
    discountPrice: 47000,
    region: "toshkent",
    shopId: 3,
  },
  {
    id: "8",
    title: "Choliqushi",
    description: "Taqdirning o‘yinlari va inson tanlovlari haqida hayajonli hikoya.",
    image: "https://assets.asaxiy.uz/product/items/desktop/addfa9b7e234254d26e9c7f2af1005cb2021062017023879340vyGQpIwUjZ.jpg.webp",
    author: "Laylo Karimova",
    price: 53000,
    discountPrice: null,
    region: "andijon",
    shopId: 8,
  },
  {
    id: "9",
    title: "Soya Orqasida",
    description: "Qorong‘ulik va nur o‘rtasidagi kurash haqida ramziy hikoya.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    author: "Rustam Ahmedov",
    price: 57000,
    discountPrice: 49000,
    region: "samarqand",
    shopId: 9,
  },
  {
    id: "10",
    title: "Hayot Haqidagi Savollar",
    description: "Falsafiy tafakkur va zamonaviy hayot muammolari haqida fikr yuritilgan asar.",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106621?auto=format&fit=crop&w=600&q=80",
    author: "Gulbahor Tursunova",
    price: 62000,
    discountPrice: null,
    region: "toshkent",
    shopId: 9,
  },
]
