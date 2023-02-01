import {
  IonCard,
  IonCardContent,
  IonThumbnail,
  useIonToast,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Pacient } from "../../../@types/interfaces";

interface PacientCardProps {
  pacient: Pacient | any;
}

function PacientCard({ pacient }: PacientCardProps) {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [present] = useIonToast();
  const history = useHistory();


  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  useEffect(() => {
  console.log(pacient)
})

  const redirect = (id: any) => {
    history.replace(`/add-historical-doctor?id=${id}`)
  }


  return (
    <div onClick={showChat}>

     
    </div>
  );
}

export default PacientCard;
