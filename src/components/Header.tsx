import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            حميدة فاصوليا
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              المنتجات
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              من نحن
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              اتصل بنا
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header