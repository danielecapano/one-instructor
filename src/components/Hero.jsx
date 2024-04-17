import LimitedSale from "./LimitedSale"


function Hero() {
  return (
    <section className="hero">
        <div className="container">
            <div className="grid">
                <div className="content">
                    <h1 className="title">Start your Human <span>Revolution</span> today</h1>
                    <p className="text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
            </div>
        </div>
        <LimitedSale />
    </section>
  )
}

export default Hero