import lady from "../assets/lady.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SolutionEveryone = () => {
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
        <div className="solution-two" style={{ margin: "70px auto" }}>
            <div style={myCol}>
                <h2 style={{ color: "#FB9129", margin: "20px 0" }}> Solution for Everyone</h2>
                <div style={myRow}>
                    <div className="image">
                        <img src={lady} alt="" />
                    </div>
                    <div className="text">
                        <div className="farmers">
                            <h4>Farmers</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis </p>
                            <AnchorLink href='#start' >
                                Register
                                <FontAwesomeIcon icon={faArrowRight} style={{margin: "0 10px"}} />
                            </AnchorLink>
                        </div>

                        <div className="farmers">
                            <h4>Non-Farmers</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis </p>
                            <AnchorLink href='#start' >
                                Register
                                <FontAwesomeIcon icon={faArrowRight} style={{margin: "0 10px"}} />
                            </AnchorLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default SolutionEveryone;