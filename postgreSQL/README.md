# Estrutura do Banco de Dados
## Tabela clientes
### A tabela clientes é a principal entidade responsável por armazenar as informações dos clientes. Abaixo estão os detalhes aprimorados da estrutura da tabela:

* <strong>id</strong>: Chave primária serial para identificação única do cliente.

* <strong>nome:</strong> Nome do cliente (VARCHAR, máximo de 100 caracteres, obrigatório).

* <strong>email:</strong> Endereço de e-mail do cliente (VARCHAR, máximo de 100 caracteres, único e obrigatório). Este campo é único para garantir que cada cliente tenha um e apenas um e-mail associado.

* <strong>telefone:</strong> Número de telefone do cliente (VARCHAR, máximo de 20 caracteres, obrigatório).

* <strong>coordenada_x:</strong> Coordenada X para localização geográfica do cliente (FLOAT, opcional).

* <strong>coordenada_y:</strong> Coordenada Y para localização geográfica do cliente (FLOAT, opcional).
