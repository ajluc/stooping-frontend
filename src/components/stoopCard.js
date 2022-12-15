const StoopCard = ({ stoop }) => {
  if (stoop) {
    return (
      <div className="stoop-card">
        <img src={stoop.image}></img>
        <div className="card-text-container">
          <div className="flex-row space-btw">
            <p className="title">{stoop.title}</p>
            <div className="flex-row">
              <i className="grey location-icon bi-geo-alt-fill"></i>
              <p className="grey">{stoop.neighborhood.name}</p>
            </div>
          </div>
          <hr />
          <p>{stoop.description}</p>
        </div>
      </div>
    )
  }
}

export default StoopCard
