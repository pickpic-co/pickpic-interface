import './App.css';

function App() {
  return (
      <div className="celebrity-hero-background">
        <div class="heading-text" style={{marginLeft: '2vw', marginTop: '25vh'}}>Maria Sharapova</div>
        <div class="small-text" style={{marginLeft: '2vw'}}>@MariaSharapova</div>
        <div class="small-text" style={{marginLeft: '2vw', marginTop: '1vh'}}>8.8m followers</div>
        <button class="button share-button" style={{marginLeft: '2vw', marginTop: '1.5vh'}}></button>
        <div class="small-text" style={{marginLeft: '80vw', marginTop: '18vh'}}>Highest Bid</div>
        <div class="heading-text" style={{marginLeft: '80vw'}}>8.00ETH</div>
        <div class="small-text" style={{marginLeft: '80vw'}}>8h 8m left</div>
        <button class="button bid-button" style={{marginLeft: '80vw', marginTop: '1.5vh'}}>BID NOW !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </div>
    );
}

export default App;
