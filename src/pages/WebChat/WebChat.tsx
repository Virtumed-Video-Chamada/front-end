import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import VideoChat from '../../components/Call/VideoChat';
import './styles.css'



const  WebChat: React.FC = () => {
  return (
    <IonPage className='p-0 m-0'>
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader> */}
          <VideoChat />
    </IonPage>
  );
};

export default WebChat;
