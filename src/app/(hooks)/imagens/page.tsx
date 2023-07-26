import ImagemAleatoria from "@/components/hooks/ImagemAleatoria";

export default function PaginaImagens() {
    return (
        <div className="flex justify-center items-center gap-5 h-screen bg-gray-950 text-white">
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
        </div>
    )
}