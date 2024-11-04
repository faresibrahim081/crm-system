import bg from "../assets/image 1.png"

function Nav() {
  return (
    <header className="bg-white">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-7">
      <button className="bg-white text-black py-2 px-5 rounded-full">
 سجل دخول
</button>  

      <button className="bg-emerald-300 hover:bg-green-700 text-black  py-2 px-5 rounded-full">
 مستخدم جديد
</button>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       <img src ={bg}/>
      </div>
    </nav>
   
 
  </header>
  )
}

export default Nav