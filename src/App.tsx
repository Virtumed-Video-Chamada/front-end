import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, square, triangle } from 'ionicons/icons';


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
import HomePacient from './pages/HomePaciente/HomePaciente';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Principal from './pages/Principal/Principal';
import SchedulesPacient from './pages/SchedulesPacient/SchedulesPacient';
import Chat from './pages/Chat/Chat';
import WebChat from './pages/WebChat/WebChat';

setupIonicReact();

const RoutingSystem: React.FC = () => {
  return (
      <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Route path="/" component={HomePacient} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
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
            <Route exact path="/agendamentos">
              <SchedulesPacient />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/webchat">
            <WebChat />
              {/* <Redirect to="/tab1" /> */}
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home-pacient">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/home-pacient">
              <IonIcon src="./assets/icon/calendar.svg" />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/home-pacient">
              <IonIcon src="./assets/icon/Chat-icon.svg"/>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/home-pacient">
              <IonIcon src="./assets/icon/doctor.svg"/>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/home-pacient">
              <IonIcon src="./assets/icon/Profile-icon.svg"/>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  )
}
const App: React.FC = () => {

  return (
    <IonApp>
      <div id="modalLoading"></div>
      <RoutingSystem/>
      <RoutingTabs />
    </IonApp>
  );
};

export default App;