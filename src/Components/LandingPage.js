import lady from "../assets/lady.png";



const LandingPage = () => {
    const myStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const headerStyle = {
        width: "800px",
        fontWeight: "400",
        fontSize: "85px",
        color: "#0D9069",
    }
    return (
        <div className="landing-page" id="">
            <div style={myStyle}>
                <div className="text">
                    <h1 style={headerStyle}>
                        New Ways to better <span style={{ color: "#FB9129", fontFamily: "MillikFont" }}>opportunities</span>
                    </h1>
                </div>
                <div className="image">
                    <img src={lady} alt="" />
                </div>
            </div>
        </div>

    );
}

export default LandingPage;