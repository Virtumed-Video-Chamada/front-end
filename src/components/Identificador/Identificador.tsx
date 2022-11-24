import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
} from "@ionic/react";



const Identificador: React.FC = () => {
  return (
    <div className="container">
     <IonItem>
        <IonThumbnail slot="end">
          <IonAvatar className="border-b-2 border-primary">
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
