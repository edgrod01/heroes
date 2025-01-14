import { Route, Routes } from "react-router-dom";


import { HeoresRoutes } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
      <>

		<div className="">
			<Routes>
				<Route path="login" element={ <LoginPage />} />
				<Route path="/*" element={ <HeoresRoutes />} />
			</Routes>
		</div>
      </>
  )
}
