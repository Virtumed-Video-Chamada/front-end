import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, heart, square, triangle } from "ionicons/icons";
import { useState } from "react";
import { Redirect, Route } from "react-router";
import Identificador from "../../../components/Identificador/Identificador";
import DoctorCard from "../../../components/Pacient/DoctorCard/DoctorCard";
import ListDoctor from "../../../components/Pacient/ListDoctor/ListDoctor";
import PreCall from "../../../components/PreCall/PreCall";
import { favoriteDoctors } from "../../../mocks/favoritesDoctor";

const FavoriteDoctors: React.FC = () => {
  const [items, setItems] = useState<any>(favoriteDoctors);
  var listDoctors = favoriteDoctors;

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  return (
    <IonPage className="justify-start">
      <IonContent >
        <Identificador />
        <h1 className="font-bold text-l pl-8">Médicos Favoritos</h1>

        <IonList>
          {items.map((element: any, index: any) => (
            <IonItem key={index}>
              <DoctorCard doctor={element} key={element.id} />
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 5000);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default FavoriteDoctors;
