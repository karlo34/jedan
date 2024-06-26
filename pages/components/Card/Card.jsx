import Link from 'next/link';
import list from '../../api/dummy_data';
import card from './Card.module.css';

export default function Card() {
    return (
        <div className={card.cards}>
            {list.map((item, index) => (
                <Link href={`/components/details/${index}`} product={item[index]} className={card.card} key={index}>
                    <img className={card.product_img} src={item.slika} alt={item.product} />
                    <p>{item.product}</p>
                </Link>
            ))}
        </div>
    )
}