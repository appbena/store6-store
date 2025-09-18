import React from 'react'

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>
      
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          🛒
        </div>
        <h2 className="text-xl font-semibold mb-2">سلة التسوق فارغة</h2>
        <p className="text-gray-600 mb-6">ابدأ بإضافة منتجات إلى سلتك</p>
        <a href="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          تصفح المنتجات
        </a>
      </div>
    </div>
  )
}

export default CartPage