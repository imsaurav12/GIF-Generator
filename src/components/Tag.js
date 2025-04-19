import {useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
  
  const Tag = () => {

    const [tag,setTag] = useState("Car");

    const {gif,loading,fetchData} = useGif(tag);
  
    return (
      <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-10 mr-[15px]'>
  
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase'> Random {tag} gif</h1>
  
        {
          loading ?(<Spinner/>) :(<img src={gif} width="450" alt='No'/>)
        }
        
        <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={((event)=>setTag(event.target.value))}
        value={tag}
        />
  

        <button
        className='w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]' 
        onClick={(()=>fetchData(tag))}>
          Generate GIF
         </button>
      </div>
    )
  }
  
  export default Tag
