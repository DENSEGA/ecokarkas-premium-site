/*
  ПРОЕКТЫ ЭкоКаркас — projects.js
  Редактируйте прямо на GitHub!

  КАК ДОБАВИТЬ ПРОЕКТ:
  1. Скопируйте объект (от { до },)
  2. Вставьте перед ];
  3. Заполните: id, category, name, area, floors, bedrooms, price, images (мин. 5), fallback
  4. Создайте папку portfolio/НАЗВАНИЕ/ с фото 1.jpg...5.jpg
  5. Commit → сайт обновится

  category: 'karkas' | 'gazoblok' | 'modular' | 'banya'
*/

const projects = [

  {
    id: 1,
    category: 'karkas',
    name: 'Барнхаус «Скандинавия»',
    area: '120 м²',
    floors: '2 этажа',
    bedrooms: '3 спальни',
    price: 'от 7 800 000 ₽',
    images: ['portfolio/karkas-1/1.jpg','portfolio/karkas-1/2.jpg','portfolio/karkas-1/3.jpg','portfolio/karkas-1/4.jpg','portfolio/karkas-1/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
  },

  {
    id: 2,
    category: 'karkas',
    name: 'Каркасный «Лесная поляна»',
    area: '95 м²',
    floors: '1 + мансарда',
    bedrooms: '2 спальни',
    price: 'от 6 175 000 ₽',
    images: ['portfolio/karkas-2/1.jpg','portfolio/karkas-2/2.jpg','portfolio/karkas-2/3.jpg','portfolio/karkas-2/4.jpg','portfolio/karkas-2/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56c0c?w=600&q=80'
  },

  {
    id: 3,
    category: 'karkas',
    name: 'Каркасный «Уют»',
    area: '80 м²',
    floors: '1 этаж',
    bedrooms: '2 спальни',
    price: 'от 5 200 000 ₽',
    images: ['portfolio/karkas-3/1.jpg','portfolio/karkas-3/2.jpg','portfolio/karkas-3/3.jpg','portfolio/karkas-3/4.jpg','portfolio/karkas-3/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80'
  },

  {
    id: 4,
    category: 'gazoblok',
    name: 'Газоблок «Премиум»',
    area: '160 м²',
    floors: '2 этажа',
    bedrooms: '4 спальни',
    price: 'от 12 000 000 ₽',
    images: ['portfolio/gazoblok-1/1.jpg','portfolio/gazoblok-1/2.jpg','portfolio/gazoblok-1/3.jpg','portfolio/gazoblok-1/4.jpg','portfolio/gazoblok-1/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80'
  },

  {
    id: 5,
    category: 'gazoblok',
    name: 'Газоблок «Классика»',
    area: '130 м²',
    floors: '2 этажа',
    bedrooms: '3 спальни',
    price: 'от 9 750 000 ₽',
    images: ['portfolio/gazoblok-2/1.jpg','portfolio/gazoblok-2/2.jpg','portfolio/gazoblok-2/3.jpg','portfolio/gazoblok-2/4.jpg','portfolio/gazoblok-2/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80'
  },

  {
    id: 6,
    category: 'modular',
    name: 'Модульный «Компакт»',
    area: '45 м²',
    floors: '1 этаж',
    bedrooms: '1 спальня',
    price: 'от 2 475 000 ₽',
    images: ['portfolio/modular-1/1.jpg','portfolio/modular-1/2.jpg','portfolio/modular-1/3.jpg','portfolio/modular-1/4.jpg','portfolio/modular-1/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80'
  },

  {
    id: 7,
    category: 'modular',
    name: 'Модульный «Дача+»',
    area: '65 м²',
    floors: '1 этаж',
    bedrooms: '2 спальни',
    price: 'от 3 575 000 ₽',
    images: ['portfolio/modular-2/1.jpg','portfolio/modular-2/2.jpg','portfolio/modular-2/3.jpg','portfolio/modular-2/4.jpg','portfolio/modular-2/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80'
  },

  {
    id: 8,
    category: 'banya',
    name: 'Баня «Жар»',
    area: '35 м²',
    floors: '1 этаж',
    bedrooms: 'Ком. отдыха',
    price: 'от 1 400 000 ₽',
    images: ['portfolio/banya-1/1.jpg','portfolio/banya-1/2.jpg','portfolio/banya-1/3.jpg','portfolio/banya-1/4.jpg','portfolio/banya-1/5.jpg'],
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56c0c?w=600&q=80'
  },

  // ↓↓↓ ДОБАВЛЯЙТЕ НОВЫЕ ПРОЕКТЫ НИЖЕ ↓↓↓

];
