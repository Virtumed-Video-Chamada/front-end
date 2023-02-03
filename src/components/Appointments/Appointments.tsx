import {
  IonCard,
  IonCardContent,
  IonSlide,
  IonSlides,
  IonThumbnail,
  useIonAlert,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import { useHistory } from 'react-router';
import { appointmentService } from "../../services/appointmentService";
import moment from 'moment';
import { findByIdService } from "../../services/findService";
moment.locale('pt');

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};


// const Appointments: React.FC = ({ props }: any) => {
  function  Appointments({ props }: any) {

  const [category, setCategory] = useState<string>('');
  const history = useHistory();
  const [busy, setBusy] = useState(false);
  const [listAppointment, setListAppointment] = useState<any>([{}]);
  const [meId, setMeId] = useState()

  useEffect(() => {
    findDateAppointment();
    findMeId();
    console.log(listAppointment);
  }, [])

  const findMeId = async () => {
    getStorage("role").then((response) => {
      setCategory(response);
    });
  };

    const findDateAppointment = async () => {
      getStorage("appointments").then((response) => {
        console.log(response);
        setListAppointment(response);
      });

  }

const renderize = () => {
  if(category === 'pacient') {
    return ( <h1 className="font-bold text-l pl-3">Consultas Agendadas</h1>)
  } else if (category === 'doctor') {
    return ( <h1 className="font-bold text-l pl-3">Próxima Consulta</h1>)
  } else {
    return ( <h1 className="font-bold text-l pl-3">Agendas do dia</h1>)
  }
  }

  const dateNow = new Date();
  const [dateCall, setDateCall] = useState();
  const [presentAlert] = useIonAlert();
  


  const alert = () => {
    return presentAlert({
      header: 'Aguarde!',
      subHeader: 'Ainda não está na hora da sua consulta',
      message: 'Você poderá entrar quando faltar 5min pra iniciar!',
      buttons: ['OK'],
    })
  }

    const validConsult = (item: any) => {
      console.log(item);
      const idRoom = item.idRoom;
      // const dateNow: any = new Date();
      // const dateCall: any = new Date(item.date);
      // const difDate = (dateCall - dateNow)/(1000*60);
      // if (difDate <= 5) {
      //   history.replace("/webchat");
      // } else {
      //   alert()
      // }
      // history.replace("/webchat");
      history.replace(`/webchat?id=${idRoom}`)
  }

  const dateEdit = (item: any) => {
    return moment(item).format('DD/MM  HH:mm')
  }

  const avatarEdit = (item: any) => {
    let avatar = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
    if (item.role == 'DOCTOR') {
      findByIdService.findProfileByIdDoctor(item.id).then((resp) => {
        avatar = resp.data.avatar_url
      })
    } else {
      findByIdService.findProfileByIdPacient(item.id).then((resp) => {
        avatar = resp.data.avatar_url
      })
    }
    return avatar;
    }
    
    const renderizeCards = () => {
      return listAppointment.map((item: any, index: any) => {
      return <IonSlide>
        <IonCard className="bd-20 cardDoctor" onClick={() => validConsult(item)}>
          <IonCardContent className="flex">
            <IonThumbnail slot="start">
              <img
                className="imgDoctor max-h-[130%] max-w-[130%]"
                alt="Pic-Doctor"
                src={item.user?.avatar_url == null ? 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' :item.user?.avatar_url }
              />
            </IonThumbnail>
            <div className="text-neutral-50 text-left ml-8 flex flex-col">
              <span>{item.user?.name}</span>
              {/* <p>Psicóloga</p> */}
               <span>{dateEdit(item.date)}</span>
            </div>
          </IonCardContent>
        </IonCard>
      </IonSlide>
      })
    }


  return (
    <div className="container">
      {renderize()}
      <IonSlides className="h-[10rem]" pager={true} options={slideOpts}>
        {(listAppointment.length === 1) ?
          <IonSlide>
            <IonCard className="bd-20 cardDoctor">
              <IonCardContent className="flex">
                <div className="text-neutral-50 mx-auto items-center my-auto">
                  Você ainda não possui Agendamentos!
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          :
          renderizeCards()
          }
      </IonSlides>
        
    </div>
  );
};

export default Appointments;

