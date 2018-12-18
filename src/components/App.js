import React, { Component } from "react";
import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    post: [
      {
        id: 1,
        author: "Diego Bousfield",
        avatar: "https://avatars2.githubusercontent.com/u/12818453?s=400&",
        time: "3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore"
      },
      {
        id: 2,
        author: "Diego Bousfield",
        time: "10",
        avatar: "https://avatars2.githubusercontent.com/u/12818453?s=400&",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Paisis, filhis, espiritis santis. "
      },
      {
        id: 3,
        author: "Diego Bousfield",
        time: "20",
        avatar: "https://avatars2.githubusercontent.com/u/12818453?s=400&",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Atirei o pau no gatis, per gatis num morreus. Per aumento de cachacis, eu reclamis."
      },
      {
        id: 4,
        author: "Diego Bousfield",
        time: "20",
        avatar: "https://avatars2.githubusercontent.com/u/12818453?s=400&",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Atirei o pau no gatis, per gatis num morreus. Per aumento de cachacis, eu reclamis."
      }
    ]
  };
  render() {
    const { post } = this.state;
    return (
      <>
        <Header />
        <div className="post-container">
          {post.map(post => (
            <Post data={post} key={post.id} />
          ))}
        </div>
      </>
    );
  }
}
