import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, heart, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Identificador from '../../../components/Identificador/Identificador';
import ListDoctor from '../../../components/Pacient/ListDoctor/ListDoctor';
import PreCall from '../../../components/PreCall/PreCall';


const  FindDoctor: React.FC = () => {
  return (
         <IonPage className="justify-start">
      <Identificador/>
      <h1 className="font-bold">Encontre seu médico</h1>
      <IonItem className="mt-0 mb-0">
        <IonSearchbar placeholder="Pesquise por médico ou especialidade"></IonSearchbar>
      </IonItem>
      <ListDoctor />
    </IonPage>
  );
};

export default FindDoctor;
