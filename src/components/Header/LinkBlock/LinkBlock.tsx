import React from 'react';
import splitArr from '../../../utils/splitArr';

import './LinkBlock.scss';

interface Props {
    links?: { href: string; linkName: string; }[];
};

const LinkBlock: React.FC<Props> = ({ links }) => {

    const sortLinks = splitArr(links!, 4);

    return <div className='linkBlock'>
        {sortLinks?.map((item, i) => (
            <div key={i}>
                <ul>{item.map(({ href, linkName }, i) => (
                    <li key={i}>
                        <a href={href}>{linkName}</a>
                    </li>
                ))}</ul>
            </div>
        ))}
    </div>;
};

export default LinkBlock;