import React from 'react';

import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <section className="home__learn-more">
                <div className="home__learn-more__content">
                    <div className='home__learn-more__content__bnt-block'>
                        <h1>
                            MAR CONSULT research professional
                        </h1>
                        <p>с <span>2002</span> года мы помогаем лидерам рынка развивать свой бизнес,
                            предоставляя точные данные маркетинговых исследований</p>
                        <button>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;