import DealsOfTheDay from "./DealsOfTheDay";
import CategoryBanner from "./CategoryBanner";
import NewArrivals from "./NewArrivals";
import TopWeeklyVendors from "./TopWeeklyVendors";

export default function MainHome() {
  return (
    <>
      <DealsOfTheDay />
      <CategoryBanner />
      <NewArrivals />
      <TopWeeklyVendors />
    </>
  );
}
