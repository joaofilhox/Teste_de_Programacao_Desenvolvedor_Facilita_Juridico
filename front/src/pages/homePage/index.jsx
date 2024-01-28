import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import styles from './style.module.scss';
import Modal from '../../components/modal';
import { CiSearch } from "react-icons/ci";


const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [allClients, setAllClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchAllClients();
  }, []);

  const fetchAllClients = async () => {
    try {
      const response = await api.get('/clients');
      setAllClients(response.data);
      setFilteredClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleSearch = () => {
    const filtered = allClients.filter(client =>
      client.name.toLowerCase().includes(name.toLowerCase()) &&
      client.email.toLowerCase().includes(email.toLowerCase()) &&
      client.phone.toLowerCase().includes(phone.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Telefone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleSearch}>Pesquisar <CiSearch size="15px"/></button>
        <button className={styles.button1} onClick={openModal}>Ver Clientes por Proximidade da Empresa</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Coordenada X</th>
            <th>Coordenada Y</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.coordinate_x}</td>
              <td>{client.coordinate_y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalVisible && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Home;
