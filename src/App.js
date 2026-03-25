import Navbar from "./components/navbar";  
import Categories from "./components/categories";
import Recomanded from "./components/recomanded";
import Saleimg from "./components/saleimg";
import Coursecard from "./components/coursecard";
import Popular from "./components/popular"; 
import Topics from "./components/topics";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Recomanded />
      <Saleimg />
      <Coursecard />
      <Popular />
      <Topics />
      <Footer />
    </div>
  );
}
export default App;