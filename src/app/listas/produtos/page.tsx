'use client'
import { useContext } from 'react'
import Link from "next/link"
import Carrinho from "@/components/listas/Carrinho"
import ListaProdutos from "@/components/listas/ListaProdutos"
import produtos from "@/constants/produtos"
import ProdutosContext from "@/data/contexts/ProdutosContext"

export default function PaginaProdutos() {
    const { itens, adicionarProduto } = useContext(ProdutosContext)
    
    return (
        <div className="flex flex-col gap-10 justify-center items-center bg-black h-full text-white py-6">
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
            <Link href="/">Voltar</Link>
        </div>
    )
}