// interface ContainerProps {
//   name: string;
// }

import {
  IonAvatar,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSlide,
  IonSlides,
  IonThumbnail,
} from "@ionic/react";
import { checkmark, checkmarkOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

const ChatConversation: React.FC = () => {

  return (
    <div className="container h-full w-full flex flex-col justify-between">
      <div className="chat">
        <div className="msg msg-your">Olá</div>
        <div className="msg msg-other">Bom dia</div>
        <span className="text-xs ml-3 text[#a6a6a6a6]">
            <IonIcon icon={checkmarkOutline}></IonIcon>
            16:50
          </span>
      </div>
      <div className="flex items-center fixed-bottom">
          <IonInput placeholder="Digite sua mensagem"></IonInput>
      </div>
    </div>
  );
};

export default ChatConversation;

