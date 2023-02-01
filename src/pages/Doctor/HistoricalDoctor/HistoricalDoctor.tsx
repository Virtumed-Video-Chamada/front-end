import { useEffect, useState } from "react";
import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonSearchbar,
  useIonLoading,
} from "@ionic/react";
import Identificador from "../../../components/Identificador/Identificador";
import { documentTextOutline } from "ionicons/icons";
import { mockedPatients } from "../../../mocks/patient";
import { findAllService } from "../../../services/findService";
import { useHistory } from "react-router";

const HistoricalDoctor: React.FC = () => {
  const [namePacient, setNamePacient] = useState<any>([]);
  const [results, setResults] = useState([...namePacient]);
  const history = useHistory();
  const [busy, setBusy] = useState(true);
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [listC, setListC] = useState([]);
  const [listD, setListD] = useState([]);
  const [listE, setListE] = useState([]);
  const [listF, setListF] = useState([]);
  const [listG, setListG] = useState([]);
  const [listH, setListH] = useState([]);
  const [listI, setListI] = useState([]);
  const [listJ, setListJ] = useState([]);
  const [listK, setListK] = useState([]);
  const [listL, setListL] = useState([]);
  const [listM, setListM] = useState([]);
  const [listN, setListN] = useState([]);
  const [listO, setListO] = useState([]);
  const [listP, setListP] = useState([]);
  const [listQ, setListQ] = useState([]);
  const [listR, setListR] = useState([]);
  const [listS, setListS] = useState([]);
  const [listT, setListT] = useState([]);
  const [listU, setListU] = useState([]);
  const [listV, setListV] = useState([]);
  const [listW, setListW] = useState([]);
  const [listX, setListX] = useState([]);
  const [listY, setListY] = useState([]);
  const [listZ, setListZ] = useState([]);

  const newList = () => {
    setListA(
      namePacient.filter((item: any) => {
        return (
          (item.name.toLowerCase().charAt(0) === "a")
        );
      })
    );
    setListB(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "b";
      })
    );
    setListC(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "c";
      })
    );
    setListD(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "d";
      })
    );
    setListE(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "e";
      })
    );
    setListF(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "f";
      })
    );
    setListG(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "g";
      })
    );
    setListH(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "h";
      })
    );
    setListI(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "i";
      })
    );
    setListJ(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "j";
      })
    );
    setListK(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "k";
      })
    );
    setListL(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "l";
      })
    );
    setListM(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "m";
      })
    );
    setListN(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "n";
      })
    );
    setListO(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "o";
      })
    );
    setListP(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "p";
      })
    );
    setListR(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "r";
      })
    );
    setListS(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "s";
      })
    );
    setListT(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "t";
      })
    );
    setListU(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "u";
      })
    );
    setListV(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "v";
      })
    );
    setListX(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "x";
      })
    );
    setListW(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "w";
      })
    );
    setListY(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "y";
      })
    );
    setListZ(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "z";
      })
    );
  };

  const [present, dismiss] = useIonLoading();
  const handleChange = async (ev?: Event) => {
    await findAllService.findAllUsers("pacient").then((response: any) => {
      setNamePacient(response.data);
    
    let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
      }
    let listPacients = response.data;
    setResults(
      listPacients.filter((pacient: any) => {
        return (
          pacient.name!.toLowerCase().indexOf(query) > -1 ||
          query === ""
        );
      })
    )});
  };
  
  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem key={index}>
         <IonItem key={index} onClick={() => redirect(element.id)}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{element.name}</IonLabel>
          </IonItem>
      </IonItem>
    ));
  };

  const redirect = (id: any) => {
    history.replace(`/add-historical-doctor?id=${id}`)
  }

  useEffect(() => {
    newList();
    handleChange();
  }, []);



  return (
    <IonPage>
      <IonContent className="overflow-y-auto">
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex item.names-center mx-auto -mb-7"

        />
        <Identificador />
        <IonSearchbar
          debounce={1000}
          placeholder="Procure pelo nome do Paciente"
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        {busy == true && renderize()}
      </IonContent>
    </IonPage>
  );
};
export default HistoricalDoctor;
