import { IonImg, IonPage } from '@ionic/react';
import RegisterClinic from '../../components/Register/RegisterClinic';
import RegisterDoctor from '../../components/Register/RegisterDoctor';
import RegisterPatient from '../../components/Register/RegisterPatient';


const Register: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const choice = urlParams.get("category");
  console.log(choice);

  
  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold">
        <div className="splash-info"></div>
            <IonImg src='./assets/logo.png' className='imgLogo flex items-center mx-auto pb-2'/>
            {choice === "clinica" && <RegisterClinic /> }
            {choice === "doctor" && <RegisterDoctor /> }
            {choice === "pacient" && <RegisterPatient/> }

          
      </div>
    </IonPage>
  );
};

export default Register;
