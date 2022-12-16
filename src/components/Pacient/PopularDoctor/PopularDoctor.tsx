// interface ContainerProps {
//   name: string;
// }

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  useIonToast,
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Doctor/DoctorCard";
import './style.css';

const PopularDoctor: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const presentToast = () => {
    present({
      message: 'Consulta cancelada com sucesso',
      duration: 1500,
      position: 'top',
    });
  };

  const showChat = () => {
    setChange(!change);
    if(change === true) {
      setClass("flex")
    } else {
      setClass("flex hidden")
    }
  return (
    <div className="container">
      <div className="titlePopular">
      <h1 className="font-bold text-xl pl-3">Médicos Populares</h1>
      <span className="font-bold text-xs text-colored">Ver todos...</span>
      </div>
        <IonSlides pager={true} options={slideOpts} >
          {mockedDoctors.map((element: any) => (
            <IonSlide className="mb-10">
              <DoctorCard doctor={element} key={element.id} />
            </IonSlide>
          ))}
        </IonSlides>
    </div>
  );
};

export default PopularDoctor;
