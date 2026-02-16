import Navbar from "../components/Navbar"




// 
function MainLayout({ children }) {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      {children}
    </div>
  );
}


export default MainLayout
