import RowCards from "../RowCards/RowCards";
import { API_KEY } from "../../Constants/Constants";

function Content() {
  return (
    <div className="rowCardsDiv" style={{ margin: "2rem" }}>
      <RowCards
        rowTitle="Originals"
        link={`discover/tv?api_key=${API_KEY}&with_networks=213`}
        small={false}
      />
      <RowCards
        rowTitle="Action"
        link={`discover/movie?api_key=${API_KEY}&with_genres=28`}
        small={true}
      />
      <RowCards
        rowTitle="Comedy"
        link={`discover/movie?api_key=${API_KEY}&with_genres=35`}
        small={true}
      />
      <RowCards
        rowTitle="Comedy"
        link={`discover/movie?api_key=${API_KEY}&with_genres=27`}
        small={true}
      />
    </div>
  );
}

export default Content;
