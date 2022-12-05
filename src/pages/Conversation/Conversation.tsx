import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import ChatConversation from '../../components/ChatConversation/ChatConversation';
import ChatList from '../../components/ChatList/ChatList';
import Identificador from '../../components/Identificador/Identificador';



const Conversation: React.FC = () => {
  return (
    <IonPage className="justify-start">
     <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="Voltar"/>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <Identificador />
    <span>Online</span>
    <div className="container_schedules">
            <ChatConversation />
          </div>
    </IonPage>
  );
};

export default  Conversation;
