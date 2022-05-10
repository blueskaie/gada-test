import './App.css';
import PoolCard from './PoolCard';
function App() {
  return (
    <div className="App">
      <PoolCard
        poolId = "pool1dsad2a5423sa4"
        poolHash = "pool1dsad2a5423sa4"
        liveStake = "893871342"
        saturation = "53.6%"
        rewards= "10%"
        feeMargin="0%"
        delegators ="2,598"
        blockslifeTime="1,289"
        isactive="true"
      />
      <PoolCard
        poolId = "pool1dsasdfasdfasd"
        poolHash = "pool1dsasdfasdfasd"
        liveStake = "893871343"
        saturation = "35.6%"
        rewards= "10%"
        feeMargin="10%"
        delegators ="5,598"
        blockslifeTime="2,019"
        isactive="true"
      />
    </div>
  );
}

export default App;
