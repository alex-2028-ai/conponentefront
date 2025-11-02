import './App.css'
import { Button } from './Button'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './contexts/CartContext'
import { useCart } from './contexts/CartContext'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Moda&Style</h1>
          <p className="hero-subtitle">Descubre las últimas tendencias en moda</p>
          <div className="hero-buttons">
            <Link to="/products" className="cta-button">Ver colección mujer</Link>
            <Link to="/products" className="cta-button secondary">Ver colección hombre</Link>
          </div>
        </div>
      </section>

      <section className="featured-categories">
        <h2>Categorías Destacadas</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Nueva Colección</h3>
            <Link to="/products" className="category-link">Explorar</Link>
          </div>
          <div className="category-card">
            <h3>Tendencias</h3>
            <Link to="/products" className="category-link">Descubrir</Link>
          </div>
          <div className="category-card">
            <h3>Ofertas</h3>
            <Link to="/products" className="category-link">Ver más</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <main style={{ padding: 12 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  )
}

function Header() {
  // use hook inside component so we can show badge
  const { totalCount } = useCart() || { totalCount: 0 }

  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo-text">Moda&Style</div>
      </div>

      <nav className="site-nav">
        <Link to="/">Inicio</Link>
        <Link to="/products">Mujer</Link>
        <Link to="/products">Hombre</Link>
      </nav>

      <div className="site-actions">
        <Link to="/login">Cuenta</Link>
        <Link to="/cart">Carrito <span className="cart-badge">{totalCount}</span></Link>
      </div>
    </header>
  )
}

export default App
