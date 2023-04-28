const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'product_db',
    password: 'root',
    port: 5432,
})
const getAllProducts = async () => {
    try {
      const { rows } = await pool.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const getProductById = async (id) => {
    try {
      const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
      return rows[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const getProductsByCategory = async (category) => {
    try {
      const { rows } = await pool.query('SELECT * FROM products WHERE category = $1', [category]);
      return rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const getPopularProducts = async () => {
    try {
      const { rows } = await pool.query(`
        SELECT p.*, COUNT(r.id) AS popularity
        FROM products p
        LEFT JOIN reviews r ON p.id = r.product_id
        GROUP BY p.id
        ORDER BY popularity DESC
        LIMIT 10
      `);
      return rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const searchProducts = async (query) => {
    try {
      const { rows } = await pool.query(`
        SELECT *
        FROM products
        WHERE name ILIKE '%' || $1 || '%' OR description ILIKE '%' || $1 || '%'
        ORDER BY name ASC
      `, [query]);
      return rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const addToCart = async (productId, quantity, userId) => {
    try {
      await pool.query('INSERT INTO cart (product_id, quantity, user_id) VALUES ($1, $2, $3)', [productId, quantity, userId]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getPopularProducts,
    searchProducts,
    addToCart,
  };