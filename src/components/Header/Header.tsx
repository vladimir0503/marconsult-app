import React from 'react';
import LinkBlock from './LinkBlock/LinkBlock';
import search from '../../images/search.svg'

import './Header.scss';

const tabs = [
    {
        tabName: 'Отрасли',
        tabData: [
            {
                href: '#',
                linkName: 'Здравоохранение'
            },
            {
                href: '#',
                linkName: 'Уход за ребенком и питание'
            },
            {
                href: '#',
                linkName: 'Медицина для домашних животных'
            },
            {
                href: '#',
                linkName: 'Лаборатории'
            },
            {
                href: '#',
                linkName: 'Аптека'
            },
            {
                href: '#',
                linkName: 'Торговые центры'
            },
            {
                href: '#',
                linkName: 'HoReCa'
            },
            {
                href: '#',
                linkName: 'Красота и эстетика'
            },
            {
                href: '#',
                linkName: 'Автоматический'
            }
        ]
    },
    {
        tabName: 'Решения'
    },
    {
        tabName: 'Услуги'
    },
    {
        tabName: 'Проницательность'
    },
    {
        tabName: 'Перевозчики'
    },
    {
        tabName: 'О нас'
    },
    {
        tabName: 'Блог'
    },
];

const Header = () => {
    const [active, setActive] = React.useState<number | null>(null);

    const tabsRef = React.useRef<HTMLInputElement>(null);

    const handleActiveLink = (id: number | null): void => {
        setActive(id);
    };

    const links = active !== null ? tabs[active].tabData : [];

    const externalClickInit = (e: any) => {
        if (e.composedPath().includes(tabsRef.current)) return;

        if (!e.composedPath().includes(tabsRef.current)) {
            setActive(null);
        };
    };

    React.useEffect(() => {
        document.body.addEventListener('click', externalClickInit)
    }, []);

    return (
        <div className='header'>
            <div className="header__content">
                <div ref={tabsRef} className="header__content--tabs-container">
                    <ul>
                        {tabs.map(({ tabName }, i) => (
                            <li
                                key={i}
                                className={i === active ? 'active' : ''}
                                onClick={() => handleActiveLink(i)}
                            >
                                <p>{tabName}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__content--search-block">
                    <div className="input-wrapper">
                        <img src={search} alt='search' />
                        <input type='text' />
                        <div className="input-wrapper__lang-switch">
                            <p>Ру</p>
                            <p>/</p>
                            <p>En</p>
                        </div>
                    </div>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="toggle" />
                        <label className="toggle" htmlFor="toggle"></label>
                    </div>
                </div>
                {!!links?.length && <LinkBlock links={active !== null ? tabs[active].tabData : []} />}
            </div>
        </div>
    );
};

export default Header;