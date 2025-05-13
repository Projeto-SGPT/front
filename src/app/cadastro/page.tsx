"use client";

import Link from "next/link";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import FormGroup from "../../components/form/FormGroup";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro</h2>
        <form>
          <FormGroup>
            <Input id="nome" label="Nome completo" placeholder="Seu nome" required />
            <Input id="email" label="E-mail" type="email" placeholder="exemplo@teste.com" required />
            <Input id="senha" label="Senha" type="password" placeholder="********" required />
            <Button type="submit">Cadastrar</Button>
          </FormGroup>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
