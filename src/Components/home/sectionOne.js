import React, { useRef } from "react";
import "../../style/sectionOne.css";
import "../../style/banner.css";

const SectionOne = () => {
    const search = useRef(null);

    return (
        <section className="homeContetnSectionOne">
            <div className="container">
                <div className="container-text">
                    <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653111130/RealMod/Properties_1_jf2hwh.png" />
                    <p className="textMargin">Find The Perfect Place to</p>
                        <p>Live With your Family</p>
                </div>

                <div className="containerSearch">
                    <div className="container-filter">
                        <button type="button" value={"sell"}>Sell</button>
                        <button type="button" value={"buy"}>Buy</button>
                        <button type="button" value={"rent"}>Rent</button>
                    </div>

                    <div className="container-bar-searching">
                        <input
                            type="text"
                            name="search"
                            placeholder="Enter keyword here ..."

                        />
                        <select>
                            <option defaultValue>Select Location</option>
                            <option>Colombia</option>
                            <option>Venezuela</option>
                            <option>EE.UU</option>
                            <option>CUBA</option>
                            <option>CHILE</option>
                            <option>HAITI</option>
                            <option>TRINIDAD Y TOBAGO</option>
                            <option>PERÙ</option>
                        </select>

                        <div className="container-btn-search">
                            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653246830/RealMod/Icon_sm6ohm.png" />
                            <button type="submit">Search</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default SectionOne;
