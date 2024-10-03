import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        Name: name,
        Email: email,
        PasswordHash: password,
      };

      const response = await axios.post(
        "http://localhost:5264/api/Login/create",
        user
      );
      alert(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        // サーバーからのエラーメッセージを表示
        alert(error.response.data.message);
      } else {
        alert("エラーが発生しました。");
      }
    }
  };

  return (
    <div>
      <h2>新規登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">名前：</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="名前を入力してください"
            required
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力してください"
            required
          />
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力してください"
            required
          />
        </div>
        <button type="submit">登録</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;
