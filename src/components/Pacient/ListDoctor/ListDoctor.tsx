// interface ContainerProps {
//   name: string;
// }

import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
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
import { useEffect, useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Doctor/DoctorCard/DoctorCard";

const ListDoctor: React.FC = () => {
  const [items, setItems] = useState<any>(mockedDoctors);
  var listDoctors = mockedDoctors;

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
    <IonContent>
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
  );
};

export default ListDoctor;
