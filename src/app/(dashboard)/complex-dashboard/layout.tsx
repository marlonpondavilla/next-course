
export default function ComplexDashboardLayout({
  children,
  notification,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
  users: React.ReactNode,
  login: React.ReactNode,
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
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
  ) : login;
}
