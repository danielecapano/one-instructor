

function LimitedSale() {
  return (
    <div className="wrapper">
        <div className="info">
            <h3 className="title">
                Limited Sale: <span>All courses with 55% off</span>
            </h3>
            <div className="input-group">
                <input type="text" className="input" placeholder="Enter your E-mail"/>
                <button className="btn">subscribe </button>
            </div>
        </div>
        <div className="countdown">
            <div className="set-date">
                <span className="count">07</span>
                <span className="description">Days</span>
            </div>
            <div className="set-date">
                <span className="count">18</span>
                <span className="description">Hours</span>
            </div>
            <div className="set-date">
                <span className="count">35</span>
                <span className="description">Minutes</span>
            </div>
            <div className="set-date">
                <span className="count">54</span>
                <span className="description">Seconds</span>
            </div>
        </div>
    </div>
  )
}

export default LimitedSale