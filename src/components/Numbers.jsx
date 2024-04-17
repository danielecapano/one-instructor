import numbers from "../numbers"

function Numbers() {
  return (
    <section className="numbers">
        <div className="container">
            <div className="numbers__wrapper">
                {numbers.map((number) => (
                    <div className="number" key={number.id}>
                        
                        <span className={number.icon}></span>
                        
                        <div className="number__body">
                            <h3 className="number__title">{number.title}</h3>
                            <p className="number__description">{number.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Numbers