import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calendarClearOutline,
  calendarOutline,
  camera,
  ellipse,
  home,
  logOutOutline,
  personOutline,
  settingsOutline,
  square,
  triangle,
  homeOutline,
  medkitOutline,
  chatbubblesOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import "./theme/variables.css";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Principal from "./pages/Principal/Principal";

import Chat from "./pages/Chat/Chat";
import WebChat from "./pages/WebChat/WebChat";
import PatientSettings from "./pages/PatientSettings/PatientSettings";
import Conversation from "./pages/Conversation/Conversation";

import CategoryChoice from "./pages/Register/CategoryChoice";
import "./style.css";
import { useState } from "react";
import SideMenu from "./components/SideMenu/SideMenu";
import Example from "./components/SideMenu/SideMenu";
import VideoChat from "./components/Call/VideoChat";
import Privacy from "./pages/Privacy/Privacy";
import RegisterAdmin from "./components/Register/RegisterAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin/HomeAdmin";
import RegisterDoctorAdmin from "./pages/Admin/CRUDAdmin/RegisterDoctorAdmin/RegisterDoctorAdmin";
import RegisterClinicAdmin from "./pages/Admin/CRUDAdmin/RegisterClinicAdmin/RegisterClinicAdmin";
import LinkDoctor from "./pages/Admin/LinkDoctor/LinkDoctor";
import LinkPatient from "./pages/Admin/LinkPatient/LinkPatient";
import PatientList from "./pages/Admin/PatientList/PatientList";
import SchedulePatient from "./components/SchedulePatient/SchedulePatient";
import ScheduleDoctor from "./components/ScheduleDoctor/ScheduleDoctor";
import ClinicList from "./pages/Admin/ClinicList/ClinicList";
import ExamResults from "./pages/Patient/ExamResults/ExamResults";
import FindDoctor from "./pages/Patient/FindDoctor/FindDoctor";
import HistoricalClinic from "./pages/Patient/HistoricalClinic/HistoricalClinic";
import HomePatient from "./pages/Patient/HomePatient/HomePatient";
import MedicalSchedule from "./pages/Patient/MedicalSchedule/MedicalSchedule";
import MyHealth from "./pages/Patient/MyHealth/MyHealth";
import RegisterPatientAdmin from "./pages/Admin/CRUDAdmin/RegisterPatientAdmin/RegisterPatient";

setupIonicReact();

const RoutingSystem: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register-choice" component={CategoryChoice} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/patient-settings" component={PatientSettings} exact />
          <Route path="/agendamentos" component={SchedulePatient} exact />
          {/* <Route path="/home" component={HomePatient} exact /> */}
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};


const RoutingTabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/register-admin">
            <RegisterAdmin />
          </Route>
          <Route exact path="/home-admin">
            <HomeAdmin />
          </Route>
          <Route exact path="/register-doctor">
            <RegisterDoctorAdmin />
          </Route>
          <Route exact path="/register-clinic">
            <RegisterClinicAdmin />
          </Route>
          <Route exact path="/register-patient">
            <RegisterPatientAdmin/>
          </Route>
          <Route exact path="/link-doctor">
            <LinkDoctor/>
          </Route>
          <Route exact path="/link-patient">
            <LinkPatient/>
          </Route>
          <Route exact path="/patient-list">
            <PatientList/>
          </Route>
          <Route exact path="/clinic-list">
            <ClinicList/>
          </Route>
          <Route exact path="/">
            <HomePatient />
          </Route>
          <Route exact path="/home-patient">
            <HomePatient />
          </Route>
          <Route exact path="/schedule-patient">
            <SchedulePatient />
          </Route>
          <Route exact path="/schedule-doctor">
            <ScheduleDoctor/>
          </Route>
          <Route exact path="/medical-schedule">
            <MedicalSchedule />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/webchat">
            <WebChat />
          </Route>
          <Route exact path="/conversation">
            <Conversation />
          </Route>
          <Route exact path="/health">
            <MyHealth />
          </Route>
          <Route exact path="/historical-clinic">
            <HistoricalClinic />
          </Route>
          <Route exact path="/exam-results">
            <ExamResults />
          </Route>
          <Route exact path="/find-doctor">
            <FindDoctor />
          </Route>
          <Route exact path="/patient-settings">
            <PatientSettings />
          </Route>
          <Route exact path="/agendamentos">
            <SchedulePatient />
          </Route>
          <Route exact path="/call">
            <VideoChat />
          </Route>
          <Route exact path="/side-menu">
            <SideMenu />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className="menuTab" slot="bottom">
          <IonTabButton tab="home" href="/home-patient">
            <IonIcon icon={homeOutline} className="w-6 h-6" color="primary" />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/schedules">
            <IonIcon
              icon={calendarOutline}
              className="w-6 h-6"
              color="primary"
            />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/chat">
            <IonIcon
              icon={chatbubblesOutline}
              className="w-6 h-6"
              color="primary"
            />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/health">
            <IonIcon icon={medkitOutline} className="w-6 h-6" color="primary" />
          </IonTabButton>
          <IonTabButton tab="tab5">
            <IonIcon
              icon={personOutline}
              className="w-6 h-6 z-50"
              color="primary"
              id="open-modal"
            />
            <SideMenu />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
const App: React.FC = () => {
  const [user, setUser] = useState(true);

  return (
    <IonApp>
      <div className="ion-padding">
        {user ? <RoutingTabs /> : <RoutingSystem />}
      </div>
    </IonApp>
  );
};

export default App;
