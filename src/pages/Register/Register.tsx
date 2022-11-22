import { useIonViewDidEnter, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonLoading, IonPage, IonSearchbar, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar, IonAlert, IonToast, useIonToast } from '@ionic/react';
import { eye, person } from 'ionicons/icons';
import { useState } from 'react';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Link, useHistory } from 'react-router-dom';


const Register: React.FC = () => {

  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [salvarSenha, setSalvarSenha] = useState<boolean>(false);
  const [versionInfo, setVersionInfo] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [dadosLogin, setDadosLogin] = useState<any>({});
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSenha, setShowAlertSenha] = useState(false);
  const [messageAlert, setMessageAlert] = useState<string>(''); 
  const [versaoLGPD, setVersaoLGPD] = useState<string>(''); 
  const [showMessageForgot, setShowMessageForgot] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);


  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold">
        <div className="splash-info"></div>
            <IonImg src='./assets/logo.png' className='imgLogo'/>
            <IonText>Clínica</IonText> 
        <IonList>
        <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Nome Fantasia</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Razão Social</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>CNPJ</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Endereço</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Email</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault mt-8' expand="block" routerLink="/register">REGISTRE-SE</IonButton>
          
          <div className='my-10'>
            <IonButton fill="clear" className="text-center text-xs" routerLink="/login">
              <p>Voltar para login</p>
            </IonButton>
          </div>
        </IonList>
      </div>
    </IonPage>
  );
};

export default Register;
