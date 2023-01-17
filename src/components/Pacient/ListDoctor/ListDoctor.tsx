import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonSearchbar,
  IonList,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../DoctorCard/DoctorCard";

const ListDoctor: React.FC = () => {
  const [items, setItems] = useState<any>(mockedDoctors);
  let listDoctors = mockedDoctors;
  const [results, setResults] = useState([...listDoctors]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = (ev?: Event) => {
    let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
      console.log(query)
    }
    // eslint-disable-next-line array-callback-return
    setResults(
      listDoctors.filter((doctor) => {
       if (query != "") query = query.charAt(0).toUpperCase() + query.slice(1);
        return (
          (doctor.nameDoctor!.indexOf(query) > -1 || doctor.speciality!.indexOf(query) > -1 || query === "")
        );
      })
    );
  };

  useEffect(() => {
    generateItems();
    handleChange();
  }, []);

  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem key={index}>
        <DoctorCard doctor={element} key={element.id} />
      </IonItem>
    ));
  };

  return (
    <IonContent>
      <IonSearchbar
        debounce={1000}
        onIonChange={(ev) => handleChange(ev)}
        placeholder= "Pesquise por Nome ou Especialidade"
      ></IonSearchbar>
      <IonList>{renderize()}</IonList>
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
