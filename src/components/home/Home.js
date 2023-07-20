import './Home.scss'



const Home =  () => {


  
  return (
    <>
    <div className="home-main">
      <div className="all-container">
        <h1 className="title-problems">Can you solve these problems?</h1>
        <div className="problems-container">
          <div className="problem-container">
          <h2 className="title-problem">Problem 1:</h2>
        <p className="text-problem"> A factory manufactured 483685 toys in three weeks. The production in first week was 146345 toys and in second week 138152 toys. Find the production in the third week.</p>
          </div>
          <div className="problem-container">
          <h2 className="title-problem">Problem 2:</h2>
        <p className="text-problem">  Mrs. Harrison used 16 ounces of dark chocolate while baking. She used 2/5 of the chocolate to make some frosting and used the rest to make brownies. How much more chocolate did Mrs. Harrison use in the brownies than in the frosting?</p>
          </div>
          <div className="problem-container">
          <h2 className="title-problem">Problem 3:</h2>
        <p className="text-problem">  Annabel and Eric made 17 ounces of pizza dough. They used 5/8 of the dough to make a pizza and used the rest to make calzones. What is the difference between the amount of dough they used to make pizza, and the amount of dough the used to make calzonee?</p>
          </div>
        </div>
        
      <button >btn</button>
        
      </div>
    </div>
    </>
  )
}

export default Home;