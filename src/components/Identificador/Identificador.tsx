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
import { logOutOutline, settingsOutline, settingsSharp } from "ionicons/icons";
import SideMenu from "../SideMenu/SideMenu";



const Identificador: React.FC = () => {
  return (
    <div className="container">
      <SideMenu />
     <IonItem id="main-content">  
        <IonThumbnail slot="end">
          <IonAvatar className="border-b-2 border-primary"  >
            <img
            
              alt="Silhouette of a person's head"
              src="https://avatars.githubusercontent.com/u/97128625?v=4"
            />
          </IonAvatar>
        </IonThumbnail>
      
        <IonLabel>
          <IonText>Olá, Maycon!</IonText>
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Identificador;
