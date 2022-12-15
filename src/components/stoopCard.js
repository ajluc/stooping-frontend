const StoopCard = ({ stoop }) => {
  if (stoop) {
    return (
      <div className="stoop-card">
        <img src={stoop.image}></img>
        <div className="card-text-container">
          <h4>{stoop.title}</h4>
          <div className="flex-row">
            <i className="location-icon bi-geo-alt-fill"></i>
            <p>{stoop.neighborhood.name}</p>
          </div>
          <p>{stoop.description}</p>
        </div>
      </div>
    )
  }
}

export default StoopCard
