import { useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";




const RegisterMedic: React.FC = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');


  return (
    <div>
    <IonText className="flex justify-center mx-auto pb-8 text-lg">Médico</IonText>  
        <IonList>
        <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Nome Completo</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe nome completo" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>CPF</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe CPF" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>CRM</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe CRM" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Endereço</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe endereço" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>E-mail</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe e-mail" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault mt-8' expand="block" routerLink="/register">REGISTRE-SE</IonButton>
          
          <div className='my-8'>
            <IonButton fill="clear" className="flex justify-center mx-auto text-xs" routerLink="/login">
              <p>Voltar para login</p>
            </IonButton>
          </div>
        </IonList> 
        </div>
  );
};

export default RegisterMedic;