// interface ContainerProps {
//   name: string;
// }

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonThumbnail,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  calendarOutline,
  chatbubbleOutline,
  heartOutline,
  watch,
} from "ionicons/icons";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Doctor/DoctorCard/DoctorCard";

const ListDoctor: React.FC = () => {
  

  return (
    <IonList>
      {mockedDoctors.map((element) => (
      <DoctorCard
        doctor={element}
        key={element.id}
      />
    ))}
   
    </IonList>
    
    
  );
};

export default ListDoctor;
