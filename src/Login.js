import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5264/api/Login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // ステータスコードによるレスポンス処理
      if (!response.ok) {
        const errorResponse = await response.json();
        // サーバーからのエラーメッセージがあれば表示
        setMessage(
          errorResponse.message || "メールアドレスかパスワードが間違っています"
        );
      } else {
        setMessage("ログインに成功しました");
        // 成功した場合の処理をここに追加できます（例: リダイレクト）
      }
    } catch (error) {
      setMessage("サーバーに接続できませんでした");
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // フォーム入力の必須化
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // フォーム入力の必須化
        />
        <button type="submit">ログイン</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
