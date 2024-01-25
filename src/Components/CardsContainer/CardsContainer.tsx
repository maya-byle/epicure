import './CardsContainer.scss'
import arrow from '../../Assets/svg/arrow.svg';

import Card, {CardType} from '../Card/Card';
import SwiperUI from '../UI/SwiperUI';
import TextUI from '../UI/TextUI';

export interface CardContainer {
    title: string,
    cards: CardType[]
}

export interface CardStyle {
    isBig: boolean,
    isMore: boolean,
}

function CardsContainer({ container, styles }: { container: CardContainer, styles: CardStyle }) {
    const containerStyle: string = styles.isBig ? 'big' : 'small';
    const isMore: boolean = styles.isMore;
    const isSmallScreen: boolean = window.innerWidth < 600;

    return ( 
        <div className={`cards_container ${containerStyle}`}>
            <TextUI props={{ className: 'h3', isUpper: containerStyle==='big' ? 'upper' : '' }}>
                    {container.title}
            </TextUI>
            <div className={`cards ${containerStyle}`}>
                <SwiperUI cards={container.cards} containerStyle={containerStyle}/>
            </div>
            {isMore && <div className={`more_container ${containerStyle}`}>
                <TextUI props={{ className: 'h4', isBold: isSmallScreen? 'bold' : ''}}>
                    All restaurants
                </TextUI>
                <img className='arrow' src={arrow} alt='arrow'/>
            </div>}
        </div>
    );
}

export default CardsContainer;