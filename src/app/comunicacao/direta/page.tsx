import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center py-10 bg-black text-white">
            <h1 className="text-5xl font-black mb-10">
                Comunicação Direta
            </h1>
            <Avo nome="João" sobrenome="Carnelosi" />
            <Avo nome="Josué" sobrenome="Barbosa" />
        </div>
    )
}