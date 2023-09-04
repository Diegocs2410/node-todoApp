import { TODOS_URL } from "@/constants";
import axios from "axios";

const todosApi = axios.create({
  baseURL: TODOS_URL,
});

export default todosApi;
