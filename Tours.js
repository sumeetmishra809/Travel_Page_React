import Card from "./Card";

function Tours({ tours, removeTour }) {

    return (
        <div className="container">
            <div>
                <h2 className="title">Wanderlust Chronicles</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => { // tours walr component k andar har ek tour k uppar iterate hoga.
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card> //...tour cloning.  //also, always pass a key, while using MAP.
                    })
                }
            </div>

        </div>
    )
}

export default Tours;