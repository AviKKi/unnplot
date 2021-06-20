const Tile = ({ imgSrc, label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`mr-3 cursor-pointer border-2 rounded p-2 text-center hover:border-primary ${
        active ? "border-primary-dark" : ""
      }`}
    >
      <img src={imgSrc} />
      <div>{label}</div>
    </div>
  )
}

export default Tile
