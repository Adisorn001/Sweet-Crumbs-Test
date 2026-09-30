// รูปภาพใช้ BASE_URL เพื่อให้ path ถูกต้องเมื่อ deploy บน GitHub Pages (base: './')
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const products = [
  {
    id: 1,
    name: 'ครัวซองต์คลาสสิก',
    nameEn: 'Classic Croissant',
    price: 85,
    description:
      'แป้งเนยสดกรอบนอกนุ่มใน อบสดใหม่ทุกเช้าด้วยเนยฝรั่งเศสชั้นเลิศ หอมกรุ่นไม่มีวันเบื่อ',
    image: img('croissant.jpg'),
    featured: true,
  },
  {
    id: 2,
    name: 'ช็อกโกแลต ลาวาเค้ก',
    nameEn: 'Chocolate Lava Cake',
    price: 150,
    description:
      'เค้กช็อกโกแลตเนื้อนุ่มซ่อนไส้ช็อกโกแลตร้อนละลายอยู่ภายใน โรยผงโกโก้หอมกรุ่น เสิร์ฟอุ่น ๆ',
    image: img('lava-cake.jpg'),
    featured: true,
  },
  {
    id: 3,
    name: 'สตรอว์เบอร์รีทาร์ต',
    nameEn: 'Strawberry Tart',
    price: 120,
    description:
      'สตรอว์เบอร์รีสดหวานอมเปรี้ยวเรียงบนคัสตาร์ดครีมเนียมนุ่มในเปลือกทาร์ตเนยทองกรอบ',
    image: img('strawberry-tart.jpg'),
    featured: true,
  },
  {
    id: 4,
    name: 'บลูเบอร์รีมัฟฟิน',
    nameEn: 'Blueberry Muffin',
    price: 65,
    description:
      'มัฟฟินโดมสูงเต็มไปด้วยบลูเบอร์รีสด หน้ากรุบกรอบด้วยสตรูเซลทองสวย',
    image: img('blueberry-muffin.jpg'),
    featured: false,
  },
  {
    id: 5,
    name: 'ซินนามอนโรล',
    nameEn: 'Cinnamon Roll',
    price: 95,
    description:
      'โรลนุ่มหอมอบอวลกลิ่นอบเชย ราดด้วยครีมชีสฟรอสติ้งเนียนหวาน ทำใหม่สดทุกวัน',
    image: img('cinnamon-roll.jpg'),
    featured: false,
  },
  {
    id: 6,
    name: 'ทิรามิสุ',
    nameEn: 'Tiramisu',
    price: 180,
    description:
      'เลดี้ฟิงเกอร์ชุ่มกาแฟเอสเปรสโซสลับครีมมาสคาร์โปเน่ เนียนละมุน โรยผงโกโก้เข้มข้น',
    image: img('tiramisu.jpg'),
    featured: false,
  },
];
