import React from 'react';

function Detail(props) {

    const comments = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className={`max-w-3xl mx-auto`}>
            <div className={`pb-16  border-b border-gray-200`}>
                <div className={`space-y-2`}>
                    <div className={`flex items-end`}>
                        <h1 className={`font-bold text-gray-800 text-xl tracking-tight`}>[DevTools] Lorem ipsum dolor
                            sit amet</h1>
                        <span className={`ml-2 text-gray-600`}>#21782</span>
                    </div>
                    <div className={`flex space-x-1 text-sm`}>
                        <p className={`font-semibold`}>username</p>
                        <p>opened this issue 7 days ago</p>
                    </div>
                </div>

                <div className={`flex space-x-3 mt-4 `}>
                    <div>
                        <a className={``} href="">
                            <img className={`w-24 border border-white border-2 rounded-full `}
                                 src="https://avatars.githubusercontent.com/u/69965670?s=88&v=4" alt=""/>
                        </a>
                    </div>
                    <div className={`ml-10`}>
                        <div className={`rounded-t flex items-center bg-gray-200 p-2`}>
                            <p className={`font-bold mr-1`}> username </p>
                            <p>commented 4 day ago</p>
                        </div>
                        <div className={`bg-white p-4 rounded-b`}>
                            <p className={``}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto dolor,
                                dolores est eveniet in incidunt inventore labore numquam quod repellat, tempora
                                veritatis!
                                Architecto harum laudantium quod recusandae voluptatum! Quos?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`space-y-12 mt-10`}>

            {
                comments.map((comment, index) => (

                    <>
                        <div className={`flex space-x-3 mt-4 `}>
                            <div>
                                <a className={``} href="">
                                    <img className={`w-24 border border-white border-2 rounded-full `}
                                         src="https://avatars.githubusercontent.com/u/69965670?s=88&v=4" alt=""/>
                                </a>
                            </div>
                            <div className={`ml-10`}>
                                <div className={`rounded-t flex items-center bg-gray-200 p-2`}>
                                    <p className={`font-bold mr-1`}> username </p>
                                    <p>commented 4 day ago</p>
                                </div>
                                <div className={`bg-white p-4 rounded-b`}>
                                    <p className={``}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto
                                        dolor,
                                        dolores est eveniet in incidunt inventore labore numquam quod repellat, tempora
                                        veritatis!
                                        Architecto harum laudantium quod recusandae voluptatum! Quos?
                                    </p>
                                </div>
                            </div>
                        </div>

                    </>
                ))
            }

            </div>
        </div>

    );
}

export default Detail;