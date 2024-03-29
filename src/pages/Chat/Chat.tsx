import { IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { useState } from 'react';
import { Redirect, Route } from 'react-router';
import ChatList from '../../components/ChatList/ChatList';
import Identificador from '../../components/Identificador/Identificador';
import { getStorage } from '../../services/adminStorage';



const Chat: React.FC = () => {

  return (
    <IonPage className="justify-start">
      <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto -mb-7"
        />
    <Identificador/>
      {/* <IonItem className="mt-0 mb-3">
        <IonSearchbar placeholder="Pesquisar no chat"></IonSearchbar>
      </IonItem> */}
      <ChatList />
    </IonPage>
  );
};

export default  Chat;
