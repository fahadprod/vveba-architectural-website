export default function Customers(){
    return(
        <section className="customers">
                    <h1 className="customers-heading">CUSTOMERS</h1>
                    <div className="customers-content">
                        <div className="customers-card">
                            <img src="images/customer1.jpg" />
                            <div className="customers-card-content">
                                <h1>John Smith</h1>
                                <h3>Co-manager associated</h3>
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, illo velit ullam nam deleniti nisi?</p>
                            </div>
                        </div>
                        <div className="customers-card">
                            <img src="images/customer2.jpg"/>
                            <div className="customers-card-content">
                                <h1>Ann White</h1>
                                <h3>Co-manager associated</h3>
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, illo velit ullam nam deleniti nisi?</p>
                            </div>
                        </div>
                    </div>
                    <div className="client section-bottom">
                        <h1>CLIENT</h1>
                        <h3>SAYS</h3>
                    </div>
                </section>
    )
}