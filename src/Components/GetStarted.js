// import jar from "../assets/jar.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const GetStarted = () => {
    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "300px"
    };
    const myCol = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        margin: "10px 0 200px 0"
    };

    return (
        <div className="getting-started" style={{ background: "#0D9068", padding: "50px" }} id="about">

            <div className="text" style={myCol}>
                <h2>Ready to get started?</h2>
                <p style={{
                    margin: "30px 0", color: "#ffffff", lineHight:"40px"
                }}>Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus.
                    Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien.
                    Ut pellentesque ut magna posuere diam in in tristique fermentum. At duis phasellus donec aliquet elementum odio.
                    Amet ut feugiat egestas interdum commodo amet suspendisse suspendisse tempus.Tincidunt interdum tortor vestibulum felis a diam mauris nibh.
                    Lacus pretium arcu ut augue egestas in amet porta turpis. Tempor ultricies malesuada eget consequat arcu feugiat bibendum.
                    Senectus suspendisse arcu dictum in purus. Molestie faucibus a suspendisse etiam tellus morbi sed dignissim.
                </p>

                <AnchorLink href=''>
                    <button className="btn register" style={{ background: "#FB9129", color: "#FFFFFF", border: "none" }}>Register Now</button>
                </AnchorLink>
            </div>
        </div>
    );
}

export default GetStarted;