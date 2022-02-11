import CardContainer from "../Common/CardContainer";
import CategoryBanner from "./CategoryBanner";
import TopWeeklyVendors from "./TopWeeklyVendors";
import { featuredDefault, newArrivalDefault } from "../../urls";

export default function MainHome() {
  return (
    <>
      <CardContainer url={featuredDefault} name={"Deals Of The Day"} />
      <CategoryBanner />
      <CardContainer
        url={newArrivalDefault}
        name={"New Arrivals"}
        isTimeline={false}
      />
      <TopWeeklyVendors />
    </>
  );
}
