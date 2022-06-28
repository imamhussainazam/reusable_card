import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "./Header";
import Cards from "./Cards";
import AddCard from "./AddCard";

const WrapperCard = () => {
    const CardStyle = {
        width:"95vw",
        margin: "0 auto",
        marginBottom: "1rem",
        marginTop: "1rem",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      };
      
      const [showAddCard, setShowAddCard] = useState(false);


  return (
    <Card elevation={5} style={CardStyle}>
        <Header onAdd={() => setShowAddCard(!showAddCard)} toggleshow={showAddCard}/>
        {showAddCard && <AddCard />}
      <CardContent >
        <Cards/>
      </CardContent>
      
    </Card>
  );
};

export default WrapperCard;
