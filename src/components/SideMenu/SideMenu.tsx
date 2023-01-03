import React, { useEffect, useRef, useState } from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { closeOutline, informationCircleOutline, logOutOutline, notificationsOutline, settingsOutline, shieldCheckmarkOutline } from 'ionicons/icons';
function Example() {
  const logout = () => {

  }
  
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }


  return (
    <>
      <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!} className="mb-14">
        <IonHeader>
            <IonToolbar>
              <IonTitle>Minha Conta</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => dismiss()}>
                  <IonIcon icon={closeOutline} className="text-slate-900"></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonItem href="/patient-settings/">
          <IonIcon icon={settingsOutline} slot="start" ></IonIcon>
          <IonLabel>
            Configurações
          </IonLabel>
        </IonItem> 
        <IonItem>
          <IonIcon icon={notificationsOutline} slot="start"></IonIcon>
          <IonLabel>
            Notificações
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={informationCircleOutline} slot="start"></IonIcon>
          <IonLabel>
            Sobre nós
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={shieldCheckmarkOutline} slot="start"></IonIcon>
          <IonLabel>
            Privacidade e segurança
          </IonLabel>
        </IonItem>
        <IonItem onClick={logout}>
          <IonIcon icon={logOutOutline} slot="start"></IonIcon>
          <IonLabel>
            Logout
          </IonLabel>
        </IonItem>
          </IonContent> 
      </IonModal>
    </>
  );
}
export default Example;