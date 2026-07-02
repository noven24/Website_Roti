require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const unwanted = ['traditional', 'cake', 'muffin', 'savory', 'pastry'];

async function cleanCategories() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error fetching:', error);
    return;
  }
  
  for (const p of data) {
    if (p.category) {
      let cats = p.category.split(',').map(c => c.trim()).filter(Boolean);
      let newCats = cats.filter(c => !unwanted.includes(c.toLowerCase()));
      
      // If it's the exact same, skip
      if (cats.length === newCats.length) continue;
      
      let newCategoryStr = newCats.join(',');
      
      const { error: updError } = await supabase
        .from('products')
        .update({ category: newCategoryStr })
        .eq('id', p.id);
        
      if (updError) {
        console.error(`Error updating product ${p.id}:`, updError);
      } else {
        console.log(`Updated product ${p.id}: ${p.category} -> ${newCategoryStr || '(empty)'}`);
      }
    }
  }
  console.log('Done cleaning categories!');
}

cleanCategories();
