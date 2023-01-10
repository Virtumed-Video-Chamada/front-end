import {
  IonList,
  IonSlide,
  IonSlides,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Doctor/DoctorCard";
import './style.css';

const PopularDoctor: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [present] = useIonToast();
  
  const presentToast = () => {
    present({
      message: "Consulta cancelada com sucesso",
      duration: 1500,
      position: "top",
    });
  };

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (
    <div className="container">
      <div className="titlePopular">
      <h1 className="font-bold text-l pl-3">Médicos Populares</h1>
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
