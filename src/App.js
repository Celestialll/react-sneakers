
function App() {
  return (
    <div className="wrapper clear">
       <header className="d-flex justify-between align-center p-40">
         <div className="d-flex align-center">
           <img className="mr-15" width={40} height={40} src="/images/logo.svg" alt="" />
           <div>
             <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
           </div>
         </div>
         <ul className="d-flex">
           <li className="mr-30 d-flex align-center">
             <img width={18} height={18} src="/images/cart.svg" alt="" />
             <span>1500 руб.</span>
           </li>
           <li>
             <img width={18} height={18} src="/images/user.svg" alt="" />

           </li>
         </ul>
       </header>
       <div className="cotent p-40">
         <h1 className="mb-40">Все кроссовки</h1>
         <div className="sneakers-list d-flex">
         <div className="card">
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
