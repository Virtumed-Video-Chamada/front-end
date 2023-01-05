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
import { calendarClearOutline, calendarOutline, camera, ellipse, home, logOutOutline, personOutline, settingsOutline, square, triangle, homeOutline, medkitOutline, chatbubblesOutline } from 'ionicons/icons';


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
import './style.css'
import { useState } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import Example from './components/SideMenu/SideMenu';
import VideoChat from './components/Call/VideoChat';
import Privacy from './pages/Privacy/Privacy';

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
          <Route path="/agendamentos" component={SchedulesPacient} exact />
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
            <Route exact path="/">
            <HomePacient />
            </Route>
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
              <Conversation/>
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
            <Route exact path="/patient-settings" >
              <PatientSettings/>
            </Route>
            <Route exact path="/agendamentos">
              <SchedulesPacient/>
            </Route>
            <Route exact path="/call">
              <VideoChat />
            </Route>
            <Route exact path="/side-menu">
              <SideMenu/>
            </Route>
            <Route exact path="/privacy">
              <Privacy/>
            </Route>
          </IonRouterOutlet>
          <IonTabBar className='menuTab' slot="bottom">
            <IonTabButton tab="home" href="/home-pacient">
              <IonIcon icon={homeOutline} className="w-6 h-6" color="primary" />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/schedules">
            <IonIcon icon={calendarOutline} className="w-6 h-6" color="primary"/>

            </IonTabButton>
            <IonTabButton tab="tab3" href="/chat">
              <IonIcon icon={chatbubblesOutline} className="w-6 h-6" color="primary" />
            </IonTabButton>
            <IonTabButton tab="tab4" href="/health">
              <IonIcon icon={medkitOutline} className="w-6 h-6" color="primary"/>
            </IonTabButton>
            <IonTabButton tab="tab5">
                <IonIcon icon={personOutline} className="w-6 h-6 z-50" color="primary" id="open-modal"/>
                <SideMenu />
            </IonTabButton>                       
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  )
}
const App: React.FC = () => {
   const [user, setUser] = useState(true);
   
  return (
    <IonApp>
      <div className="ion-padding">
        {user ?  <RoutingTabs /> :  <RoutingSystem/> }
      </div>
    </IonApp>
  );
};

export default App;