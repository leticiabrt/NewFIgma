import { Routes, Route } from "react-router-dom"
import { PageAdm, CadastrarPage, PageHome, PageList, PageLayout, PageLogin } from "../pages"
import ProtectedRoute from "./ProtectedRoute"

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/cadastrar" element={<CadastrarPage />}/> 
        <Route path="//login" element={<PageLogin />}/>
        <Route element={<ProtectedRoute />} />
          <Route path="/adm" element={<PageAdm />} />
        <Route path="/list" element={<PageList />} />
      </Route>
    </Routes>
  )

}


  
