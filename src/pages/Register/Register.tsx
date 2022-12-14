import { IonImg, IonPage } from '@ionic/react';
import RegisterClinic from '../../components/Register/RegisterClinic';
import RegisterMedic from '../../components/Register/RegisterDoctor';
import RegisterPacient from '../../components/Register/RegisterPacient';


const Register: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const choice = urlParams.get("category");
  console.log(choice);

  
  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold">
        <div className="splash-info"></div>
            <IonImg src='./assets/logo.png' className='imgLogo'/>
            {choice === "clinica" && <RegisterClinic /> }
            {choice === "doctor" && <RegisterMedic /> }
            {choice === "pacient" && <RegisterPacient/> }

          
      </div>
    </IonPage>
  );
};

export default Register;
