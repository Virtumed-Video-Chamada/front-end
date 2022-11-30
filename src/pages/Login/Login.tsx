import { useIonViewDidEnter, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonLoading, IonPage, IonSearchbar, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar, IonAlert, IonToast, useIonToast } from '@ionic/react';
import { eye, person } from 'ionicons/icons';
import { useState } from 'react';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Link, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';


//import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'

const Login: React.FC = () => {

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

  //-------------------------------------
  // const [busy, setBusy] = useState<boolean>(false)
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const [present] = useIonToast();
  // const [idDep, setIdDep] = useState('');

  const executeLogin = () => {
    // setBusy(true);
    //   serviceRemote.authenticationService(usuario, senha, versionInfo)
    //   .then((response) => {
    //     setToken(response.accessToken);
    //     setStorage('dadosLogin', response);
    //     setDadosLogin(response);
    //     dispatch(setTokenState(response.accessToken));
    //     dispatch(setIdDepartamento(response.login.abrangencia.departamento));
    //     history.replace('/home');
    //     setBusy(false);
       ;

        if (salvarSenha){
        //   setStorage('userPwd', {user : usuario, pwd : senha});
        // }else{
        //   removeStorage('userPwd');
        }

      };
  
 
  function SaveLogin(){
    // setSalvarSenha(!salvarSenha);    
    // removeTopic();
  } 

  function lembrarSenha(){
    if(usuario){
      setShowMessageForgot(false);
      setShowAlertSenha(true);
    }
  }


  useIonViewDidEnter(() => {
    // getStorage('userPwd').then((response) => {
    //   if (response){
    //     setSalvarSenha(true);
    //     setUsuario(response.user);
    //     setSenha(response.pwd);
    //   }
    // });  
    // getStorage('dadosLogin').then( response => { 
    //   setToken(response.accessToken);
    //   setDadosLogin(response);
    // });
   
    // App.getInfo().then((response) => {
    //   setVersionInfo(response.build +'-'+response.version);
    // }).catch((error) => {
    //   setVersionInfo('Versão não suportada');
    // });
     
  });

  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold">
        <div className="splash-info"></div>
        <IonList>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>E-mail</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault mt-8' expand="block" onClick={executeLogin}>ENTRAR</IonButton>
          <IonButton className='btnDefault mt-8' expand="block" routerLink="/register-choice">REGISTRE-SE</IonButton>
          
          <div className='my-10'>
            <IonText className="text-center text-xs" onClick={lembrarSenha}>
              <p>Esqueci minha senha</p>
            </IonText>
          </div>

          {/* <IonItem className='bgTransparentCinza lembrar'>
            <IonLabel><IonText>SALVAR USUARIO/SENHA</IonText></IonLabel>
            <IonToggle slot="end" color='selsyn' checked={salvarSenha} onClick={SaveLogin}></IonToggle>
          </IonItem> */}

          <IonItem className='no-border'>
            <IonImg src='./assets/logo.png' className='imgLogo'/>
          </IonItem>

          <div>
            <IonText className="text-center">
            <h6 className='text-[10px]'>Versão 1.0.00</h6>
            </IonText>
          </div>
        </IonList>
      </div>
    </IonPage>
  );
};

export default Login;
