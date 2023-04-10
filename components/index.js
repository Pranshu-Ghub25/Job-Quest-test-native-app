import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import ScreenHeaderBtnMenu from "./common/header/ScreenHeaderBtnMenu";
import ScreenHeaderBtnShare from "./common/header/ScreenHeaderBtnShare";
// import Sidebar from "./home/sidebar/Sidebar";
// home screenimport
// import Sidebar from '../components/home/sidebar/Sidebar'
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import { default as SidebarComp } from './home/sidebar/Sidebar'
// import SidebarComp from './home/sidebar/Sidebar';
// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  ScreenHeaderBtn,
  ScreenHeaderBtnMenu,
  ScreenHeaderBtnShare,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  SidebarComp
};
