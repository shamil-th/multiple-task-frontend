import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// add new task
export const createTask = createAsyncThunk("taskSlice/createTask", async (data) => {
  console.log('final',data)
  const response = await axios.post("http://localhost:4000", data);
  if (!response.data) {
    throw new Error("coudlnot add task");
  }
  return response.data;
});


// get tasklist
export const taskListCollecton = createAsyncThunk(
  "taskSlice/taskListCollecton",
  async () => {
    const response = await axios.get("http://localhost:4000");
    if (!response.data) {
      throw new Error("coudlnot add task");
    }
    return response.data;
  }
);

// retrive single task
export const singleTask = createAsyncThunk("taskSlice/singleTask", async (id) => {
  const response = await axios.get(`http://localhost:4000)/${id}`);
  if (!response.data) {
    throw new Error("coudlnot add task");
  }
  return response.data;
});

const initialState = {
  tasklist: [],
  task: [],
  status: [],
  singleInput:[],
  allTask:[]

};

const taskSlice = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    setSingleInput:(state,action) => {
      state.singleInput = action.payload;
      console.log('list',state.singleInput)
    },
    setAllTask:(state,action) => {
      state.allTask = action.payload
      console.log('alltask',state.allTask)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(taskListCollecton.fulfilled, (state, action) => {
        state.status = "success";
        state.tasklist = action.payload;
      })
      .addCase(singleTask.fulfilled, (state, action) => {
        state.status = "success";
        state.task = action.payload;
      });
  },
});

export const {setSingleInput,setAllTask} = taskSlice.actions
export default taskSlice.reducer;
