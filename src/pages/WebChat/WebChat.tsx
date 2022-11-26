import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, heart, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Call from '../../components/Call/Call';
import PreCall from '../../components/PreCall/PreCall';


const  WebChat: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" className="text-white"/>
          </IonButtons>
          <IonTitle className="text-white">Em Consulta</IonTitle>
        </IonToolbar>
      </IonHeader>
          <PreCall />
          <Call />
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default WebChat;
