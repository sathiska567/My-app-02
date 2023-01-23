import './Exresice.css';

function Exercise({ image,name, score, average, innings }) {
    return (
        <>
            <div>
                <div className="container">
                    <table>
                        <tr>
                            <td className='first_td'>
                              player image
                            </td>

                            <td className='second_td'>

                                <h1> {name} : rhb  </h1>
                                <h3> score : {score}  </h3>
                                <p>  innings :{innings}   average :{average} </p>
                                <a href='#'>

                                    <button> More </button>

                                </a>

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercise;