import { SearchBar } from "../components/SearchBar";

export const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "98vh"}}>
            <div style={styles.header}>
                <div style={styles.heading}> Experience Explore Engine </div>
                <div style={styles.subtext}> you are just a click away !! </div>
            </div>
            <div style={styles.container}>
                <SearchBar />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "#D8EFD3",
        flexGrow: 1
    },
    header: {
        height: "200px",
        paddingTop: "200px",
        alignItems: "center",
        backgroundColor: "#D8EFD3",

    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#006989",
        textAlign: "center",
    },
    subtext: {
        fontSize: "1.2rem",
        color: "#55AD9B",
        textAlign: "center",
        marginBottom: "50px"
    }
};
