require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function fixImages() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return console.error(error);
  
  for (const p of data) {
    if (p.image && p.image.includes('/images/') && !p.image.includes('/images/public/')) {
      const newImage = p.image.replace('/images/', '/images/public/');
      await supabase.from('products').update({ image: newImage }).eq('id', p.id);
      console.log(`Fixed image URL for: ${p.name}`);
    }
  }
  console.log("Selesai memperbaiki gambar!");
}
fixImages();
