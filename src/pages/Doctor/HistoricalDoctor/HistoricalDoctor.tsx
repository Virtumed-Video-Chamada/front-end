import {useEffect, useState } from "react";
import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Identificador from "../../../components/Identificador/Identificador";
import { documentTextOutline } from "ionicons/icons";
import { mockedRecords } from "../../../mocks/records";

const HistoricalDoctor: React.FC = () => {

  const [namePacient, setNamePacient] = useState<any>(['Alice', 'Ana']);

useEffect(() => {
  mockedRecords.map((e: any) => (
    setNamePacient([...namePacient, e.namePacient])
  ))
}, []);

  const listOrdem = (value: any, alfa: string) => {
    console.log(namePacient);
    console.log(value);
    if(value.substr(0) === "A" || value.substr(0) === "a"){
      return value
    }
  }

  const newListA: any  = namePacient.filter(listOrdem);
  const newListB: any  = namePacient.filter(listOrdem);

  return (
    <IonPage>
      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto -mb-7"
        />
        <Identificador />
        <IonItemGroup>
          <IonItemDivider className="bg-primary">
            <IonLabel className="text-white">A</IonLabel>
          </IonItemDivider>
    {newListA.map((item :any) =>
     <IonItem>
     <IonIcon src={documentTextOutline} color="primary"></IonIcon>
     <IonLabel className="ml-2">{item}</IonLabel>
   </IonItem>
    )}
        </IonItemGroup>

        <IonItemGroup>
        <IonItemDivider className="bg-primary">
            <IonLabel className="text-white">B</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Bangladesh</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Belarus</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Belgium</IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};
export default HistoricalDoctor;
