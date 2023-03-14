const myCol = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    margin: "100px auto"
};

const Impact = () => {
    return (
        <div className="impact" id="impact" style={{}}>
            <div style={myCol}>
                <h2 style={{ color: "#444444", width: "700px" }}>We are steadily impacting the lives
                    of farmers and non-farmers
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turpis placerat hendrerit in mauris sapien. Ut pellentesque ut magna posuere diam in in tristique fermentum.</p>
                <h5>120+</h5>
                <h3 style={{color: "#444444"}}>Registered Members</h3>
            </div>
        </div>
    );
}

export default Impact;