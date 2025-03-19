export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Faça seu Login</h2>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="mt-4 p-2 border rounded-md w-80"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="mt-2 p-2 border rounded-md w-80"
        />
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
          Entrar
        </button>
      </div>
    );
  }
  