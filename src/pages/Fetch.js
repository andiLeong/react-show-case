import React from 'react';
import useToggle from "../hooks/useToggle";
import Redit from "../Redit";
import JsonHolder from "../JsonHolder";


function Fetch(props) {

    const [showFirstApi, setShowFirstApi] = useToggle();
    const [showSecondApi, setShowSecondApi] = useToggle();

    return (

        <div className={`flex space-x-10 max-w-7xl mx-auto`}>

            <div className={`w-2/4`}>
                <button onClick={() => setShowFirstApi()}>
                    {showFirstApi ? 'hide' : 'show'}
                </button>

                {showFirstApi &&
                    <Redit/>
                }
            </div>


            <div className={`w-2/4`}>
                <button onClick={() => setShowSecondApi()}>
                    {showSecondApi ? 'hide' : 'show'}
                </button>
                {showSecondApi &&
                    <JsonHolder/>
                }
            </div>

        </div>
    );
}

export default Fetch;