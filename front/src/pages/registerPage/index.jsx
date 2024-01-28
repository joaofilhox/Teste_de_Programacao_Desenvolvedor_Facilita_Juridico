import { useState } from "react";
import Form from "../../components/Form";
import { api } from "../../services/api";
import styles from "./style.module.scss";
import { toast } from "react-toastify";


const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coordinate_x: "",
    coordinate_y: "",
  });

  const submit = async (formData) => {
    try {
      const response = await api.post("register", formData);
      toast.success("Cliente cadastrado com sucesso!")
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

 
  return (
    <div className={styles.container}>
      <h1>Cadastrar novo cliente</h1>
      <div className={styles.formContainer}>
        <Form onSubmit={submit} formData={formData} setFormData={setFormData} />
      </div>
      
    </div>
  );
};

export default Register;
