import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// add new task
export const createTask = createAsyncThunk(
  "taskSlice/createTask",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:4000", data);
      if (!response.data) {
        throw new Error("coudlnot add task");
      }
      return response.data;
    } catch (error) {
      console.error("internal server error", error);
    }
  }
);

// get tasklist
export const taskListCollecton = createAsyncThunk(
  "taskSlice/taskListCollecton",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000");
      if (!response.data) {
        throw new Error("coudlnot add task");
      }
      return response.data;
    } catch (error) {
      console.error("internal server error", error);
    }
  }
);

// retrive single task
export const singleTask = createAsyncThunk(
  "taskSlice/singleTask",
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/${id}`);
      if (!response.data) {
        throw new Error("coudlnot add task");
      }
      return response.data;
    } catch (error) {
      console.error("internal server error", error);
    }
  }
);

// update task status
export const updateTaskStatus = createAsyncThunk(
  "taskSlice/updateTaskStatus",
  async (data) => {
    const id = data.id;
    const list = data.newList;
    try {
      const response = await axios.put(`http://localhost:4000/${id}`, list);
      if (!response.data) {
        throw new Error("could not update task");
      }
      return response.data;
    } catch (error) {
      console.error("internal server error", error);
    }
  }
);

const initialState = {
  tasklist: [],
  task: [],
  status: [],
  singleInput: [],
  allTask: [],
  // list: [],
};

const taskSlice = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    setSingleInput: (state, action) => {
      state.singleInput = action.payload;
    },
    setAllTask: (state, action) => {
      state.allTask = action.payload;
    },
    // setList: (state, action) => {
    //   state.list = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(createTask.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(taskListCollecton.fulfilled, (state, action) => {
        state.status = "success";
        state.tasklist = action.payload;
      })
      .addCase(taskListCollecton.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(singleTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.task = action.payload;
      })
      .addCase(singleTask.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSingleInput, setAllTask } = taskSlice.actions;
export default taskSlice.reducer;
