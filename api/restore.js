require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const restoredProducts = [
  { name: "Roti Pisang Coklat", price: 12000, old_price: 13200, category: "pastry", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669130776-9x2ghp.jpeg" },
  { name: "Roti Coklat Keju", price: 7000, old_price: null, category: "roti_manis", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669226054-541ffm.jpeg" },
  { name: "Roti Abon", price: 6000, old_price: null, category: "pastry,roti_gurih", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782659981378-tszsjk.jpeg" },
  { name: "Roti Pizza Gulung", price: 5000, old_price: 10000, category: "traditional,roti_gurih", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669130776-9x2ghp.jpeg" },
  { name: "Roti Kopi", price: 5000, old_price: 48000, category: "cake,roti_manis", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669114685-7xt9b.jpeg" },
  { name: "Roti Pizza", price: 5000, old_price: 13000, category: "muffin,roti_gurih", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669146864-1y24o8.jpeg" },
  { name: "Roti Semir", price: 5000, old_price: 16500, category: "savory,roti_manis", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669173147-yk2gb.jpeg" },
  { name: "Roti Bolen Pisang", price: 45000, old_price: 24500, category: "pastry,best_seller,roti_manis", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782669192387-7nyba.jpeg" },
  { name: "Roti Floss Rolls", price: 10000, old_price: null, category: "roti_gurih", image: "https://ukcfuistizzklafqjwcs.supabase.co/storage/v1/object/public/images/1782975842237-r2ncew.jpeg" }
];

async function restore() {
  console.log("Menghapus produk saat ini yang salah...");
  await supabase.from('products').delete().neq('id', 0);
  
  console.log("Mengembalikan produk asli...");
  const { error } = await supabase.from('products').insert(restoredProducts);
  
  if (error) {
    console.error("Gagal restore:", error);
  } else {
    console.log("Berhasil mengembalikan produk seperti semula!");
  }
}

restore();
