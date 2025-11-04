# Podcast mananger

### Descrição

Um app estilo Netflix onde posso organizar episódios por diferentes categorias

### Dominio

Podicasts feitos em video

### Features

- Listar os episódios dos podcasts em sessões de categorias
  - [saúde, futebol, humor]
- Filtrar por podcasts

## Como

#### Feature

Listar os episódios dos podcasts em sessões de categorias

#### Como vou implementar

Vou retornar em uma api rest (json) o nome de um podcast, nome do episódio, imagem de capa e link

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - FLOW #319",
    videoId:"pQSuQmUfS30",
    URL_img: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJY2J1bSBmbG93",
    categories: ["saude", "bodybuild", "esporte"]
  },  
]

```
