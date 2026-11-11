# Hélio Medeiros — Fotografia + Palavra

> *"Olhar é resistir. A imagem encontra a voz. A arte ocupa a rua."*

Portfólio editorial e manifesto visual do fotógrafo e declamador **Hélio Medeiros**, construído para traduzir a interseção entre o registro documental, as manifestações populares, o teatro e a poesia falada.

---

## ✊ Conceito & Direção de Arte

Este projeto não foi pensado como uma galeria comercial asséptica ou impessoal. Ele foi concebido como um **fanzine editorial vivo e um cartaz de rua (lambe-lambe)**. 

O trabalho de Hélio Medeiros habita o território onde a imagem ganha voz e o verbo se materializa em cena. Por isso, cada elemento da página carrega uma intenção política, tátil e poética:

- **A Estética da Colagem e do Fanzine**: As fitas adesivas de papel craft sobrepostas, os recortes pretos em desnível, os carimbos editoriais e os títulos em caixas assimétricas remetem à urgência do panfleto artesanal, da publicação independente e do cartaz colado nos postes da cidade.
- **A Fotografia Documental e de Espetáculo**: Espaço para narrativas densas — da intimidade expressiva dos palcos do *Grupo Incena* em Teófilo Otoni à força crua das manifestações políticas e atos de rua.

---

## 🎨 A Paleta de Cores da Resistência

A escolha cromática não é decorativa; ela parte da história visual dos movimentos sociais, protestos e da imprensa independente:

| Cor | Hex | Significado & Aplicação |
| :--- | :--- | :--- |
| **Vermelho Resistência** | `#C52721` | A cor visceral dos atos políticos, da urgência, das bandeiras populares e da contestação. Usada nos blocos de destaque, no topo impactante do Hero, em tarjas de marcação editorial e nas palavras que precisam soar como brado. |
| **Preto Tinta / Grafite** | `#181715` | O tom profundo da tinta de imprensa, do mimeógrafo, da graxa e da película fotográfica. Traz sobriedade, contraste cinematográfico e o peso visual necessário para valorizar a iluminação cênica e as fotos documentais. |
| **Creme Papel Kraft** | `#EBDDCA` | A materialidade do papel reciclado, da fita crepe e do lambe-lambe. Quebra a frieza digital e confere ao site uma textura de suporte físico, acolhedor e artesanal. |
| **Linha Editorial** | `#60564C` | O cinza-terra que delimita os índices, metadados e linhas de orientação, como nas pautas de um caderno de poesias ou nas matrizes de diagramação gráfica. |

---

## ✍️ A Escolha Tipográfica

A tipografia foi estruturada em três vozes complementares que contam a história do fotógrafo:

### 1. `Anton` — O Grito do Cartaz (Voz Pública)
- **Por que foi escolhida**: Uma fonte condensada, pesada, com ritmo estritamente vertical e impacto imediato.
- **O que ela expressa**: É a voz que ocupa as ruas. Remete instantaneamente às manchetes históricas de jornais de resistência, tipografia de protesto, clichês de chumbo e cartazes de convocação. Em títulos como *"OLHAR É RESISTIR"* e *"A RUA TAMBÉM É NOSSA"*, a fonte funciona como uma declaração que não pede licença.

### 2. `Permanent Marker` — O Gesto do Poeta (Voz Íntima)
- **Por que foi escolhida**: O traço orgânico, imperfeito e cru da caneta marcadora e do grafite.
- **O que ela expressa**: É a mão que escreve o poema nas margens do ensaio, o verso rascunhado nos camarins e a intervenção poética no espaço urbano. Ela pontua frases como *"a palavra também é imagem"* e *"arte é presença"*, lembrando que por trás de cada disparo existe um corpo que declama e se posiciona.

### 3. `Inter` — A Precisão do Documento (Voz Narrativa)
- **Por que foi escolhida**: Uma sans-serif neutra, geométrica, de altíssima legibilidade e clareza documental.
- **O que ela expressa**: A voz do fotodocumentarista que contextualiza a cena, nomeia os grupos, descreve a data e acolhe a leitura fluida das biografias e formulários de orçamento.

---

## 💻 Recursos e Experiência do Usuário (UX/UI)

- **Cabeçalho Inteligente**: Fixo (`sticky`) durante toda a rolagem, com transição suave para um fundo translúcido fosco (*backdrop blur*), mantendo a leitura clara sem esconder o conteúdo.
- **Navegação com Indicador Dinâmico**: Linha editorial que surge com suavidade ao passar o mouse (`:hover`) nos 3 links e sinaliza a seção atual.
- **Menu Drawer Mobile**: Menu lateral exclusivo para dispositivos móveis com animação fluida no ícone hambúrguer e backdrop escurecido.
- **Scroll Reveal Editorial**: Animações de entrada suaves via `IntersectionObserver`, fazendo com que textos, fitas e fotografias surjam em camadas harmônicas.
- **Galeria Proporcional & Sem Cortes**: Ajuste dinâmico que mantém 100% das fotos e fitas visíveis em telas de notebooks (1280px, 1366px), monitores ultrawide e smartphones.
- **Formulário de Contato Direto**: Campos minimalistas com validação nativa e retorno visual de envio.

---

## 📁 Estrutura de Arquivos

```
.
├── index.html                  # Marcação semântica com estrutura editorial
├── style.css                   # Sistema de design, grid fluido, tipografia e animações
├── script.js                   # Cabeçalho translúcido, menu mobile, scroll reveal e formulário
├── .gitignore                  # Arquivos temporários, OS e dependências ignorados
├── README.md                   # Documentação conceitual e técnica
└── assets/
    └── images/                 # Fotografias e ícones do portfólio
        ├── foto-01-bandeira.png
        ├── foto-02-helio.png
        ├── foto-03-incena.png
        ├── foto-04-incena.png
        ├── foto-05-incena.png
        ├── foto-06-halloween.png
        ├── foto-07-halloween.png
        ├── foto-08-halloween.png
        ├── foto-09-bandeira-chamas.png
        └── arrow-up-right.svg
```

---

## 🚀 Como Executar o Projeto

Como o projeto foi desenvolvido em **HTML5, CSS3 puro e JavaScript moderno (Vanilla JS)**, ele não depende de compiladores ou processos de build para rodar.

### Opção 1: Direto no Navegador
Basta abrir o arquivo [index.html](index.html) em qualquer navegador moderno.

### Opção 2: Servidor Local
Para melhor experiência com fontes e caminhos relativos:

```bash
# Com Python:
python3 -m http.server 3000

# Ou com Node.js (npx):
npx serve .
```

Acesse: `http://localhost:3000`

---

## 📱 Suporte a Dispositivos

- **Desktops & Laptops Grandes** (1440px+): Visual fanzine idêntico ao wireframe do Figma.
- **Laptops Médios** (1024px – 1366px): Grid fluido em proporção de aspecto, sem cortes laterais.
- **Tablets** (768px – 992px): Layout com retrato centralizado e mosaicos empilhados.
- **Smartphones** (360px – 768px): Menu gaveta lateral, tipografia fluida com `clamp()` e experiência pensada para o toque.

---

*Hélio Medeiros — Fotografia, Palavra e Resistência.*
