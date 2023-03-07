import React from "react";
import Akar from "./components/Akkardion";
import Komp from "./components/Comp";
import Navbar from "./components/Navbar";
import With from "./components/With";
import Loadest from "./components/Loudest";
import "./App.css"
import Keep from "./components/Keep";
import Input from "./components/Inputs";
import Footer from "./components/MyFooter";


export default function Component(){
    return(
        <>

            <Komp/>
            <div className="container">
            <Akar/>
            <With/>
            <Loadest/>
            <Keep/>
            <Input/>
            </div>
        </>
    )
}