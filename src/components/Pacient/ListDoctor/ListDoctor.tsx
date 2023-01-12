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
const [novalista, setNovalista] = useState('all');
  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    let teste;
    // eslint-disable-next-line array-callback-return
    setResults(data.filter((d) => {
      if(d.nameDoctor !== undefined) {
        teste = d.nameDoctor
      } else {
        teste = 'procurar'
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      console.log(teste.toLowerCase().indexOf(query) > -1)
    }))
  }

const [novosItens, setNovosItens] = useState()

  const teste = () => {
    if (novalista === 'all') {
    return  (items.map((element: any, index: any) => (
      <IonItem key={index}>
        <DoctorCard doctor={element} key={element.id} />
      </IonItem>)
      ))
    } else {
      return  (results.map((element: any, index: any) => (
        <IonItem key={index}>
          <DoctorCard doctor={element} key={element.id} />
        </IonItem>)
        ))
    }
  }










//////////////////////////////////////////////////////////
//   const [filterParam, setFilterParam] = useState<any>(["All"]);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items1, setItems1] = useState<any>([]);

//   //     define a consulta de pesquisa como uma string vazia
//   const [q, setQ] = useState("");
//   //     define os parâmetros de pesquisa
//   //     queremos apenas buscar os países por capital e name
//   //     essa lista pode ser mais longa, se você quiser
//   //     você pode buscar os países até por sua população
//   //     basta adicionar isso ao array
//   const [searchParam] = useState(["capital", "name"]);

//   useEffect(() => {
//       // nossos códigos do fetch
//   }, []);

//   function search(items1: any) {
//     return items1.filter((item1: any) => {
//  /*
//  // aqui, verificamos se nossa região é igual ao nosso state c
//  // se for, retornamos os itens correspondentes
//  // se não, retornamos todos os países
//  */
//     if (item1.region == filterParam) {
//         return searchParam.some((newItem) => {
//           return (
//             item1[newItem]?.toString()?.toLowerCase()?.indexOf(q.toLowerCase()) > -1
//                  //mude essa linha no codepen para fazê-la funcionar
//                      );
//                  });
//              } else if (filterParam === "All") {
//                  return searchParam.some((newItem) => {
//                      return (
//                          item1[newItem]?.toString()?.toLowerCase()?.indexOf(q.toLowerCase()) > -1
//                  //mude essa linha no codepen para fazê-la funcionar
//                      );
//                  });
//              }
//          });
// }
//////////////////////////////////////////////////////////
  return (
    <IonContent>
      <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
      <IonList>
        {/* {items.map((element: any, index: any) => (
          <IonItem key={index}>
            <DoctorCard doctor={element} key={element.id} />
          </IonItem>
        ))} */}
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
