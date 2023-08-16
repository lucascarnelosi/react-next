'use client'
import { createContext, useState } from "react"
import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"

interface ProdutosContextProps {
    itens: ItemCarrinho[]
    adicionarProduto: (produto: Produto) => void
}

const ProdutosContext = createContext<ProdutosContextProps>({} as any)
export default ProdutosContext

export function ProdutosProvider(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto}
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }

    return (
        <ProdutosContext.Provider value={{
            itens, adicionarProduto
        }}>
            {props.children}
        </ProdutosContext.Provider>
    )
}