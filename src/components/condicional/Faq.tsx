import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90vw] md:w-3/4">
            <Pergunta texto="Quem descobriu o Brasil?" resposta="Pedro Álvares Cabral" />
            <Pergunta texto="O que é TypeScript?" resposta="Aajdfkdls sadkew kwcock sadcmaoecmwm wpcmwo! Eskvkvwk wkcwck wvwckwm wvw movwvkvks mvms dkc sdvwve mroj ava rvnarv anvdarvjaenv" />
            <Pergunta texto="React é um framework?" resposta="O termo correto seria biblioteca JavaScript" />
            <Pergunta texto="Quais as principais funcionalidades do NextJS" resposta="Criar rotas através de pastas; Lascka mco svme e epvmvvmakfva vve vmvvmfvkdmvld vfd mapmve rmvo v m dlkfvd" />
        </div>
    )
}