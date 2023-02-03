import { IonAvatar, IonCol, IonGrid, IonItem, IonLabel, IonRow, IonText, IonThumbnail } from '@ionic/react';
import moment from 'moment';
import { ChatConversationProps } from "../../@types/interfaces";
import './ChatConversation.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getStorage } from '../../services/adminStorage';
import { findByIdService } from '../../services/findService';


export function ChatConversation(props: ChatConversationProps) {
  const [idMe, setIdMe] = useState()

  useEffect(() => {
    findIdMe();
  }, [])

  const findIdMe = () => {
    getStorage('userIdStorage').then((resp) => {
      setIdMe(resp)
    })
  }

  return (
    <><div>
      {/* <IonItem lines="none" className="mb-2 identificador">
        <IonThumbnail className="pt-3 mb-3" slot="end">
          <IonAvatar className="border-primary">
            <img
              alt="Silhouette of a person's head"
              src={renderize()} />
          </IonAvatar>
        </IonThumbnail>
        <IonLabel>
          <IonText className="font-medium text-lg pl-3">{props.name}!</IonText>
        </IonLabel>
      </IonItem> */}
    </div><IonGrid>
        <IonRow>
          {props.user == idMe ?
            <IonCol size="9" offset="3" className="message my-message">

              <span>{props.msg}</span>
              <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
            </IonCol>
            :
            <IonCol size="9" className="message other-message">
              <span>{props.msg}</span>
              <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
            </IonCol>}
        </IonRow>
      </IonGrid></>
  );
};

