import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import styles from "./style.module.scss";

const Form = ({ onSubmit, formData, setFormData }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submit = (formData) => {
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      coordinate_x: "",
      coordinate_y: "",
    });
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input placeholder="Digite o nome do cliente" type="text" {...register("name")} />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input placeholder="Digite o email do cliente" type="email" {...register("email")} />
        {errors.email ? <p>{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="phone">Telefone:</label>
        <input placeholder="Digite o telefone do cliente" type="text" {...register("phone")} />
        {errors.phone ? <p>{errors.phone.message}</p> : null}
      </div>

      <div>
        <label htmlFor="coordinate_x">Coordenada X:</label>
        <input placeholder="Digite a Coordenada X do cliente" type="float" {...register("coordinate_x")} />
        {errors.coordinate_x ? <p>{errors.coordinate_x.message}</p> : null}
      </div>

      <div>
        <label htmlFor="coordinate_y">Coordenada Y:</label>
        <input placeholder="Digite a Coordenada Y do cliente" type="float" {...register("coordinate_y")} />
        {errors.coordinate_y ? <p>{errors.coordinate_y.message}</p> : null}
      </div>

      <button type="submit">Registrar cliente</button>
    </form>
  );
};

export default Form;