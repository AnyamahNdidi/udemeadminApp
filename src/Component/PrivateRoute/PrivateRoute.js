import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom"
import { AppContext } from "../GlobalContext/GlobalContext"

function PrivateRoute({ component: ComponentProps, ...rest }) {
  const { current } = useContext(AppContext)
  return (
    <Route
      {...rest}
      render={(propsRouter) => {
        return current ? (

          <ComponentProps {...propsRouter} />
        ) : (
          <Redirect to="/" />
        )

      }}

    />

  )
}

export default PrivateRoute
