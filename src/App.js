import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/images/sneakers/item-1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 14599, imageUrl: '/images/sneakers/item-2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 10999, imageUrl: '/images/sneakers/item-3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: '/images/sneakers/item-4.jpg'},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
       <div className="cotent p-40">
       <div className="d-flex justify-between align-center mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img className="mr-15" src="/images/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск" />
          </div>
          </div>
         <div className="sneakers-list d-flex">
           {arr.map((obj) => (
             <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl} />
           ))}
           
         </div>
       </div>
    </div>
  );
}

export default App;
