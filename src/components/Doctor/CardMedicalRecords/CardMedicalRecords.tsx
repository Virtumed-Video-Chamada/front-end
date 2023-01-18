
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { mockedRecords } from "../../../mocks/records";
import PatientCard from "../PatientCard/PatientCard";

const CardMedicalRecords: React.FC = () => {
  const history = useHistory();
  const [listFavorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    setFavorites(mockedRecords[0]);
  }, [])

  const seeAll = () => {
    history.replace("/historical-doctor");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="titlePopular">
        <h1 className="font-bold text-l pl-3">Meus Prontuários</h1>
        <span className="font-bold text-xs text-colored cursor-pointer" onClick={() => seeAll()}>
          Ver todos...
        </span>
      </div>
        <PatientCard patient={listFavorites} key={listFavorites.id} />
    </div>
  );
};

export default CardMedicalRecords;
