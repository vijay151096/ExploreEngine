import { SearchBar } from "../components/SearchBar";

export const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "98vh"}}>
            <div style={styles.container}>
                <div style={styles.heading}> Experience Explore Engine </div>
                <div style={styles.subtext}> you are just a click away !! </div>
                <SearchBar />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#D8EFD3",
        flexGrow: 1
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
