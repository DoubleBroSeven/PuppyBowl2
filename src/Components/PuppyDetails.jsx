const PuppyDetails = ({ pupdetails, setShowList }) => {
  const { name, breed, status, imageUrl } = pupdetails
  return (
    <>
      <h1>{name}</h1>
      <img src={imageUrl}
        height='350px'
        width='350px'
      />
      <h3>{breed}</h3>
      <h3>{status}</h3>
      <button
        onClick={()=>setShowList(true)}
      >Back</button>
    </>
  )
}

export default PuppyDetails
