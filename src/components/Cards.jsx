import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addProject, deleteProject, update } from "../redux/CardRedux";



const ContentStyle = {
    width: "75vw",
    margin: "5px",
    marginBottom: "1rem",
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
};

const Cards = () => {


    const cards = useSelector(state => state.card.projects);
    const dispatch = useDispatch();
    const np = useSelector(state => state.card.nprojects);
    const deleteCard = (id) => {
        dispatch(deleteProject(id));
    }
    const copyCard = (card_id) => {
        let { id, name, budget, end_date } = cards.find((detail) => detail.id === card_id);
        id = np + 1;
        dispatch(addProject({ id, name, budget, end_date }));
    }

    const editCard=(card_id,nid,prevbudget,nbudget)=>{
            dispatch(update({card_id,nid,prevbudget,nbudget}));
    }



    return (<div style={ContentStyle}>
        {cards?.map((card) => (
            <CardComponent key={card.id} card={card} onEdit={editCard} onDelete={deleteCard} onCopy={copyCard} />
        ))}
    </div>
    )
}

export default Cards