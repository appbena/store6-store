import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Star, Shield, Truck, CreditCard } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-l from-primary to-blue-600 text-white py-20 overflow-hidden"
        style={{ backgroundColor: '#007bff' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              مرحباً بك في حميدة فاصوليا
            </h1>
            <p className="text-xl mb-8 opacity-90">
              اكتشف مجموعتنا الرائعة من المنتجات عالية الجودة بأسعار لا تُقاوم
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              تسوق الآن
              <ArrowLeft className="mr-2" size={20} />
            </Link>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            لماذا تختار حميدة فاصوليا؟
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                style={{ backgroundColor: '#007bff' }}
              >
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">شحن مجاني</h3>
              <p className="text-gray-600">توصيل مجاني للطلبات أكثر من 100 دينار</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                style={{ backgroundColor: '#007bff' }}
              >
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">دفع آمن</h3>
              <p className="text-gray-600">طرق دفع متعددة وآمنة لراحتك</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                style={{ backgroundColor: '#007bff' }}
              >
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ضمان الجودة</h3>
              <p className="text-gray-600">منتجات أصلية مع ضمان الاستبدال</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                style={{ backgroundColor: '#007bff' }}
              >
                <Star size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">خدمة متميزة</h3>
              <p className="text-gray-600">دعم العملاء على مدار 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            تسوق حسب الفئة
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'الإلكترونيات', image: '🔌', desc: 'أحدث الأجهزة التقنية' },
              { name: 'الأزياء', image: '👗', desc: 'ملابس عصرية وأنيقة' },
              { name: 'المنزل والمعيشة', image: '🏠', desc: 'كل ما تحتاجه لمنزلك' }
            ].map((category, index) => (
              <Link 
                key={index}
                to="/products"
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all p-8 text-center border hover:border-primary"
              >
                <div className="text-6xl mb-4">{category.image}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-white text-center"
        style={{ backgroundColor: '#007bff' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلة التسوق معنا اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            اشترك في نشرتنا الإخبارية واحصل على خصم 10% على أول طلب
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-r-lg border-0 focus:outline-none text-gray-900"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-l-lg font-semibold hover:bg-gray-100 transition-colors">
              اشتراك
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage