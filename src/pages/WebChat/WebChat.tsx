import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import VideoChat from '../../components/Call/VideoChat';
import './styles.css'



const  WebChat: React.FC = () => {
  return (
    <IonPage className='align-page'>
     <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" className="text-white"/>
          </IonButtons>
          <IonTitle className="text-white">Em Consulta</IonTitle>
        </IonToolbar>
      </IonHeader>
          <VideoChat />
    </IonPage>
  );
};

export default WebChat;
