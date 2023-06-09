import React from 'react';
import splitArr from '../../utils/splitArr';

import './Footer.scss';

const linkArr = [
  {
    href: '',
    linkName: 'О компании'
  },
  {
    href: '',
    linkName: 'Методы'
  },
  {
    href: '',
    linkName: 'Клиенты'
  },
  {
    href: '',
    linkName: 'Контакты'
  },
  {
    href: '',
    linkName: 'Фармацевтика'
  },
  {
    href: '',
    linkName: 'Торговые центры'
  },
  {
    href: '',
    linkName: 'Строительство'
  },
  {
    href: '',
    linkName: 'Недвижимость'
  },
  {
    href: '',
    linkName: 'Промышленность'
  },
  {
    href: '',
    linkName: 'Сельское хозяйство'
  },
  {
    href: '',
    linkName: 'Автомобили'
  },
  {
    href: '',
    linkName: 'Электрика'
  },
];

const Footer = () => {

  const sortLinks = splitArr(linkArr, 4);

  return (
    <div className='footer'>
      <div className="footer__content">
        <nav>
          {sortLinks.map((item, i) => (
            <ul key={i}>{item.map(({ href, linkName }, i) => (
                <li key={i}><a href={href}>{linkName}</a></li>
              ))}
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;