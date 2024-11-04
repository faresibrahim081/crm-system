import HomeFooter from "../Components/home/HomeFooter";
import HomeLayout from "../Components/home/HomeLayout";
import HomeNav from "../Components/home/HomeNav";

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