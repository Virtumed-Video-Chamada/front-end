import {
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonText,
} from "@ionic/react";
import { useState } from "react";

const CategoryChoice: React.FC = () => {

  const [choice, setChoice] = useState('');
  const paramDate = (choice: any) => {
    return `/register?category=${choice}`
   }

  return (
    <IonPage>
        <div className="splash-info"></div>
        <IonImg src="./assets/logo.png" className='imgLogo flex items-center mx-auto' />
          <IonText>Escolha uma opção:</IonText>
          <IonList>
            <IonRadioGroup allowEmptySelection={true} value="">
              <IonItem>
                <IonLabel>Clínica</IonLabel>
                <IonRadio slot="start" value="clinica" onClick={() => setChoice('clinica')}></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Médico</IonLabel>
                <IonRadio slot="start" value="doctor" onClick={() => setChoice('doctor')}></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Paciente</IonLabel>
                <IonRadio slot="start" value="pacient" onClick={() => setChoice('pacient')}></IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonList>
          <IonButton  routerLink={paramDate(choice)}>CONTINUAR</IonButton>
          <div className="my-10">
            <IonButton
              fill="clear"
              className="text-center text-xs font-semibold"
              routerLink="/login"
            >
              <p>Voltar para login</p>
            </IonButton>
          </div>
    </IonPage>
  );
};

export default CategoryChoice;
