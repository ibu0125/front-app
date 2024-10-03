import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      Name: name,
      Email: email,
      PasswordHash: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5264/api/Login/create",
        user
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        setMessage(error.response.data.error || "新規登録に失敗しました");
      } else {
        setMessage("エラー");
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
