import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";


const ContactUs = () => {
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
        <div className="contact" style={{ padding: "20px", marginTop: "-180px" }} id="contact">
            <div style={myCol}>
                <h2>Contact Us</h2>
                <div className="contact-list" style={myRow}>
                    <div className="box">
                        <h3 style={{ color: "#FB9129" }}><FontAwesomeIcon icon={faEnvelope} className="fa-icon"/> Email</h3>
                        <p>
                            {/* <a href="mailto:activefarmerscooperative@gmail.com" > */}
                                activefarmerscooperative@ gmail.com
                                {/* </a> */}
                        </p>
                    </div>
                    <div className="box">
                        <h3 style={{ color: "#FB9129" }}><FontAwesomeIcon icon={faPhone} className="fa-icon"/> Phone</h3>
                        <p>
                            <a href="tel:+09024392982">09024392982</a>
                            <br />
                            <a href="tel:+08143744273">08143744273</a>
                        </p>
                    </div>
                    <div className="box">
                        <h3 style={{ color: "#FB9129" }}><FontAwesomeIcon icon={faMapMarker} className="fa-icon"/> Address</h3>
                        <p>
                            No 16 Oka Oko close Garki 2, Abuja Nigeria
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;