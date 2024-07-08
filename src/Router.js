import { Routes,Route } from "react-router-dom";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import DocxList from "./components/docx/ReactList";

export default function Router(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/docxlist" element={<DocxList/>}></Route>
        </Routes>
    )
}