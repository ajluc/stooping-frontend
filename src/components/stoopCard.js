const StoopCard = ({ stoop }) => {
  if (stoop) {
    return (
      <div>
        <p>Stoop:</p>
        <p>{stoop.title}</p>
        <p>{stoop.description}</p>
        <p>{stoop.latitude}</p>
        <p>{stoop.longitude}</p>
        <p>{stoop.neighborhood.name}</p>
      </div>
    )
  }
}

export default StoopCard
