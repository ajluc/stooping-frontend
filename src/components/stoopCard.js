const StoopCard = (obj) => {
  return (
    <div>
      <p>Stoop:</p>
      <p>{obj.stoop.title}</p>
      <p>{obj.stoop.description}</p>
      <p>{obj.stoop.latitude}</p>
      <p>{obj.stoop.longitude}</p>
      <p>{obj.stoop.neighborhood.name}</p>
    </div>
  )
}

export default StoopCard
