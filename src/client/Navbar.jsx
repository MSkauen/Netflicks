import React, {useEffect, useState} from "react";
import "../shared/css/Navbar.css";
import { useNavigate } from "react-router";

const listener = (handleShow) => {
    return () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    };
}


export default function Navbar({movieApi}) {
    const [show, handleShow] = useState(false);
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();

        navigate(`/search/shows/${search}`);
    }

    useEffect(() => {
        window.addEventListener("scroll", listener(handleShow));
        return () => {
            window.removeEventListener("scroll", listener(handleShow));
        };
    }, []);

    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflicks Logo"
            />
            <div className="nav_buttons">
                <form className="nav_search" onSubmit={submit} method="GET">
                    <input className="search_bar"
                           type="text" placeholder="Search"
                           onChange={handleInputChange}/>
                    <img
                        className="nav_avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Netflicks Avatar"
                    />
                </form>
            </div>
        </div>
    )
}
