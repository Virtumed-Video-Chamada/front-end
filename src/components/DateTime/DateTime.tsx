import { useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonDatetime,
  IonIcon
} from "@ionic/react";
import moment from "moment";
import { chevronDown } from "ionicons/icons";




const DateTime: React.FC = () => {
  const [data, setData] = useState<any>(new Date());
  const dataInicio = moment(data[0]).format('DD/MM/YYYY')
  const [change, setChange] = useState('hidden');

 
  const onBlock = () => {
    setChange('block center text-center mx-auto bg-slate-200')
  }

  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const cancel = () => {
    datetime.current?.reset();
    datetime.current?.cancel();
    setChange('hidden');
  }
  const confirm = () => {
    datetime.current?.confirm();
    const listDatas: any = datetime.current?.value;
    setData(listDatas);
    setChange('hidden');
    datetime.current?.reset();
  }

  return (
    <div className='rounded-[10px] w-[173px] h-[37px] bg-white calendar-container align-center text-center py-2 my-5'>
    <span className='bold border py-2' onClick={() => onBlock()}>{dataInicio}</span>
    <IonIcon src={chevronDown}></IonIcon> 
     <IonDatetime
      showDefaultButtons={true}
      size='fixed'
      color="primary"
      className={change}
      ref={datetime}
      presentation="date"
      multiple={true}>
      <IonButtons slot="buttons">
        <IonButton color="primary" onClick={cancel}>Cancelar</IonButton>
        <IonButton color="primary" onClick={confirm}>Aplicar</IonButton>
      </IonButtons> 
     </IonDatetime>
    </div>
  );
};

export default DateTime;

