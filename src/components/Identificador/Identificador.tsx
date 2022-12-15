
import { IonAvatar, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/react';
import './style.css';

const Identificador: React.FC = () => {
  return (
    <div >
     <IonItem lines="none" className="mb-2">
        <IonThumbnail className="pt-3" slot="end">
          <IonAvatar className="border-primary">
            <img
              alt="Silhouette of a person's head"
              src="https://avatars.githubusercontent.com/u/97128625?v=4"
            />
          </IonAvatar>
        </IonThumbnail>
        <IonLabel>
          <IonText className="font-medium text-lg pl-3">Olá, Maycon!</IonText>
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Identificador;
