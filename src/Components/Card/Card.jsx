import "./Card.css";

function Card({ link, small, id, onClickFn }) {
  let width;
  if (small) {
    width = "200px";
  } else {
    width = "300px";
  }

  return (
    <div className="cardDiv">
      <img
        src={link}
        alt="Poster"
        onClick={() => {
          onClickFn(id);
        }}
        width={width}
      />
    </div>
  );
}

export default Card;
