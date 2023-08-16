import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Principal</h1>
      <Link href="/contexto/contador">
        <span>Contador</span>
      </Link>
      <Link href="/listas/produtos">
        <span>Produtos</span>
      </Link>
    </div>
  )
}