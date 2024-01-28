import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import style from "./style.module.scss";

const Modal = ({ onClose }) => {
  const [dataFromAPI, setDataFromAPI] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/clients');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div role="dialog" className={style.overlayBox}>
      <div className={style.modalBox}>
        <button className={style.closeBtn} onClick={onClose}>
          Fechar
        </button>
        <div className={style.modalContent}>
          <h1>Clients</h1>
          <ul className={style.clientsList}>
            {!isLoading &&
              dataFromAPI &&
              dataFromAPI.map((client) => (
                <li key={client.id} className={style.client}>
                  <h3>{`${client.name}`}</h3>
                  <p>Email: {client.email}</p>
                  <p>Telefone: {client.phone}</p>
                  <p>Coordenada X: {client.coordinate_x}</p>
                  <p>Coordenada Y: {client.coordinate_y}</p>
                </li>
              ))}
            <li key={0} className={style.client}>
              <h3>{`${"Facilita Jurídico"}`}</h3>
              <p>Email: {"@facilita.juridico"}</p>
              <p>Telefone: {"15 99852-6603"}</p>
              <p>Coordenada X: {"0"}</p>
              <p>Coordenada Y: {"0"}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
