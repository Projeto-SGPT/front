"use client";

import { FormEvent, useContext, useState } from "react";
import Link from "next/link";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import FormGroup from "../../components/form/FormGroup";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const success = await login(email, password);
    if (success) {
      router.push("/cadastro");
    } else {
      alert("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              id="email"
              label="E-mail"
              type="email"
              placeholder="exemplo@teste.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Entrar</Button>
          </FormGroup>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
