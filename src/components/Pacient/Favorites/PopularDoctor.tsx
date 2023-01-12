import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../DoctorCard/DoctorCard";
import './style.css';

const PopularDoctor: React.FC = () => {
  const history = useHistory();
  const [listFavorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    setFavorites(mockedDoctors[0]);
  }, [])
  
  const seeAll = () => {
    history.replace("/favorite-doctors");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="titlePopular">
      <h1 className="font-bold text-l pl-3">Médicos Favoritos</h1>
      <span className="font-bold text-xs text-colored" onClick={() => seeAll()}>
          Ver todos...
        </span>
      </div>
              <DoctorCard doctor={listFavorites} key={listFavorites.id} />
      </div>
  );
};

export default PopularDoctor;
