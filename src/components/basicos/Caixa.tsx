export default function Caixa(props: any) {
    return (
        <div className="flex justify-center items-center bg-purple-500 text-white text-5xl font-thin rounded-md p-2 w-64 h-64 ">
            {props.children}
        </div>
    )
}