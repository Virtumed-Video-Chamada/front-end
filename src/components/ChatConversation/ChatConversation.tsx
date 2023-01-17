import {
  IonAvatar,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
} from "@ionic/react";
import { checkmark, checkmarkOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import moment from 'moment';
import { ChatConversationProps } from "../../@types/interfaces";
import './ChatConversation.css';


export function ChatConversation(props: ChatConversationProps) {

  const currentUser = 'max';


  return (
  <IonGrid>
    <IonRow className="roll-paper">
      {currentUser !== props.user ? 
       <IonCol size="9" className="message other-message">
        {/* <b>{props.user}</b><br></br> */}
        <span>{props.msg}</span>
        <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
       </IonCol> :
        <IonCol size="9" offset="3" className="message my-message">
        {/* <b>{props.user}</b><br></br> */}
        <span>{props.msg}</span>
        <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
       </IonCol> }
    </IonRow>
  </IonGrid>
  );
};

