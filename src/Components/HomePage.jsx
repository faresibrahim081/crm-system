import React from 'react';
import img1 from '../assets/logo-09.png';
import img2 from '../assets/logo-02.png';
import img3 from '../assets/logo-06.png';
import img4 from '../assets/logo-04.png';
import img5 from '../assets/logo-10.png';




function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] p-4">
      {/* Navigation Bar */}
      

      {/* Main Section */}
      <main className="flex justify-between items-center mb-8">
        <div className="w-1/2 h-screen">
          <h1 className="text-4xl font-bold mb-4">قم بتحسين عملك بكفاءة باستخدام أقوى نظام CRM</h1>
          <p className="text-gray-500 mb-6">
            يساعد ZBOOMA CRM الشركات على تطوير الأعمال باستخدام التكنولوجيا والبيانات
            التي تجعل الأمر أسهل للمستخدمين.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full">جرب الآن</button>
            <button className="text-gray-500 font-medium">تجربة مجانية</button>
          </div>
          <p className="mt-2 text-gray-600">⭐️ 4.8 من 500 تقييم</p>
        </div>
        <div className="w-1/2">
          
        </div>
      </main>

      
   

      {/* Trusted By Section */}
      <footer className="mt-12 text-center text-gray-500">
      
<ul className="[direction:ltr] flex justify-center items-center gap-8 mt-4 list-none">
  <li className="font-semibold "> trusted by SA based</li>
  <li>
    <img src={img1} alt="Novo" className="h-15" />
  </li>
  <li>
    <img src={img2} alt="Telia Cygate" className="h-15" />
  </li>
  <li>
    <img src={img3} alt="Customer.io" className="h-15" />
  </li>
  <li>
    <img src={img4} alt="Fastmail" className="h-15" />
  </li>
  <li>
  <img src={img5} alt="Medtronic" className="h-15" />
  </li>
</ul>

      </footer>
    </div>
  );
}

export default HomePage;
