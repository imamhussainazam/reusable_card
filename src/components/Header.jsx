import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Btn from "./Button";
import { useSelector } from "react-redux";

const Header = ({onAdd, toggleshow}) => {
  const CardStyle = {
    margin: "0 auto",
    marginBottom: "1rem",
    fontSize: "24px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#618579"
  };
  const nprojects=useSelector(state=>state.card.nprojects);
  const totalBudget=useSelector(state=>state.card.totalBudget);
  return (
    <Card elevation={5} style={CardStyle}>
      
      <Btn color={toggleshow? 'red' : 'green'} text={toggleshow? 'Close ' : 'Add Card'} onClick={onAdd}/>
      
      <CardContent style={{color:"white"}}>Total projects={nprojects}, Total budget={totalBudget}</CardContent>

    </Card>
  );
};

export default Header;