import AnchorLink from "react-anchor-link-smooth-scroll";


const Solutions = () => {
    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0"
    };
    const myCol = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    };

    return (
        <div className="solution" style={{ padding: "20px", marginTop: "-250px" }} id="solution">
            <div style={myCol}>
                <h2>Our Solutions</h2>
                <div className="solution-list" style={myRow}>
                    <div className="box">
                        <h3><span style={{ color: "#FB9129", fontFamily: "MillikFont" }}>01 </span> {<hr />} Loan</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis phasellus donec aliquet elementum odio. Amet ut feugiat ege
                        </p>
                    </div>
                    <div className="box">
                        <h3><span style={{ color: "#FB9129", fontFamily: "MillikFont" }}>02</span>{<hr />} Saving</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis phasellus donec aliquet elementum odio. Amet ut feugiat ege
                        </p>
                    </div>
                    <div className="box">
                        <h3><span style={{ color: "#FB9129", fontFamily: "MillikFont" }}>03</span>{<hr />} Training</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis phasellus donec aliquet elementum odio. Amet ut feugiat ege
                        </p>
                    </div>
                </div>

                <div className="hr" style={myRow}>
                    <hr /><hr /><hr />
                </div>

                <AnchorLink href='#start'>
                    <button className="btn register">Register Now</button>
                </AnchorLink>

            </div>
        </div>
    );
}

export default Solutions;