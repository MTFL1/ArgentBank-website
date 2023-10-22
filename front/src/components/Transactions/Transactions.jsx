import arrowRight from '../../img/arrowRight.png'

function Transactions() {
    return (
      <>
      <h2 className="sr-only">Accounts</h2>
      <section className="account arrow-btn">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper">
          <img className="size-arrow" src={arrowRight} alt="arrow right" />
        </div>
      </section>
      <section className="account arrow-btn">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper">
        <img className="size-arrow" src={arrowRight} alt="arrow right" />
        </div>
      </section>
      <section className="account arrow-btn">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper ">
        <img className="size-arrow" src={arrowRight} alt="arrow right" />
        </div>
      </section>
      </>
    );
  }
  
  export default Transactions;
  