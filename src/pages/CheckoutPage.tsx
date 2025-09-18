import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">إتمام الطلب</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">معلومات التوصيل</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
              <input type="tel" className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">العنوان</label>
              <textarea className="w-full border rounded-lg px-3 py-2 rows-3"></textarea>
            </div>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-center text-gray-600">لا توجد منتجات في السلة</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage