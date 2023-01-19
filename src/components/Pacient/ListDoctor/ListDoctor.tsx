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
import { findAllService } from "../../../services/findService";


const ListDoctor: React.FC = () => {
  const [items, setItems] = useState<any>(mockedDoctors);
  const listDoctors = mockedDoctors;
  const data = listDoctors;
  const [results, setResults] = useState([...data]);
  const role: string = "doctors";

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const listAllDoctors = async () => {
    await findAllService.findAllDoctors(role).then((response: any) => {
      console.log(response);
      setItems(response);
      handleChange();
    }).catch((err: any) => {
      console.log(err);
    });
  }
   
   
   useEffect(() => {
    generateItems();
     listAllDoctors();
      }, []);

  // const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
 
  const handleChange = async (ev?: Event) => {
    await findAllService.findAllDoctors(role).then((response: any) => {
      console.log(response);
      setItems(response);
      let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    // eslint-disable-next-line array-callback-return
    setResults(data.filter((doctor) => {
      return doctor.nameDoctor!.toLowerCase().indexOf(query) > -1 || query === '';
           // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      // teste.toLowerCase().indexOf(query) > -1;
    }))
    }).catch((err: any) => {
      console.log(err);
    });
    
  }



  const teste = () => {
      return  (results.map((element: any, index: any) => (
        <IonItem key={index}>
          <DoctorCard doctor={element} key={element.id} />
        </IonItem>)
        ))
    // }
  }


  return (
    <IonContent>
      <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
      <IonList>
        {teste()}
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
function findAllDoctors(role: string) {
  throw new Error("Function not implemented.");
}

