import motivations from "../motivations"

function WhyMyCourses() {
  return (
    <section className="why-my-courses">
        <div className="container">
            <h2 className="title">Why my courses?</h2>
            <div className="grid">
                {motivations.map(
                    motivation => (
                        <div key='motivation.id' className="card">
                            <span className={motivation.icon}></span>
                            <div className="card__body">
                                
                                    <h4 className="card__title">{motivation.title}</h4>
                                
                                
                                    <p className="card__description">{motivation.description}</p>
                                
                            </div>
                        </div>
                    )
                )}

            </div>
        </div>
    </section>
  )
}

export default WhyMyCourses