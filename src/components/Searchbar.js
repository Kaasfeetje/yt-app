import React, { useState } from "react";

function Searchbar({ onTermSubmit }) {
    const [term, setTerm] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <label>Video Search</label>
                <input
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    className="field"
                    type="text"
                ></input>
            </form>
        </div>
    );
}

export default Searchbar;
