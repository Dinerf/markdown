# **Markdown Links Extractor v.1.0.1**

Esta biblioteca destina-se à extração de links em textos markdown, para uso em aplicações web.
Na versão atual é capaz de identificar e extrair o link markdown junto ao texto que o acompanha.

## **Os métodos utilizados na biblioteca são:**
getLinksFromMd(text);

### Exemplo de uso:
$node
> let extract = require('getLinksFromMd')

> extract.getLinksFromMd('Pesquisa no [google](www.google.com)'); // [{href: 'www.google.com', text: 'google'}]

> extract.getLinksFromMd('Pesquisa no google'); //[]

## **versão 1.0.2**
* Funcionalidade: identifica e extrai links em um texto markdown e retorna um array com objetos.

## **Instalação**
* Você deverá ter o node + npm instalados. Para guia de instalação, visite o [site oficial](https://www.npmjs.com/get-npm).

* Proceda com a instalação com: `$npm install dinerfsmarkdown`

## **roadmap oficial do projeto**

### **versão 3.0.0 (previsão dezembro/2018)**
* README traduzido para inglês;

* README traduzido para francês;

* Implementação da opção retornar o resultado em string.

### **versão 2.0.0 (previsão outubro/2018)**
* README traduzido para espanhol;

* Implementação da opção retornar o resultado no formato JSON.

### **versão 1.0.1 (released)**
* Funcionalidade: identifica e extrai links em um texto markdown e retorna um array com objetos.