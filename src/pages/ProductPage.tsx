import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
          <span className="text-gray-500">صورة المنتج {id}</span>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">منتج رقم {id}</h1>
          <p className="text-gray-600 mb-6">
            هذا وصف تفصيلي للمنتج يشمل جميع المواصفات والميزات المهمة التي يحتاج العميل لمعرفتها قبل الشراء.
          </p>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary">299 د.ل</span>
            <span className="text-gray-500 line-through mr-2">399 د.ل</span>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              أضف إلى السلة
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
              اشتر الآن
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">المواصفات:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• متوفر بألوان متعددة</li>
                <li>• ضمان سنة كاملة</li>
                <li>• شحن مجاني</li>
                <li>• إمكانية الإرجاع خلال 14 يوم</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage