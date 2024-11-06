import HomeFooter from "../Components/AdminDashboard/home/HomeFooter";
import HomeLayout from "../Components/AdminDashboard/home/HomeLayout";
import HomeNav from "../Components/AdminDashboard/home/HomeNav";

function Home() {
  return (
    <div className="w-[95%] text-white flex flex-col gap-4 mx-auto">
      <HomeNav />
      <HomeLayout />
      <HomeFooter />
    </div>
  );
}

export default Home;
