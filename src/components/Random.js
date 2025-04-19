import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
//  Bina Custom Hook ke
  // const [loading,setLoading]=useState(false);

  //   const[gif,setGif] = useState("");

  //   async function fetchData()
  //     {
  //       setLoading(true);
  //       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //       const {data} = await axios.get(url);
  //       const imageSource =data.data.images.downsized_large.url; 
  //       console.log(imageSource);
  //       setGif(imageSource);
  //       setLoading(false);
  //     }
  //   useEffect(()=>{
  //       fetchData();

  //   },[]);

  //   function clickHandler(){
  //     fetchData();
  //   }

  function clickHandler(){
    fetchData();
  }

  // Using Custom Hook
  const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-10 mr-[15px]'>

      <h1 className='mt-[15px] text-2xl underline font-bold uppercase'> A random gif</h1>

      {
        loading ?(<Spinner/>) :(<img src={gif} width="450" alt='no'/>)
      }
      


      <button
      className='w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]' 
      onClick={clickHandler}>
        Generate GIF
       </button>
    </div>
  )
}

export default Random
