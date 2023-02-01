
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { mockedRecords } from "../../../mocks/records";
import { findAllService } from "../../../services/findService";
import PacientCard from "../PacientCard/PacientCard";

const CardMedicalRecords: React.FC = () => {
  const history = useHistory();
  const [listFavorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    handleChange();
  }, [])

  const handleChange = async () => {
    await findAllService.findAllUsers("pacient").then((response: any) => {
      setFavorites(response.data);
      console.log(response.data);
    })
  }

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
        <PacientCard pacient={listFavorites} key={listFavorites.id} />
    </div>
  );
};

export default CardMedicalRecords;
