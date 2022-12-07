import { Redirect, Route } from 'react-router-dom';
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
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, logOutOutline, settingsOutline, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import HomePacient from './pages/Pacient/HomePaciente/HomePaciente';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Principal from './pages/Principal/Principal';
import SchedulesPacient from './pages/Pacient/SchedulesPacient/SchedulesPacient';
import Chat from './pages/Chat/Chat';
import WebChat from './pages/WebChat/WebChat';
import PatientSettings from './pages/PatientSettings/PatientSettings';
import Conversation from './pages/Conversation/Conversation';
import MyHealth from './pages/Pacient/MyHealth/MyHealth';
import HistoricalClinic from './pages/Pacient/HistoricalClinic/HistoricalClinic';
import ExamResults from './pages/Pacient/ExamResults/ExamResults';
import FindDoctor from './pages/Pacient/FindDoctor/FindDoctor';
import MedicalSchedule from './pages/Pacient/MedicalSchedule/MedicalSchedule';
import CategoryChoice from './pages/Register/CategoryChoice';


setupIonicReact();

const RoutingSystem: React.FC = () => {
  return (
      <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Route path="/" component={HomePacient} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register-choice" component={CategoryChoice} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/patient-settings" component={PatientSettings} exact />
          {/* <Route path="/home" component={HomePacient} exact /> */}
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
)
};

const RoutingTabs: React.FC = () => {
  return (
    <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home-pacient">
              <HomePacient />
            </Route>
            <Route exact path="/schedules">
              <SchedulesPacient />
            </Route>
            <Route exact path="/medical-schedules">
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
              <ExamResults/>
            </Route>
            <Route exact path="/find-doctor">
              <FindDoctor/>
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home-pacient">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/schedules">
              <IonIcon src="./assets/icon/calendar.svg" />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/chat">
              <IonIcon src="./assets/icon/Chat-icon.svg"/>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/health">
              <IonIcon src="./assets/icon/doctor.svg"/>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/home-pacient">
            <IonMenuToggle>
                <IonIcon src="./assets/icon/Profile-icon.svg"/>
            </IonMenuToggle>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  )
}
const App: React.FC = () => {

  return (
    <IonApp>
      <div id="principal">
      {/* <RoutingSystem/> */}
      <RoutingTabs />
      </div>
    </IonApp>
  );
};

export default App;