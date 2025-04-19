import Tag from "./components/Tag"
import Random from "./components/Random"

export default function App(){
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="absolute bg-white rounded-lg w-11/12 text-center text-4xl font-bold mt-[40px] px-10 py-2">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[130px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}