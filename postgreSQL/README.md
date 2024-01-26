# Estrutura do Banco de Dados
## Tabela clients
### A tabela clients é a principal entidade responsável por armazenar as informações dos clientes. Abaixo estão os detalhes aprimorados da estrutura da tabela:

* **id:** Chave primária serial para identificação única do cliente.

* **name:** Nome do cliente (VARCHAR, máximo de 100 caracteres, obrigatório).

* **email:** Endereço de e-mail do cliente (VARCHAR, máximo de 100 caracteres, único e obrigatório). Este campo é único para garantir que cada cliente tenha um e apenas um e-mail associado.

* **phone:** Número de telefone do cliente (VARCHAR, máximo de 20 caracteres, obrigatório).

* **coordinate_x:** Coordenada X para localização geográfica do cliente (FLOAT).

* **coordinate_x:** Coordenada Y para localização geográfica do cliente (FLOAT).
