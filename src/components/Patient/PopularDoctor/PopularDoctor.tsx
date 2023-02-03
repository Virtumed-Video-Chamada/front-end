import { IonCard, IonCardContent, IonItem } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { favoriteDoctors } from "../../../mocks/favoritesDoctor";
import { setStorage } from "../../../services/adminStorage";
import { favoriteService } from "../../../services/favoriteService";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./style.css";

const PopularDoctor: React.FC = () => {
  const history = useHistory();
  const [listFavorites, setFavorites] = useState<any>([]);
  const doctor = listFavorites[0] || "";

  const seeAll = () => {
    history.replace("/favorite-doctors");
    window.location.reload();
  };

  useEffect(() => {
    findFavoritList();
  }, []);
    
  const findFavoritList = async () => {
      await favoriteService
        .findAllFavoriteDoctor()
        .then((resp) => {
          setFavorites(resp.data);
          setStorage('favoritesDoctor', resp.data);
        });
    };
 

  const renderize = () => {
    if (listFavorites.length == 0) {
      return (
        <IonCard className="bd-20 cardDoctorWhite flex flex-col justify-center">
          <IonCardContent className="mt-32">
            <div className="text-black font-bold ">
              Você ainda não possui Favoritos!
            </div>
          </IonCardContent>
        </IonCard>
      );
    } else {
      return <DoctorCard props={doctor} key={doctor.id} />;
    }
  };



  return (
    <div className="container">
      <div className="titlePopular">
        <h1 className="font-bold text-l pl-3">Médicos Favoritos</h1>
        {listFavorites.length > 0 ? <span
          className="font-bold text-xs text-colored cursor-pointer"
          onClick={() => seeAll()}
        >
          Ver todos...
        </span> : ''}
        
      </div>
      <div className=" flex mx-auto items-center justify-center">
      {renderize()}
      </div>
    
    </div>
  );
};

export default PopularDoctor;
