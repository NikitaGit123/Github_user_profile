
function NextPrevbutton({handleNextClick,handlePrevClick,page}) {

  return (
    <div className="buttonBox">

      <button    
       style={{
        background: page<=1 ? 'white' : '#e6effa'
        }}
       className="previous"  onClick={handlePrevClick}>
        &#8249; Previous
      </button>
      <button
       style={{
        background: page>=4 ? 'white' : '#e6effa'
        }}  
        className="next" onClick={handleNextClick}>
        Next &#8250;
      </button>
    </div>
  );
}

export default NextPrevbutton;
