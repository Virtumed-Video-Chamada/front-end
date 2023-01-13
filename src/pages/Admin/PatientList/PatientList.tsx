import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { pencilOutline, star, trashBin, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { mockedPatients } from "../../../mocks/patient";

const PatientList: React.FC = () => {
    const [items, setItems] = useState<any>(mockedPatients);
    var listPatients = mockedPatients;

    const generateItems = () => {
        const newItems = [];
        for (let i = 0; i < 5; i++) {
          newItems.push(`Item ${1 + items.length + i}`);
        }
        setItems([...items, ...newItems]);
      };
    
      useEffect(() => {
        generateItems();
        console.log(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText class=" flex justify-start p-3 text-black text-lg font-bold">
          Pacientes Cadastrados
        </IonText>
        <IonSearchbar debounce={1000} ></IonSearchbar>
        <IonItem color="primary" lines="none">
          <IonLabel>Nome</IonLabel>
        </IonItem>
        <IonItem color="tertiary" lines="none">
          <IonLabel>A</IonLabel>
        </IonItem>
        <IonList>
          <IonItem lines="full">
            <IonLabel>Amanda Gonçalves</IonLabel>
            <IonButton slot="end" color="primary">
            <IonIcon icon={pencilOutline} slot="end"></IonIcon>
            Editar
          </IonButton>
          <IonButton slot="end" color="danger">
            <IonIcon icon={trashBinOutline} slot="end"></IonIcon>
            Deletar
          </IonButton>
          </IonItem>
        </IonList>
        <IonItem color="tertiary" lines="none">
          <IonLabel>B</IonLabel>
        </IonItem>
        <IonList>
          <IonItem lines="full">
            <IonLabel>Bianca Matos</IonLabel>
            <IonButton slot="end" color="primary">
            <IonIcon icon={pencilOutline} slot="end"></IonIcon>
            Editar
          </IonButton>
          <IonButton slot="end" color="danger">
            <IonIcon icon={trashBinOutline} slot="end"></IonIcon>
            Deletar
          </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientList;
