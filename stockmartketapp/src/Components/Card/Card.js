import "bootstrap/dist/css/bootstrap.min.css"
import Data from "./Card.json";

const styles = {
    main: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "40px",
        marginBottom: "40px"
    },
    card: {
        width: "28%",
        backgroundColor: "#f7f5fe",
        border: "1px solid #f7f5fe",

    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        width:"60px"
    }
}
const Card = () => {

    return (
        <div>
            <div style={styles.main}>
                {Data.map((data,index) => {
                    return (
                        <div key={index} style={styles.card}>
                            <div className="row pt-4 pl-5 pb-4 pr-2" style={styles.container}>
                                <div className="col">
                                    <p>{data.name}</p>
                                </div>
                                <div className="col">
                                    <img src={data.logo} alt=""  style={styles.img}/>
                                </div>
                            </div>
                            <div className="row pb-5" style={styles.container}>
                                <h2>{data.usd}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Card;