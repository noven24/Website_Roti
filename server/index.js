const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET all products
app.get('/api/products', async (req, res) => {
  const { data, error } = await supabase.from('products').select('*').order('id', { ascending: true });
  if (error) return res.status(500).json({ error: error.message });
  
  // Transform data a bit if needed (like parsing numbers)
  const products = data.map(p => ({
    ...p,
    price: Number(p.price),
    oldPrice: p.old_price ? Number(p.old_price) : null
  }));
  res.json(products);
});

// GET all promos/news
app.get('/api/promos', async (req, res) => {
  const { data, error } = await supabase.from('promos').select('*').order('id', { ascending: true });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
