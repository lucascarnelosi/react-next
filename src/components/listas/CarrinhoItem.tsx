import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";
import { IconX } from "@tabler/icons-react";

export default function CarrinhoItem(props: ItemCarrinho) {
    return (
        <div className="flex items-center gap-2 rounded-full bg-blue-500">
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-700 p-2">
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span>
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-red-700 p-2 cursor-pointer">
                <IconX />
            </span>
        </div>
    )
}