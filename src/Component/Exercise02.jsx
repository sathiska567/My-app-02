// mapping function

function Exercise02() {
  const li01 = [1,2,3,4,5,6];

  const li02 = li01.map((number) => 
  
  <li key={number}>
     {number} * 2 = {number*2} 
     
  </li>);

  return(
    <div>
        <ul>{li02}</ul>
    </div>
  );

}

export default Exercise02;