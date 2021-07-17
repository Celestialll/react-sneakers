import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
           <Card />
         <div className="card">
           <div className="favorite">
             <img src="/images/heart-white.svg" alt="Unliked" />
           </div>
           <img width={133} height={112} src="/images/sneakers/item-1.jpg" alt="" />
           <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/images/plus.svg" alt="" />
               </button>
           </div>
         </div>
         <div className="card">
           <img width={133} height={112} src="/images/sneakers/item-2.jpg" alt="" />
           <p>Мужские Кроссовки Nike Air Max 270</p>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/images/plus.svg" alt="" />
               </button>
           </div>
         </div>
         <div className="card">
           <img width={133} height={112} src="/images/sneakers/item-3.jpg" alt="" />
           <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>8 499 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/images/plus.svg" alt="" />
               </button>
           </div>
         </div>
         <div className="card">
           <img width={133} height={112} src="/images/sneakers/item-4.jpg" alt="" />
           <p>Кроссовки Puma X Aka Boku Future Rider</p>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>8 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/images/plus.svg" alt="" />
               </button>
           </div>
         </div>
         </div>
       </div>
    </div>
  );
}

export default App;
