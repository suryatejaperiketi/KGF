import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "../Pages/Student";
import Agriculture from "../Pages/Agriculture";
import BusinessDashboard from "../Pages/BusinessDashboard.js";
import Others from "../Pages/Others";
import Events from "../Landing/Events";
import BloodDonateDashboard from "../Pages/BloodDonateDashboard.js";
import DEvents from "../Pages/DEvents";
import ViewJob from "../Pages/ViewJob";
import AdminDashboardHome from "./AdminDashboardHome";
import AdminEvents from "../Pages/AdminEvents";
import Telangana from "../Pages/Telangana";
import AndhraPradesh from "../Pages/AndhraPradesh";
import Gujarat from "../Pages/Gujarat";
import Karnataka from "../Pages/Karnataka";
import Nri from "../Pages/Nri";
import Organization from "../Pages/Organization";
import OutsideOfIndia from "../Pages/OutsideOfIndia";
import Organizations from "../Pages/Organizations";
import Tamilnadu from "../Pages/Tamilnadu";
import AndhraStudentTable from "../Pages/AndhraStudentTable";
import AdminStTbleView from "../Pages/AdminStTbleView";
import AdminAddEvents from "../Pages/AdminAddEvents";
import AdminEventsTable from "../Pages/AdminEventsTable";
import AdminEventPreview from "../Pages/AdminEventPreview";
import AdminDonations from "../Pages/AdminDonations";
import AdminDonorForm from "../Pages/AdminDonorForm";
import AdminJobs from "../Pages/AdminJobs";
import AdminJobsLists from "../Pages/AdminJobsLists";
import AndhraEmpTable from "../Pages/AndhraEmpTable";
import AndhraEmpTableView from "../Pages/AndhraEmpTableView";
import AndhraBusiTable from "../Pages/AndhraBusiTable";
import AndhraBusiTableView from "../Pages/AndhraBusiTableView";
import AndhraMedTable from "../Pages/AndhraMedTable";
import AndhraMedTableView from "../Pages/AndhraMedTableView";
import AndhraAdvoTable from "../Pages/AndhraAdvoTable";
import AndhraAdvoTableView from "../Pages/AndhraAdvoTableView";
import AndhraAgriTable from "../Pages/AndhraAgriTable";
import AndhraAgriTableView from "../Pages/AndhraAgriTableView";
import AndhraOthersTable from "../Pages/AndhraOthersTable";
import AndhraOtherTableView from "../Pages/AndhraOtherTableView";
import TelanganaStudentTable from "../Pages/TelanganaStudentTable";
import TelanganaStTableView from "../Pages/TelanganaStTableView";
import TelanEmpTable from "../Pages/TelanEmpTable";
import TelanEmpTableView from "../Pages/TelanEmpTableView";
import TelanBusiTable from "../Pages/TelanBusiTable";
import TelanBusiTableView from "../Pages/TelanBusiTableView";
import TgMedTable from "../Pages/TgMedTable";
import TgMedTableView from "../Pages/TgMedTableView";
import TgAdvoTable from "../Pages/TgAdvoTable";
import TgAdvoTableView from "../Pages/TgAdvoTableView";
import TgAgriTable from "../Pages/TgAgriTable";
import TgAgriTableView from "../Pages/TgAgriTableView";
import TgOthersTable from "../Pages/TgOthersTable";
import TgOtherTableView from "../Pages/TgOtherTableView";
import TnStudentTable from "../Pages/TnStudentTable";
import TnStTableView from "../Pages/TnStTableView";
import TnEmpTable from "../Pages/TnEmpTable";
import TnEmpTableView from "../Pages/TnEmpTableView";
import TnBusiTable from "../Pages/TnBusiTable";
import TnBusiTableView from "../Pages/TnBusiTableView";
import TnMedTable from "../Pages/TnMedTable";
import TnMedTableView from "../Pages/TnMedTableView";
import TnAdvoTable from "../Pages/TnAdvoTable";
import TnAdvoTableView from "../Pages/TnAdvoTableView";
import TnAgriTable from "../Pages/TnAgriTable";
import TnAgriTableView from "../Pages/TnAgriTableView";
import TnOthersTable from "../Pages/TnOthersTable";
import TnOtherTableView from "../Pages/TnOtherTableView";
import ApFlmIndustryTable from "../Pages/ApFlmIndustryTable";
import ApMediaTable from "../Pages/ApMediaTable";
import NRIStudentTable from "../Pages/NRIStudentTable";
import NRIStTableView from "../Pages/NRIStTableView";
import NriEmpTable from "../Pages/NriEmpTable";
import NriEmpTableView from "../Pages/NriEmpTableView";
import NriBusiTable from "../Pages/NriBusiTable";
import NriBusiTableView from "../Pages/NriBusiTableView";
import NriMedTable from "../Pages/NriMedTable";
import NriMedTableView from "../Pages/NriMedTableView";
import NriAdvoTable from "../Pages/NriAdvoTable";
import NriAdvoTableView from "../Pages/NriAdvoTableView";
import NriAgriTable from "../Pages/NriAgriTable";
import NriAgriTableView from "../Pages/NriAgriTableView";
import NriOthersTable from "../Pages/NriOthersTable";
import NriOthersTableView from "../Pages/NriOthersTableView";
import KaStudentTable from "../Pages/KaStudentTable";
import KaStTableView from "../Pages/KaStTableView";
import KaEmpTable from "../Pages/KaEmpTable";
import KaEmpTableView from "../Pages/KaEmpTableView";
import KaBusiTable from "../Pages/KaBusiTable";
import KaBusiTableView from "../Pages/KaBusiTableView";
import KaMedTable from "../Pages/KaMedTable";
import KaMedTableView from "../Pages/KaMedTableView";
import KaAdvoTable from "../Pages/KaAdvoTable";
import KaAdvoTableView from "../Pages/KaAdvoTableView";
import KaAgriTable from "../Pages/KaAgriTable";
import KaAgriTableView from "../Pages/KaAgriTableView";
import KaOthersTable from "../Pages/KaOthersTable";
import KaOthersTableView from "../Pages/KaOthersTableView";
import OrgStudentTable from "../Pages/OrgStudentTable";
import OrgStTableView from "../Pages/OrgStTableView";
import OrgEmpTable from "../Pages/OrgEmpTable";
import OrgEmpTableView from "../Pages/OrgEmpTableView";
import OrgBusiTable from "../Pages/OrgBusiTable";
import OrgBusiTableView from "../Pages/OrgBusiTableView";
import OrgMedTable from "../Pages/OrgMedTable";
import OrgMedTableView from "../Pages/OrgMedTableView";
import OrgAdvoTable from "../Pages/OrgAdvoTable";
import OrgAdvoTableView from "../Pages/OrgAdvoTableView";
import OrgAgriTable from "../Pages/OrgAgriTable";
import OrgAgriTableView from "../Pages/OrgAgriTableView";
import OrgOthersTable from "../Pages/OrgOthersTable";
import OrgOthersTableView from "../Pages/OrgOthersTableView";
import OsiStudentTable from "../Pages/OsiStudentTable";
import GujStudentTable from "../Pages/GujStudentTable";
import OrgsStudentTable from "../Pages/OrgsStudentTable";
import OsiStTableView from "../Pages/OsiStTableView";
import GujStTableView from "../Pages/GujStTableView";
import OrgsStTableView from "../Pages/OrgsStTableView";
import OsiEmpTable from "../Pages/OsiEmpTable";
import GujEmpTable from "../Pages/GujEmpTable";
import OrgsEmpTable from "../Pages/OrgsEmpTable";
import OsiEmpTableView from "../Pages/OsiEmpTableView";
import GujEmpTableView from "../Pages/GujEmpTableView";
import OrgsEmpTableView from "../Pages/OrgsEmpTableView";
import OsiBusiTable from "../Pages/OsiBusiTable";
import GujBusiTable from "../Pages/GujBusiTable";
import OrgsBusiTable from "../Pages/OrgsBusiTable";
import OsiBusiTableView from "../Pages/OsiBusiTableView";
import GujBusiTableView from "../Pages/GujBusiTableView";
import OrgsBusiTableView from "../Pages/OrgsBusiTableView";
import OsiMedTable from "../Pages/OsiMedTable";
import GujMedTable from "../Pages/GujMedTable";
import OrgsMedTable from "../Pages/OrgsMedTable";
import OsiMedTableView from "../Pages/OsiMedTableView";
import GujMedTableView from "../Pages/GujMedTableView";
import OrgsMedTableView from "../Pages/OrgsMedTableView";
import OsiAdvoTable from "../Pages/OsiAdvoTable";
import GujAdvoTable from "../Pages/GujAdvoTable";
import OrgsAdvoTable from "../Pages/OrgsAdvoTable";
import OsiAdvoTableView from "../Pages/OsiAdvoTableView";
import GujAdvoTableView from "../Pages/GujAdvoTableView";
import OrgsAdvoTableView from "../Pages/OrgsAdvoTableView";
import OsiAgriTable from "../Pages/OsiAgriTable";
import GujAgriTable from "../Pages/GujAgriTable";
import OrgsAgriTable from "../Pages/OrgsAgriTable";
import OsiAgriTableView from "../Pages/OsiAgriTableView";
import GujAgriTableView from "../Pages/GujAgriTableView";
import OrgsAgriTableView from "../Pages/OrgsAgriTableView";
import OsiOthersTable from "../Pages/OsiOthersTable";
import GujOthersTable from "../Pages/GujOthersTable";
import OrgsOthersTable from "../Pages/OrgsOthersTable";
import OsiOthersTableView from "../Pages/OsiOthersTableView";
import GujOthersTableView from "../Pages/GujOthersTableView";
import OrgsOthersTableView from "../Pages/OrgsOthersTableView";
import AdminJobPreview from "../Pages/AdminJobPreview.js";
import AdminDonorView from "../Pages/AdminDonorView.js";
import AdminBloodDonors from "../Pages/AdminBloodDonors.js"
import ApMediaTableView from "../Pages/ApMediaTableView";
import ApFlmIndustryView from "../Pages/ApFlmIndustryView";
import TgMediaTable from "../Pages/TgMediaTable";
import TnMediaTable from "../Pages/TgMediaTable";
import NriMediaTable from "../Pages/NriMediaTable";
import KaMediaTable from "../Pages/KaMediaTable";
import OrgMediaTable from "../Pages/OrgMediaTable";
import OsiMediaTable from "../Pages/OsiMediaTable";
import GujMediaTable from "../Pages/GujMediaTable";
import OrgsMediaTable from "../Pages/OrgsMediaTable";
import TgMediaTableView from "../Pages/TgMediaTableView";
import TnMediaTableView from "../Pages/TnMediaTableView";
import NriMediaTableView from "../Pages/NriMediaTableView";
import KaMediaTableView from "../Pages/KaMediaTableView";
import OrgMediaTableView from "../Pages/OrgMediaTableView";
import OsiMediaTableView from "../Pages/OsiMediaTableView";
import GujMediaTableView from "../Pages/GujMediaTableView";
import OrgsMediaTableView from "../Pages/OrgsMediaTableView";
import TgFlmIndustryTable from "../Pages/TgFlmIndustryTable";
import TnFlmIndustryTable from "../Pages/TnFlmIndustryTable";
import NriFlmIndustryTable from "../Pages/NriFlmIndustryTable";
import KaFlmIndustryTable from "../Pages/KaFlmIndustryTable";
import OrgFlmIndustryTable from "../Pages/OrgFlmIndustryTable";
import OsiFlmIndustryTable from "../Pages/OsiFlmIndustryTable";
import GujFlmIndustryTable from "../Pages/GujFlmIndustryTable";
import OrgsFlmIndustryTable from "../Pages/OrgsFlmIndustryTable";
import TgFlmIndustryView from "../Pages/TgFlmIndustryView";
import TnFlmIndustryView from "../Pages/TnFlmIndustryView";
import NriFlmIndustryView from "../Pages/NriFlmIndustryView";
import KaFlmIndustryView from "../Pages/KaFlmIndustryView";
import OrgFlmIndustryView from "../Pages/OrgFlmIndustryView";
import OsiFlmIndustryView from "../Pages/OsiFlmIndustryView";
import GujFlmIndustryView from "../Pages/GujFlmIndustryView";
import OrgsFlmIndustryView from "../Pages/OrgsFlmIndustryView";
import AdminBloodDonorsDetails from "../Pages/AdminBloodDonorsDetails.js";
import AdminBoardMembers from "../Pages/AdminBoardMembers";
import AdminBoardMemForm from "../Pages/AdminBoardMemForm";
import CollegesSchools from "../Pages/CollegesSchools";
import AddSclForm from "../Pages/AddSclForm.js";
import AddClgForm from "../Pages/AddClgForm";
import Hospitals from "../Pages/Hospitals";
import AddHospForm from "../Pages/AddHospForm";

function AdminDashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboardHome />} />
      <Route path="/admindashboardhome" element={<AdminDashboardHome />} />
      <Route path="/events" element={<AdminEvents />} />
      <Route path="/jobs" element={<AdminJobs />} />
      <Route path="/adminjobslists" element={<AdminJobsLists />} />
      <Route path="/adminjobslists/adminjobpreview" element={<AdminJobPreview />} />
      <Route path="/telangana" element={<Telangana/>} />
      <Route path="/andhra-pradesh" element={<AndhraPradesh/>} />
      <Route path="/gujarat" element={<Gujarat/>} />
       <Route path="/karnataka" element={<Karnataka/>} />
       <Route path="/nri" element={<Nri/>} />
       <Route path="/organization" element={<Organization/>} />
       <Route path="/outside-of-india" element={<OutsideOfIndia/>} />
       <Route path="/organizations" element={<Organizations/>} />
       <Route path="/tamil-nadu" element={<Tamilnadu/>} />
       <Route path="/andhra-student-table" element={<AndhraStudentTable/>} />
       <Route path="/telangana-student-table" element={<TelanganaStudentTable/>} />
       <Route path="/tn-student-table" element={<TnStudentTable/>} />
       <Route path="/nri-student-table" element={<NRIStudentTable/>} />
       <Route path="/ka-student-table" element={<KaStudentTable/>} />
       <Route path="/org-student-table" element={<OrgStudentTable/>} />
       <Route path="/osi-student-table" element={<OsiStudentTable/>} />
       <Route path="/guj-student-table" element={<GujStudentTable/>} />
       <Route path="/orgs-student-table" element={<OrgsStudentTable/>} />
       <Route path="/AdminStTbleView" element={<AdminStTbleView/>}/>
        <Route path="/adminAddEvents" element = {<AdminAddEvents  />} />
        <Route path="/adminEventsTable" element = {<AdminEventsTable />} />
        <Route path="/adminEventsPreview" element = {<AdminEventPreview />} />
        <Route path="/donations" element ={<AdminDonations />} />
        <Route path="/addDonor" element ={<AdminDonorForm />} />
        <Route path="/donorview" element ={<AdminDonorView />} />
        <Route path="/blood-donors" element ={<AdminBloodDonors />} />
        <Route path="/blooddonorsdetails" element ={<AdminBloodDonorsDetails />} />
       <Route path="/telangana-st-table-view" element={<TelanganaStTableView/>} />
       <Route path="/tn-st-table-view" element={<TnStTableView/>} />
       <Route path="/nri-st-table-view" element={<NRIStTableView/>} />
       <Route path="/ka-st-table-view" element={<KaStTableView/>} />
       <Route path="/org-st-table-view" element={<OrgStTableView/>} />
       <Route path="/osi-st-table-view" element={<OsiStTableView/>} />
       <Route path="/guj-st-table-view" element={<GujStTableView/>} />
       <Route path="/orgs-st-table-view" element={<OrgsStTableView/>} />
       <Route path="/andhra-emp-table" element={<AndhraEmpTable/>}/>
       <Route path="/telan-emp-table" element={<TelanEmpTable/>}/>
       <Route path="/tn-emp-table" element={<TnEmpTable/>}/>
       <Route path="/nri-emp-table" element={<NriEmpTable/>}/>
       <Route path="/ka-emp-table" element={<KaEmpTable/>}/>
       <Route path="/org-emp-table" element={<OrgEmpTable/>}/>
       <Route path="/osi-emp-table" element={<OsiEmpTable/>}/>
       <Route path="/guj-emp-table" element={<GujEmpTable/>}/>
       <Route path="/orgs-emp-table" element={<OrgsEmpTable/>}/>
       <Route path="/andhra-emp-table-view" element={<AndhraEmpTableView/>}/>
       <Route path="/telan-emp-table-view" element={<TelanEmpTableView/>}/>
       <Route path="/tn-emp-table-view" element={<TnEmpTableView/>}/>
       <Route path="/nri-emp-table-view" element={<NriEmpTableView/>}/>
       <Route path="/ka-emp-table-view" element={<KaEmpTableView/>}/>
       <Route path="/org-emp-table-view" element={<OrgEmpTableView/>}/>
       <Route path="/osi-emp-table-view" element={<OsiEmpTableView/>}/>
       <Route path="/guj-emp-table-view" element={<GujEmpTableView/>}/>
       <Route path="/orgs-emp-table-view" element={<OrgsEmpTableView/>}/>
       <Route path="/andhra-busi-table" element={<AndhraBusiTable/>}/>
       <Route path="/telan-busi-table" element={<TelanBusiTable/>}/>
       <Route path="/tn-busi-table" element={<TnBusiTable/>}/>
       <Route path="/nri-busi-table" element={<NriBusiTable/>}/>
       <Route path="/ka-busi-table" element={<KaBusiTable/>}/>
       <Route path="/org-busi-table" element={<OrgBusiTable/>}/>
       <Route path="/osi-busi-table" element={<OsiBusiTable/>}/>
       <Route path="/guj-busi-table" element={<GujBusiTable/>}/>
       <Route path="/orgs-busi-table" element={<OrgsBusiTable/>}/>
       <Route path="/andhra-busi-table-view" element={<AndhraBusiTableView/>}/>
       <Route path="/telan-busi-table-view" element={<TelanBusiTableView/>}/>
       <Route path="/tn-busi-table-view" element={<TnBusiTableView/>}/>
       <Route path="/nri-busi-table-view" element={<NriBusiTableView/>}/>
       <Route path="/ka-busi-table-view" element={<KaBusiTableView/>}/>
       <Route path="/org-busi-table-view" element={<OrgBusiTableView/>}/>
       <Route path="/osi-busi-table-view" element={<OsiBusiTableView/>}/>
       <Route path="/guj-busi-table-view" element={<GujBusiTableView/>}/>
       <Route path="/orgs-busi-table-view" element={<OrgsBusiTableView/>}/>
       <Route path="/andhra-med-table" element={<AndhraMedTable/>}/>
       <Route path="/tg-med-table" element={<TgMedTable/>}/>
       <Route path="/tn-med-table" element={<TnMedTable/>}/>
       <Route path="/nri-med-table" element={<NriMedTable/>}/>
       <Route path="/ka-med-table" element={<KaMedTable/>}/>
       <Route path="/org-med-table" element={<OrgMedTable/>}/>
       <Route path="/osi-med-table" element={<OsiMedTable/>}/>
       <Route path="/guj-med-table" element={<GujMedTable/>}/>
       <Route path="/orgs-med-table" element={<OrgsMedTable/>}/>
       <Route path="/andhra-med-table-view" element={<AndhraMedTableView/>}/>
       <Route path="/tg-med-table-view" element={<TgMedTableView/>}/>
       <Route path="/tn-med-table-view" element={<TnMedTableView/>}/>
       <Route path="/nri-med-table-view" element={<NriMedTableView/>}/>
       <Route path="/ka-med-table-view" element={<KaMedTableView/>}/>
       <Route path="/org-med-table-view" element={<OrgMedTableView/>}/>
       <Route path="/osi-med-table-view" element={<OsiMedTableView/>}/>
       <Route path="/guj-med-table-view" element={<GujMedTableView/>}/>
       <Route path="/orgs-med-table-view" element={<OrgsMedTableView/>}/>
       <Route path="/andhra-advo-table" element={<AndhraAdvoTable/>}/>
       <Route path="/tg-advo-table" element={<TgAdvoTable/>}/>
       <Route path="/tn-advo-table" element={<TnAdvoTable/>}/>
       <Route path="/ka-advo-table" element={<KaAdvoTable/>}/>
       <Route path="/ap-media-table" element={<ApMediaTable/>}/>
       <Route path="/tg-media-table" element={<TgMediaTable/>}/>
       <Route path="/tn-media-table" element={<TnMediaTable/>}/>
       <Route path="/nri-media-table" element={<NriMediaTable/>}/>
       <Route path="/ka-media-table" element={<KaMediaTable/>}/>
       <Route path="/org-media-table" element={<OrgMediaTable/>}/>
       <Route path="/osi-media-table" element={<OsiMediaTable/>}/>
       <Route path="/guj-media-table" element={<GujMediaTable/>}/>
       <Route path="/orgs-media-table" element={<OrgsMediaTable/>}/>
       <Route path="/ap-media-table-view" element={<ApMediaTableView/>}/>
       <Route path="/tg-media-table-view" element={<TgMediaTableView/>}/>
       <Route path="/tn-media-table-view" element={<TnMediaTableView/>}/>
       <Route path="/nri-media-table-view" element={<NriMediaTableView/>}/>
       <Route path="/ka-media-table-view" element={<KaMediaTableView/>}/>
       <Route path="/org-media-table-view" element={<OrgMediaTableView/>}/>
       <Route path="/osi-media-table-view" element={<OsiMediaTableView/>}/>
       <Route path="/guj-media-table-view" element={<GujMediaTableView/>}/>
       <Route path="/orgs-media-table-view" element={<OrgsMediaTableView/>}/>
       <Route path="/ap-flm-industry-table" element={<ApFlmIndustryTable/>}/>
       <Route path="/tg-flm-industry-table" element={<TgFlmIndustryTable/>}/>
       <Route path="/tn-flm-industry-table" element={<TnFlmIndustryTable/>}/>
       <Route path="/nri-flm-industry-table" element={<NriFlmIndustryTable/>}/>
       <Route path="/ka-flm-industry-table" element={<KaFlmIndustryTable/>}/>
       <Route path="/org-flm-industry-table" element={<OrgFlmIndustryTable/>}/>
       <Route path="/osi-flm-industry-table" element={<OsiFlmIndustryTable/>}/>
       <Route path="/guj-flm-industry-table" element={<GujFlmIndustryTable/>}/>
       <Route path="/orgs-flm-industry-table" element={<OrgsFlmIndustryTable/>}/>
       <Route path="/ap-flm-industry-view" element={<ApFlmIndustryView/>}/>
       <Route path="/tg-flm-industry-view" element={<TgFlmIndustryView/>}/>
       <Route path="/tn-flm-industry-view" element={<TnFlmIndustryView/>}/>
       <Route path="/nri-flm-industry-view" element={<NriFlmIndustryView/>}/>
       <Route path="/ka-flm-industry-view" element={<KaFlmIndustryView/>}/>
       <Route path="/org-flm-industry-view" element={<OrgFlmIndustryView/>}/>
       <Route path="/osi-flm-industry-view" element={<OsiFlmIndustryView/>}/>
       <Route path="/guj-flm-industry-view" element={<GujFlmIndustryView/>}/>
       <Route path="/orgs-flm-industry-view" element={<OrgsFlmIndustryView/>}/>
       <Route path="/nri-advo-table" element={<NriAdvoTable/>}/>
       <Route path="/org-advo-table" element={<OrgAdvoTable/>}/>
       <Route path="/osi-advo-table" element={<OsiAdvoTable/>}/>
       <Route path="/guj-advo-table" element={<GujAdvoTable/>}/>
       <Route path="/orgs-advo-table" element={<OrgsAdvoTable/>}/>
       <Route path="/andhra-advo-table-view" element={<AndhraAdvoTableView/>}/>
       <Route path="/tg-advo-table-view" element={<TgAdvoTableView/>}/>
       <Route path="/tn-advo-table-view" element={<TnAdvoTableView/>}/>
       <Route path="/nri-advo-table-view" element={<NriAdvoTableView/>}/>
       <Route path="/ka-advo-table-view" element={<KaAdvoTableView/>}/>
       <Route path="/org-advo-table-view" element={<OrgAdvoTableView/>}/>
       <Route path="/osi-advo-table-view" element={<OsiAdvoTableView/>}/>
       <Route path="/guj-advo-table-view" element={<GujAdvoTableView/>}/>
       <Route path="/orgs-advo-table-view" element={<OrgsAdvoTableView/>}/>
       <Route path="/andhra-agri-table" element={<AndhraAgriTable/>}/>
       <Route path="/tg-agri-table" element={<TgAgriTable/>}/>
       <Route path="/tn-agri-table" element={<TnAgriTable/>}/>
       <Route path="/nri-agri-table" element={<NriAgriTable/>}/>
       <Route path="/ka-agri-table" element={<KaAgriTable/>}/>
       <Route path="/org-agri-table" element={<OrgAgriTable/>}/>
       <Route path="/osi-agri-table" element={<OsiAgriTable/>}/>
       <Route path="/guj-agri-table" element={<GujAgriTable/>}/>
       <Route path="/orgs-agri-table" element={<OrgsAgriTable/>}/>
       <Route path="/andhra-agri-table-view" element={<AndhraAgriTableView/>}/>
       <Route path="/tg-agri-table-view" element={<TgAgriTableView/>}/>
       <Route path="/tn-agri-table-view" element={<TnAgriTableView/>}/>
       <Route path="/nri-agri-table-view" element={<NriAgriTableView/>}/>
       <Route path="/ka-agri-table-view" element={<KaAgriTableView/>}/>
       <Route path="/org-agri-table-view" element={<OrgAgriTableView/>}/>
       <Route path="/osi-agri-table-view" element={<OsiAgriTableView/>}/>
       <Route path="/guj-agri-table-view" element={<GujAgriTableView/>}/>
       <Route path="/orgs-agri-table-view" element={<OrgsAgriTableView/>}/>
       <Route path="/andhra-others-table" element={<AndhraOthersTable/>}/>
       <Route path="/tg-others-table" element={<TgOthersTable/>}/>
       <Route path="/tn-others-table" element={<TnOthersTable/>}/>
       <Route path="/nri-others-table" element={<NriOthersTable/>}/>
       <Route path="/ka-others-table" element={<KaOthersTable/>}/>
       <Route path="/org-others-table" element={<OrgOthersTable/>}/>
       <Route path="/osi-others-table" element={<OsiOthersTable/>}/>
       <Route path="/guj-others-table" element={<GujOthersTable/>}/>
       <Route path="/orgs-others-table" element={<OrgsOthersTable/>}/>
       <Route path="/andhra-others-table-view" element={<AndhraOtherTableView/>}/>
       <Route path="/tg-others-table-view" element={<TgOtherTableView/>}/>
       <Route path="/tn-others-table-view" element={<TnOtherTableView/>}/>
       <Route path="/nri-other-table-view" element={<NriOthersTableView/>}/>
       <Route path="/ka-other-table-view" element={<KaOthersTableView/>}/>
       <Route path="/org-other-table-view" element={<OrgOthersTableView/>}/>
       <Route path="/osi-other-table-view" element={<OsiOthersTableView/>}/>
       <Route path="/guj-other-table-view" element={<GujOthersTableView/>}/>
       <Route path="/orgs-other-table-view" element={<OrgsOthersTableView/>}/>
      <Route path="/adminjobslists/adminjobpreview" element={<AdminJobPreview />}/>
      <Route path="/telangana" element={<Telangana/>} />
      <Route path="/andhra-pradesh" element={<AndhraPradesh/>} />
      <Route path="/gujarat" element={<Gujarat/>} />
      <Route path="/karnataka" element={<Karnataka />} />
      <Route path="/nri" element={<Nri/>} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/outside-of-india" element={<OutsideOfIndia/>} />
      <Route path="/organizations" element={<Organizations/>} />
      <Route path="/tamil-nadu" element={<Tamilnadu/>} />
      <Route path="/andhra-student-table" element={<AndhraStudentTable/>} />
      <Route path="/telangana-student-table" element={<TelanganaStudentTable/>}/>
      <Route path="/tn-student-table" element={<TnStudentTable/>} />
      <Route path="/nri-student-table" element={<NRIStudentTable/>} />
      <Route path="/ka-student-table" element={<KaStudentTable/>} />
      <Route path="/org-student-table" element={<OrgStudentTable/>} />
      <Route path="/osi-student-table" element={<OsiStudentTable/>} />
      <Route path="/guj-student-table" element={<GujStudentTable/>} />
      <Route path="/orgs-student-table" element={<OrgsStudentTable/>} />
      <Route path="/AdminStTbleView" element={<AdminStTbleView/>} />
      <Route path="/adminAddEvents" element={<AdminAddEvents/>} />
      <Route path="/adminEventsTable" element={<AdminEventsTable/>} />
      <Route path="/adminEventsPreview" element={<AdminEventPreview/>} />
      <Route path="/donations" element={<AdminDonations/>} />
      <Route path="/addDonor" element={<AdminDonorForm/>} />
      <Route path="/board-members" element={<AdminBoardMembers/>}/>
      <Route path="/addmember" element={<AdminBoardMemForm/>} />
      <Route path="/telangana-st-table-view" element={<TelanganaStTableView/>}/>
      <Route path="/tn-st-table-view" element={<TnStTableView/>} />
      <Route path="/nri-st-table-view" element={<NRIStTableView/>} />
      <Route path="/ka-st-table-view" element={<KaStTableView/>} />
      <Route path="/org-st-table-view" element={<OrgStTableView />} />
      <Route path="/osi-st-table-view" element={<OsiStTableView />} />
      <Route path="/guj-st-table-view" element={<GujStTableView />} />
      <Route path="/orgs-st-table-view" element={<OrgsStTableView />} />
      <Route path="/andhra-emp-table" element={<AndhraEmpTable />} />
      <Route path="/telan-emp-table" element={<TelanEmpTable />} />
      <Route path="/tn-emp-table" element={<TnEmpTable />} />
      <Route path="/nri-emp-table" element={<NriEmpTable />} />
      <Route path="/ka-emp-table" element={<KaEmpTable />} />
      <Route path="/org-emp-table" element={<OrgEmpTable />} />
      <Route path="/osi-emp-table" element={<OsiEmpTable />} />
      <Route path="/guj-emp-table" element={<GujEmpTable />} />
      <Route path="/orgs-emp-table" element={<OrgsEmpTable />} />
      <Route path="/andhra-emp-table-view" element={<AndhraEmpTableView />} />
      <Route path="/telan-emp-table-view" element={<TelanEmpTableView />} />
      <Route path="/tn-emp-table-view" element={<TnEmpTableView />} />
      <Route path="/nri-emp-table-view" element={<NriEmpTableView />} />
      <Route path="/ka-emp-table-view" element={<KaEmpTableView />} />
      <Route path="/org-emp-table-view" element={<OrgEmpTableView />} />
      <Route path="/osi-emp-table-view" element={<OsiEmpTableView />} />
      <Route path="/guj-emp-table-view" element={<GujEmpTableView />} />
      <Route path="/orgs-emp-table-view" element={<OrgsEmpTableView />} />
      <Route path="/andhra-busi-table" element={<AndhraBusiTable />} />
      <Route path="/telan-busi-table" element={<TelanBusiTable />} />
      <Route path="/tn-busi-table" element={<TnBusiTable />} />
      <Route path="/nri-busi-table" element={<NriBusiTable />} />
      <Route path="/ka-busi-table" element={<KaBusiTable />} />
      <Route path="/org-busi-table" element={<OrgBusiTable />} />
      <Route path="/osi-busi-table" element={<OsiBusiTable/>} />
      <Route path="/guj-busi-table" element={<GujBusiTable />} />
      <Route path="/orgs-busi-table" element={<OrgsBusiTable />} />
      <Route path="/andhra-busi-table-view" element={<AndhraBusiTableView />} />
      <Route path="/telan-busi-table-view" element={<TelanBusiTableView />} />
      <Route path="/tn-busi-table-view" element={<TnBusiTableView />} />
      <Route path="/nri-busi-table-view" element={<NriBusiTableView />} />
      <Route path="/ka-busi-table-view" element={<KaBusiTableView />} />
      <Route path="/org-busi-table-view" element={<OrgBusiTableView />} />
      <Route path="/osi-busi-table-view" element={<OsiBusiTableView />} />
      <Route path="/guj-busi-table-view" element={<GujBusiTableView />} />
      <Route path="/orgs-busi-table-view" element={<OrgsBusiTableView />} />
      <Route path="/andhra-med-table" element={<AndhraMedTable />} />
      <Route path="/tg-med-table" element={<TgMedTable />} />
      <Route path="/tn-med-table" element={<TnMedTable />} />
      <Route path="/nri-med-table" element={<NriMedTable />} />
      <Route path="/ka-med-table" element={<KaMedTable />} />
      <Route path="/org-med-table" element={<OrgMedTable />} />
      <Route path="/osi-med-table" element={<OsiMedTable />} />
      <Route path="/guj-med-table" element={<GujMedTable />} />
      <Route path="/orgs-med-table" element={<OrgsMedTable />} />
      <Route path="/andhra-med-table-view" element={<AndhraMedTableView />} />
      <Route path="/tg-med-table-view" element={<TgMedTableView />} />
      <Route path="/tn-med-table-view" element={<TnMedTableView />} />
      <Route path="/nri-med-table-view" element={<NriMedTableView />} />
      <Route path="/ka-med-table-view" element={<KaMedTableView />} />
      <Route path="/org-med-table-view" element={<OrgMedTableView />} />
      <Route path="/osi-med-table-view" element={<OsiMedTableView />} />
      <Route path="/guj-med-table-view" element={<GujMedTableView />} />
      <Route path="/orgs-med-table-view" element={<OrgsMedTableView />} />
      <Route path="/andhra-advo-table" element={<AndhraAdvoTable />} />
      <Route path="/tg-advo-table" element={<TgAdvoTable />} />
      <Route path="/tn-advo-table" element={<TnAdvoTable />} />
      <Route path="/ka-advo-table" element={<KaAdvoTable />} />
      <Route path="/ap-media-table" element={<ApMediaTable />} />
      <Route path="/tg-media-table" element={<TgMediaTable />} />
      <Route path="/tn-media-table" element={<TnMediaTable />} />
      <Route path="/nri-media-table" element={<NriMediaTable />} />
      <Route path="/ka-media-table" element={<KaMediaTable />} />
      <Route path="/org-media-table" element={<OrgMediaTable />} />
      <Route path="/osi-media-table" element={<OsiMediaTable />} />
      <Route path="/guj-media-table" element={<GujMediaTable />} />
      <Route path="/orgs-media-table" element={<OrgsMediaTable />} />
      <Route path="/ap-media-table-view" element={<ApMediaTableView />} />
      <Route path="/tg-media-table-view" element={<TgMediaTableView />} />
      <Route path="/tn-media-table-view" element={<TnMediaTableView />} />
      <Route path="/nri-media-table-view" element={<NriMediaTableView />} />
      <Route path="/ka-media-table-view" element={<KaMediaTableView />} />
      <Route path="/org-media-table-view" element={<OrgMediaTableView />} />
      <Route path="/osi-media-table-view" element={<OsiMediaTableView />} />
      <Route path="/guj-media-table-view" element={<GujMediaTableView />} />
      <Route path="/orgs-media-table-view" element={<OrgsMediaTableView />} />
      <Route path="/ap-flm-industry-table" element={<ApFlmIndustryTable />} />
      <Route path="/tg-flm-industry-table" element={<TgFlmIndustryTable />} />
      <Route path="/tn-flm-industry-table" element={<TnFlmIndustryTable />} />
      <Route path="/nri-flm-industry-table" element={<NriFlmIndustryTable />} />
      <Route path="/ka-flm-industry-table" element={<KaFlmIndustryTable />} />
      <Route path="/org-flm-industry-table" element={<OrgFlmIndustryTable />} />
      <Route path="/osi-flm-industry-table" element={<OsiFlmIndustryTable />} />
      <Route path="/guj-flm-industry-table" element={<GujFlmIndustryTable />} />
      <Route path="/orgs-flm-industry-table" element={<OrgsFlmIndustryTable />}/>
      <Route path="/ap-flm-industry-view" element={<ApFlmIndustryView />} />
      <Route path="/tg-flm-industry-view" element={<TgFlmIndustryView />} />
      <Route path="/tn-flm-industry-view" element={<TnFlmIndustryView />} />
      <Route path="/nri-flm-industry-view" element={<NriFlmIndustryView />} />
      <Route path="/ka-flm-industry-view" element={<KaFlmIndustryView />} />
      <Route path="/org-flm-industry-view" element={<OrgFlmIndustryView />} />
      <Route path="/osi-flm-industry-view" element={<OsiFlmIndustryView />} />
      <Route path="/guj-flm-industry-view" element={<GujFlmIndustryView />} />
      <Route path="/orgs-flm-industry-view" element={<OrgsFlmIndustryView />} />
      <Route path="/nri-advo-table" element={<NriAdvoTable />} />
      <Route path="/org-advo-table" element={<OrgAdvoTable />} />
      <Route path="/osi-advo-table" element={<OsiAdvoTable />} />
      <Route path="/guj-advo-table" element={<GujAdvoTable />} />
      <Route path="/orgs-advo-table" element={<OrgsAdvoTable />} />
      <Route path="/andhra-advo-table-view" element={<AndhraAdvoTableView />} />
      <Route path="/tg-advo-table-view" element={<TgAdvoTableView />} />
      <Route path="/tn-advo-table-view" element={<TnAdvoTableView />} />
      <Route path="/nri-advo-table-view" element={<NriAdvoTableView />} />
      <Route path="/ka-advo-table-view" element={<KaAdvoTableView />} />
      <Route path="/org-advo-table-view" element={<OrgAdvoTableView />} />
      <Route path="/osi-advo-table-view" element={<OsiAdvoTableView />} />
      <Route path="/guj-advo-table-view" element={<GujAdvoTableView />} />
      <Route path="/orgs-advo-table-view" element={<OrgsAdvoTableView />} />
      <Route path="/andhra-agri-table" element={<AndhraAgriTable />} />
      <Route path="/tg-agri-table" element={<TgAgriTable />} />
      <Route path="/tn-agri-table" element={<TnAgriTable />} />
      <Route path="/nri-agri-table" element={<NriAgriTable />} />
      <Route path="/ka-agri-table" element={<KaAgriTable />} />
      <Route path="/org-agri-table" element={<OrgAgriTable />} />
      <Route path="/osi-agri-table" element={<OsiAgriTable />} />
      <Route path="/guj-agri-table" element={<GujAgriTable />} />
      <Route path="/orgs-agri-table" element={<OrgsAgriTable />} />
      <Route path="/andhra-agri-table-view" element={<AndhraAgriTableView />} />
      <Route path="/tg-agri-table-view" element={<TgAgriTableView />} />
      <Route path="/tn-agri-table-view" element={<TnAgriTableView />} />
      <Route path="/nri-agri-table-view" element={<NriAgriTableView />} />
      <Route path="/ka-agri-table-view" element={<KaAgriTableView />} />
      <Route path="/org-agri-table-view" element={<OrgAgriTableView />} />
      <Route path="/osi-agri-table-view" element={<OsiAgriTableView />} />
      <Route path="/guj-agri-table-view" element={<GujAgriTableView />} />
      <Route path="/orgs-agri-table-view" element={<OrgsAgriTableView />} />
      <Route path="/andhra-others-table" element={<AndhraOthersTable />} />
      <Route path="/tg-others-table" element={<TgOthersTable />} />
      <Route path="/tn-others-table" element={<TnOthersTable />} />
      <Route path="/nri-others-table" element={<NriOthersTable />} />
      <Route path="/ka-others-table" element={<KaOthersTable />} />
      <Route path="/org-others-table" element={<OrgOthersTable />} />
      <Route path="/osi-others-table" element={<OsiOthersTable />} />
      <Route path="/guj-others-table" element={<GujOthersTable />} />
      <Route path="/orgs-others-table" element={<OrgsOthersTable />} />
      <Route path="/andhra-others-table-view" element={<AndhraOtherTableView />}/>
      <Route path="/tg-others-table-view" element={<TgOtherTableView />} />
      <Route path="/tn-others-table-view" element={<TnOtherTableView />} />
      <Route path="/nri-other-table-view" element={<NriOthersTableView />} />
      <Route path="/ka-other-table-view" element={<KaOthersTableView />} />
      <Route path="/org-other-table-view" element={<OrgOthersTableView />} />
      <Route path="/osi-other-table-view" element={<OsiOthersTableView />} />
      <Route path="/guj-other-table-view" element={<GujOthersTableView />} />
      <Route path="/orgs-other-table-view" element={<OrgsOthersTableView />} />
      <Route path="/collegesschools" element={<CollegesSchools/>} />
      <Route path="/addsclform" element={<AddSclForm/>} />
      <Route path="/addclgform" element={<AddClgForm/>} />
      <Route path="/collegesschools" element={<CollegesSchools/>} />
      <Route path="/hospitals" element={<Hospitals/>} />
      <Route path="/addhosform" element={<AddHospForm/>} />

    </Routes>
  );
}

export default AdminDashboardRoutes;
