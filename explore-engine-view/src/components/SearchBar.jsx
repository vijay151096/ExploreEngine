import { useState } from "react";

export const SearchBar = () => {
    const [words, setWords] = useState([]);
    const [error, setError] = useState(null);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const debouncedSearch = debounce(async (searchText) => {
        setError(null);
        setWords([]);
        const regex = new RegExp("^[a-zA-Z0-9]+$")
        if(searchText === ""){
            setError("");
            return;
        }
        if(!searchText.match(regex)){
            setError("Please type only Alpha Numeric values");
            return;
        }
        if (searchText.length < 2) {
            setError("Please type at least 2 letters to search");
            return;
        }
        if (searchText.length >= 2 && searchText !== "") {
            const res = await fetch(`http://localhost:8080/words?search=${searchText}`);
            const searchRes = await res.json();
            setWords(searchRes);
            if(searchRes.length === 0)
                setError("No Search Result Found, try with a different string");
        }
    }, 0);

    const handleSearch = (searchText) => {
        debouncedSearch(searchText);
    };

    const styles = {
        input: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc", // Light gray
            width: "700px",
            boxSizing: "border-box",
            fontSize: "1rem",
        },
        list: {
            listStyleType: "none",
            padding: 0,
        },
        listItem: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc", // Light gray
            width: "700px",
            boxSizing: "border-box",
            fontSize: "1rem",
            backgroundColor: "#F1F8E8", // Light gray
        },
        warning: {
            color: "red",
        },
    };

    return (
        <>
            <input
                type="search"
                style={styles.input}
                placeholder="Enter your search query"
                onInput={(event) => handleSearch(event.target.value)}
            />
            {error && <p style={styles.warning}>{error}</p>}
            <ul style={styles.list}>
                {words.map((word, index) => (
                    <li key={index} style={styles.listItem}>
                        {word}
                    </li>
                ))}
            </ul>
        </>
    );
};
