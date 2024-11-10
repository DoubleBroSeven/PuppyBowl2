import { useState } from "react";
const PupForm = () => {
  const [pupname, setPupName] = useState('');
  const [pupbreed, setPupBreed] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: pupname,
          breed: pupbreed,
        }),
      }
    );
    const result = await response.json()
    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={pupname}
        placeholder="Name"
        onChange={(event) => { setPupName(event.target.value) }}
      />
      <input
        value={pupbreed}
        placeholder="Breed"
        onChange={(event) => { setPupBreed(event.target.value) }}
      />
      <button>Create Pup!</button>
    </form>
  )
}
export default PupForm