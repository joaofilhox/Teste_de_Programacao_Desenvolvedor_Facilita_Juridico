import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z.string().email("Forneça um e-mail válido.").min(1, "O e-mail é obrigatório."),
    phone: z.string().min(1, "O telefone é obrigatório."),
    coordinate_x: z.string()
    .regex(/^[0-9]+(?:\.[0-9]+)?$/, "Informe um número válido. Aceitamos apenas números inteiros ou decimais.")
    .min(1, "A coordenada X é obrigatória."),
    coordinate_y: z.string()
    .regex(/^[0-9]+(?:\.[0-9]+)?$/, "Informe um número válido. Aceitamos apenas números inteiros ou decimais.")
    .min(1, "A coordenada Y é obrigatória."),
  });
  
  