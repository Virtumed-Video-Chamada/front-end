import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonSearchbar,
  IonList
} from "@ionic/react";
import { useEffect, useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../DoctorCard/DoctorCard";

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

  // const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  const data = listDoctors;
  let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    console.log(data);
    if (target) query = target.value!.toLowerCase();
    let teste;
    setResults(data.filter((d) => {
      if(d.nameDoctor != undefined) {
        teste = d.nameDoctor
      } else {
        teste = 'procurar'
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      teste.toLowerCase().indexOf(query) > -1
    }))

  }

  return (
    <IonContent>
      <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
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
