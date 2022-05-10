import './PoolCard.css';

const PoolCard = props => (
    <div className="pool-card">
      <div className="pool-info">
        <div className="header">
          <h2 className="title">GADA</h2>
          <div className="status">
            <span>Active</span>
            <div class="pot"></div>
           </div>
        </div>
        <div className="flex">
          <div div className="item1">
              <div className="info-label">POOL ID</div>
              <div className="info-value">{props.poolId}</div>
          </div>
        </div>
        <div className="flex">
          <div div className="item1">
              <div className="info-label">POOL HASH</div>
              <div className="info-value">{props.poolHash}</div>
          </div>
        </div>
        <div className="flex">
          <div div className="item1">
              <div className="info-label">LIVE STAKE</div>
              <div className="info-value">{props.liveStake}</div>
          </div>
          <div div className="item2">
              <div className="info-label">SATURATION</div>
              <div className="info-value">{props.saturation}</div>
          </div>
        </div>
        <div className="flex">
          <div div className="item1">
              <div className="info-label">GADA REWARDS</div>
              <div className="info-value">{props.rewards}</div>
          </div>
          <div div className="item2">
              <div className="info-label">Fee Margin</div>
              <div className="info-value">{props.feeMargin}</div>
          </div>
        </div>
        <div className="flex">
          <div div className="item1">
              <div className="info-label">DELEGATORS</div>
              <div className="info-value">{props.delegators}</div>
          </div>
          <div div className="item2">
              <div className="info-label">BLOCKS LIFETIME</div>
              <div className="info-value">{props.blockslifeTime}</div>
          </div>
        </div>
      </div>
      <button class="button">Delegate</button>
    </div>
);

export default PoolCard;