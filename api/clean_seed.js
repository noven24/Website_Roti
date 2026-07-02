require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const unwantedNames = [
  "Almond Pastry",
  "American Cheese Roll (isi 3 Pcs)",
  "Apple Pie",
  "Arem-arem (lontong)",
  "Banana Cake",
  "Choco Muffin",
  "Sosis Brood",
  "Cheese Tart"
];

async function clean() {
  console.log("Menghapus produk bawaan seed (Almond Pastry, dkk)...");
  const { error } = await supabase
    .from('products')
    .delete()
    .in('name', unwantedNames);
    
  if (error) {
    console.error("Gagal menghapus:", error);
  } else {
    console.log("Berhasil menghapus produk yang tidak perlu!");
  }
}

clean();
