import { Outlet, createRootRoute } from '@tanstack/react-router'
import { CartContext } from '../contexts'
import Header from '../Header'
import PizzaOfTheDay from '../PizzaOfTheDay'
import { useState } from 'react'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  
  component: () => {
    const cartHook = useState([])
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <CartContext.Provider value={cartHook}>
            <div>
              <Header />
              <Outlet />
              <PizzaOfTheDay />
            </div>
          </CartContext.Provider>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </>
    )
  }
})
