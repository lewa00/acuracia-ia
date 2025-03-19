import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vindo à Acuráci[IA]</h1>
      <p className="text-gray-700 mt-2">Sua plataforma inteligente para professores.</p>
      <Link href="/login">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Entrar na Plataforma
        </button>
      </Link>
    </div>
  );
}
