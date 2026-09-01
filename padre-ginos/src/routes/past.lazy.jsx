import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { getPastOrders } from '../api/getPastOrders'

export const Route = createLazyFileRoute('/past')({
  component: pastOrdersRoute
})

function pastOrdersRoute() {
  const [page, setPage] = useState(1)
  const { data, isLoading} = useQuery({
    queryKey: ['past-orders', page],
    queryFn: getPastOrders
  })

   if (isLoading) {
    return (
      <div className="past-orders">
        <h2>LOADING …</h2>
      </div>
    );
  }
  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}