import { Routes, Route } from "react-router-dom"
import { AdmPage, CadastrarPage, PageHome, PageList, PageLayout, LoginPage } from "../pages"
import ProtectedRoute from "./ProtectedRoute"
const Rotas = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/cadastrar" element={<CadastrarPage />}/> 
        <Route path="//login" element={<LoginPage />}/>
        <Route element={<ProtectedRoute />} />
          <Route path="/adm" element={<AdmPage />} />
        <Route path="/list" element={<PageList />} />
      </Route>
    </Routes>
  )

}
export default Rotas
  
