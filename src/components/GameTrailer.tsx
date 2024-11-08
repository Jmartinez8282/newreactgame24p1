import useTrailers from "../hooks/useTrailers"

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}:Props) => {

   const {data,error,isLoading} =  useTrailers(gameId)

   console.log(data);
   

//   if(isLoading) return null;

//   if(error) throw error;
   
//   const first = data?.results[0]
//   return first ?  <video src={first?.data[480]} poster={first?.preview}></video>:null
  return (
    <>
    <h1>Game Trailer</h1>
    </>
  )
}

export default GameTrailer