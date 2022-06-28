import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    projects: [{
        id: 1,
        budget: 5000,
        end_date: '2014-06-18T21:11:54'
    },
    {
        id: 2,
        budget: 50000,
        end_date: '2014-08-18T21:11:54'
    },
    {
        id: 3,
        budget: 5000,
        end_date: '2014-10-18T21:11:54'
    },
    {
        id: 4,
        budget: 10000,
        end_date: '2014-12-18T21:11:54'
    }],
    nprojects: 4,
    totalBudget: 70000,
  },
  reducers: {
    addProject: (state, action) => {
      state.nprojects += 1;
      state.projects.push(action.payload);
      state.totalBudget += Number(action.payload.budget);
    },
    update:(state,action)=>{
      console.log(action.payload)
      state.totalBudget -= Number(action.payload.prevbudget);
      state.totalBudget += Number(action.payload.nbudget);
      state.projects=state.projects.map((project)=> {
        if(project.id === action.payload.card_id){
            return {
              ...project,  
              id: action.payload.nid,
              budget:action.payload.nbudget  
            }
          }
          return project;
      })
      
    },
    deleteProject:(state, action)=>{
      state.nprojects -= 1;
      const deleted=state.projects.find((project)=> project.id === action.payload)
      state.projects=state.projects.filter((project)=> project.id !== action.payload)
      state.totalBudget -= Number(deleted.budget);
    }
  },
});

export const { addProject, update, deleteProject } = cardSlice.actions;
export default cardSlice.reducer;