
const userRole: string = "user"

const DashboardLayout = ({admin, user}:{admin: React.ReactNode, user: React.ReactNode}) => {
  return (
    <div>
      {userRole == "admin" ? admin : user}
    </div>
  );
}

export default DashboardLayout;