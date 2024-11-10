import PupForm from "./Components/CreatePup";
import PuppyDetails from "./Components/PuppyDetails"
import PuppyList from "./Components/PuppyList"
import { useState } from "react"

function App() {         
  const [showlist, setShowList] = useState(true);   
  const [pupdetails, setPupDetails] = useState({}); 
      

  return (
    <>
      <PupForm/>
      {showlist ? (
        <PuppyList
          setShowList={setShowList}
          setPupDetails={setPupDetails}
          pupdetails={pupdetails}
        />
      ) : (
        <PuppyDetails
          pupdetails={pupdetails}
          setShowList={setShowList}
          />
          
      )}
    </>
  );
}

export default App;


