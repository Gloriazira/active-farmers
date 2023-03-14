import logo from "../assets/logol.png";
import newit from "../assets/newit.png";

const myRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px auto",
    padding: "0 100px",
};


const Partners = () => {
    return ( 
        <div className="partners" id="parnters" style={{margin: "50px auto"}}>
            <h2 style={{color: "#FB9129", textAlign: "center"}}>Our Partners</h2>
            <div style={myRow}>
                <img src={logo} alt="" />
                <img src={newit} alt="" />
                <img src={logo} alt="" />
                <img src={newit} alt="" />
            </div>
        </div>
     );
}
 
export default Partners;