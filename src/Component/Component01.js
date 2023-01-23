import './Component.css';

function Component01({taskName,stat,btnColor}) {

    // const taskName = 'To Do item 01';
    // const stat = "Done";



    return ( 
        <>
        <div>
            <h3
             style={{marginBottom : 0}}>
            <span> Task : </span>
            {taskName}

                </h3>
            <button style={{color: btnColor}}> {stat} </button>

        </div>
        </>
     );
}

export default Component01;
