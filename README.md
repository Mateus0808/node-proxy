# Full Cycle Node.js App with Docker

## Como Executar
**1. Clonar o repositório**
Clone este repositório para sua máquina local:
```bash
git clone https://github.com/Mateus0808/node-proxy.git
cd node-proxy
```

**2. Construir a Imagem Docker e Executar servidor node.js**
2.1 Criar uma pasta chamada **mysql** na raiz do projeto
2.2 Crie uma tabela chamada **people**
```bash
create table people (id int not null auto_increment, name varchar(255), primary key(id))
```

Construa a imagem Docker com o seguinte comando:
```bash
docker-compose up -d

docker exec -it app bash

node index.js
```

**3. Acessar a aplicação**
Acesse: http://localhost:8080


