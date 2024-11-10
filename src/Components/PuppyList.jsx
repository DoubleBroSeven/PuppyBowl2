import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
const PuppyList = ({ setShowList, setPupDetails, pupdetails }) => {
  const [query, setQuery] = useState("");
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const GetList = async () => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players')
      const result = await response.json();
      setLists(result.data.players)
    }
    GetList();
  }, [])
  const clickedPuppy = (pup) => {
    setShowList(false);
    setPupDetails(pup);
  }
  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        lists={lists}
        setPupDetails={setPupDetails}
        setShowList={setShowList}
        pupdetails={pupdetails}
      />
      <ol>
        {
          lists.map((player) => {
            return <li
              key={player.id}
              onClick={() => clickedPuppy(player)}
            >{player.name}</li>
          })
        }
      </ol>
    </>
  )
}

export default PuppyList