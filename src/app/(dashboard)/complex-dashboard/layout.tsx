
export default function ComplexDashboardLayout({
  children,
  notification,
  revenue,
  users,
}: {
  children: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
  users: React.ReactNode,
}) {
  return (
    <div className="flex flex-col justify-center items-center m-8">
      {children}
        <div className="flex">
          <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1">{notification}</div>
        </div>
    </div>
  )
}
