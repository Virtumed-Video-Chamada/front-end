import {
  IonCard,
  IonCardContent,
  IonThumbnail,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { Patient } from "../../../@types/interfaces";

interface PatientCardProps {
  patient: Patient;
}

function PatientCard({ patient }: PatientCardProps) {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [present] = useIonToast();

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  return (
    <div onClick={showChat}>
      <IonCard className="bd-20 cardpatientWhite">
        <IonCardContent className="flex justify-start">
          <IonThumbnail slot="start">
            <img
              className="imgpatient max-h-[130%] max-w-[130%] bd-20"
              alt="Pic-patient"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonThumbnail>

          <div className="flex flex-col gap-1 ml-11">
            <span className="text-black font-bold">{patient.name}</span>
            {/* <span className="font-medium">98 Avaliações</span> */}
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}

export default PatientCard;
