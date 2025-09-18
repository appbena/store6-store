import React from 'react'

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">جميع المنتجات</h1>
      
      <div className="grid md:grid-cols-4 gap-6">
        {/* Sample products - will be replaced with real data */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4">
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">صورة المنتج</span>
            </div>
            <h3 className="font-semibold mb-2">منتج رقم {item}</h3>
            <p className="text-gray-600 text-sm mb-2">وصف قصير للمنتج</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-primary">{(item * 25 + 50)} د.ل</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                أضف للسلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage