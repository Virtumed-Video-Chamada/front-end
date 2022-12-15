import {
    IonAvatar,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonText,
    IonThumbnail,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { informationCircleOutline, logOutOutline, notificationsOutline, settingsOutline, shieldCheckmarkOutline } from "ionicons/icons";
  
  
  
  const SideMenu: React.FC = () => {
    return (
      <div>
         <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Minha Conta</IonTitle>
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
        <IonItem>
          <IonIcon icon={logOutOutline} slot="start"></IonIcon>
          <IonLabel>
            Logout
          </IonLabel>
        </IonItem>
          </IonContent> 
        </IonMenu> 
      </div>
    );
  };
  
  export default SideMenu;
  