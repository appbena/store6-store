import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">حميدة فاصوليا</h3>
            <p className="text-gray-300 mb-4">
              متجرك الإلكتروني الموثوق للحصول على أفضل المنتجات بأسعار تنافسية وجودة عالية
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">المنتجات</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمة العملاء</h4>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors">الشحن والتوصيل</a></li>
              <li><a href="/returns" className="text-gray-300 hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+218911234567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">hassan@sheikh-co.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-gray-300">سندوتشات</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 حميدة فاصوليا. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer