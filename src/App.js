import './App.css';
import React from 'react';
import './CelebrityCard.css'
import CelebrityCard from './CelebrityCard.js'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));


function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (    
      <div className="celebrity-hero-background">        
        <div class="heading-text" style={{marginLeft: '2vw', marginTop: '25vh'}}>Maria Sharapova</div>
        <div class="small-text" style={{marginLeft: '2vw'}}>@MariaSharapova</div>
        <div class="small-text" style={{marginLeft: '2vw', marginTop: '1vh'}}>8.8m followers</div>
        <button class="button share-button" style={{marginLeft: '2vw', marginTop: '1.5vh'}}></button>
        <div class="small-text" style={{marginLeft: '80vw', marginTop: '18vh'}}>Highest Bid</div>
        <div class="heading-text" style={{marginLeft: '80vw'}}>8.00ETH</div>
        <div class="small-text" style={{marginLeft: '80vw', textTransform: 'lowercase'}}><b>8</b> h <b>8</b> m left</div>
        <button class="button bid-button" style={{marginLeft: '80vw', marginTop: '1.5vh'}}>BID NOW !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <ScrollMenu 
          //LeftArrow={LeftArrow}
          //RightArrow={RightArrow}
        >
          {items.map(({ id }) => (
            <CelebrityCard
              img = 'https://wallpaperaccess.com/full/1484671.jpg'
              itemId={id} // NOTE: itemId is required for track items
              name={id}
              handle={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            />)
          )}

        </ScrollMenu>        
      </div>
    );
}



function Card({
  onClick,
  selected,
  title,
  itemId
}) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div className="celebrity-card-background">
          <div>{title}</div>
          <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default App;
