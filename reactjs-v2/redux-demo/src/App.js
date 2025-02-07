import logo from "./logo.svg";
import "./App.css";
import WithoutRedux from "./Component/without-redux/WithoutRedux";
import WithRedux from "./Component/with-redux/WithRedux";
import CountryTask from "./Component/Task/CountryTask";
import UserTask from "./Component/UserTask/UserTask";
import UserPractice from "./Component/UserPractice/UserPratice";
import PostTask from "./Component/Post-Task/PostTask";
import PostTodo from "./Component/Post-todo/PostTodo";
import ShopppingCart from "./Component/shopping-cart/ShoppingCart";
import PokemonTask from "./Component/Pokemon-task/PokemonTask";
import PokemonCardListingTask from "./Component/Omkar-Pokemon/main";
import PokemonSir2 from "./Component/Pokemon-sir/Pokemon-useState";
import PokemonSir from "./Component/Pokemon-sir/PokemonSir";
import PokemonPagination from "./Component/Pagination/JS-pagination/PokemonPagination";
import ClientUserApp from "./Component/clinet-user-app/ClientUserApp";

function App() {
  return (
    <>
      {/* <WithoutRedux /> */}
      {/* <CountryList /> */}
      {/* <WithRedux /> */}
      {/* <CountryTask /> */}
      {/* <UserTask /> */}
      {/* <UserPractice /> */}
      {/* <PostTask /> */}
      <PostTodo />
      {/* <ShopppingCart /> */}
      {/* <PokemonTask /> */}
      {/* <PokemonCardListingTask /> */}
      {/* <PokemonSir /> */}
      {/* <PokemonSir2 /> */}
      {/* <PokemonPagination /> */}
      {/* <ClientUserApp /> */}
    </>
  );
}

export default App;
