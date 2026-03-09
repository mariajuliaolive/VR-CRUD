# 🏛️ VR CRUD – Museu Virtual em Realidade Virtual

## 📌 Sobre o Projeto

Este projeto implementa um **CRUD (Create, Read, Update, Delete)** integrado a um ambiente de **Realidade Virtual (VR)** utilizando **A-Frame**.

Os registros são representados como **objetos 3D dentro de uma cena virtual**.
Cada item criado aparece automaticamente no ambiente como uma forma geométrica com **cor e formato aleatórios**.

A aplicação permite criar, visualizar e remover objetos diretamente no ambiente virtual.

---

# 🎯 Objetivo

Criar um sistema CRUD funcional onde os dados manipulados pelo usuário sejam representados visualmente em uma **cena 3D interativa**.

Cada operação realizada no sistema modifica dinamicamente os objetos exibidos no ambiente virtual.

---

# 🧠 Funcionamento

Cada objeto criado possui:

* **Nome**
* **Cor aleatória**
* **Forma geométrica aleatória**

Os objetos são exibidos organizados dentro da cena 3D e possuem **animação de rotação contínua**.

O usuário pode interagir com os objetos através do cursor da câmera.

---

# 🔄 Operações CRUD

## Create (POST)

Cria um novo objeto no sistema.

* O usuário digita o nome do objeto
* O sistema gera automaticamente:

  * uma **cor aleatória**
  * uma **forma geométrica aleatória**
* O objeto aparece na cena virtual

---

## Read (GET)

Lista todos os objetos existentes no sistema e os exibe no ambiente virtual.

Cada objeto aparece com:

* forma geométrica
* cor
* nome exibido acima do objeto

---

## Delete (DELETE)

Para remover um objeto:

* basta **clicar no objeto dentro da cena 3D**

O objeto será removido:

* da cena virtual
* do armazenamento da API

---

# 🎮 Interação no Ambiente Virtual

A interação ocorre através de:

* **Cursor da câmera**
* **Clique nos objetos**
* **Interface HTML auxiliar**

Menu disponível na interface:

* Criar objeto
* Atualizar lista

---

# 🛠️ Tecnologias Utilizadas

### Linguagens

* HTML
* JavaScript

### Bibliotecas

* **A-Frame** – criação do ambiente de Realidade Virtual

### Backend Simulado

* **JSON Server** – utilizado para simular uma API REST

---

# 📦 Estrutura do Projeto

```
VR-CRUD
│
├── index.html
├── app.js
├── db.json
└── README.md
```

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/mariajuliaolive/VR-CRUD.git
```

---

## 2️⃣ Instalar o JSON Server

Caso não tenha instalado:

```
npm install -g json-server
```

---

## 3️⃣ Iniciar a API

Dentro da pasta do projeto execute:

```
json-server --watch db.json
```

A API será iniciada em:

```
http://localhost:3000
```

---

## 4️⃣ Executar o projeto

Abra o arquivo **index.html** no navegador.

---

# 🌐 Cena Virtual

O ambiente virtual possui:

* céu virtual
* plano representando o chão
* iluminação ambiente
* câmera com cursor interativo

Os objetos são posicionados automaticamente na cena para manter a organização visual.

---

# 📚 Conceitos Aplicados

* CRUD
* API REST
* Fetch API
* Manipulação de JSON
* Renderização 3D na Web
* Interação em Realidade Virtual

---

# 👩‍💻 Autora

**Maria Julia Oliveira**



GitHub
https://github.com/mariajuliaolive

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos.
