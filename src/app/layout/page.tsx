import Grid from "@/components/layout/Grid";

export default function PaginaLayout() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="w-[90%] lg:w-4/5">
                <Grid sm={2} md={4} lg={8}>
                    <div className="flex justify-center items-center h-14 w-full bg-purple-500">#1</div>
                    <div className="flex justify-center items-center h-14 w-full bg-yellow-500">#2</div>
                    <div className="flex justify-center items-center h-14 w-full bg-blue-600">#3</div>
                    <div className="flex justify-center items-center h-14 w-full bg-red-700">#4</div>
                    <div className="flex justify-center items-center h-14 w-full bg-green-500">#5</div>
                    <div className="flex justify-center items-center h-14 w-full bg-zinc-600">#6</div>
                    <div className="flex justify-center items-center h-14 w-full bg-cyan-400">#7</div>
                    <div className="flex justify-center items-center h-14 w-full bg-rose-500">#8</div>
                </Grid>
            </div>
        </div>
    )
}