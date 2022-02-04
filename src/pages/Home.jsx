import CustomerSupport from "../components/CustomerSupport";
import IntroSlider from "../components/Home/IntroSlider";
import MainHome from "../components/Home/MainHome";

export default function Home() {
  return (
    <main className="main">
      <IntroSlider />
      <div className="container">
        <CustomerSupport />
        <MainHome />
      </div>
    </main>
  );
}
