import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>
        Copyright © {currentYear} By Gopi Chakradhar
    </p>
    </footer>;

}
export default Footer;