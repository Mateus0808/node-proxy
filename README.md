# Node.js App with Docker

## Como Executar
**1. Clonar o repositório**
Clone este repositório para sua máquina local:
```bash
git clone https://github.com/Mateus0808/node-proxy.git
cd node-proxy
```

**2. Construir a Imagem Docker e Executar servidor node.js**
- Criar uma pasta chamada **mysql** na raiz do projeto
- Crie uma tabela chamada **people**
```bash
create table people (id int not null auto_increment, name varchar(255), primary key(id))
```

Construa a imagem Docker com o seguinte comando:
```bash
docker-compose up -d
```

**3. Acessar a aplicação**
- URL: http://localhost:8080


