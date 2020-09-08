import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';

export default class PricingCards extends React.Component {

    render = () => {
        return <div className={classes.cardsContainer}>
            <Card title={'Premium'} price={'$10'} features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']}
                icon={'https://svgsilh.com/svg/1614530.svg'} cardContainerClass={classes.cardMargin} />
            <Card title={'Premium'} price={'$10'} features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']}
                icon={'https://svgsilh.com/svg/1614530.svg'} cardContainerClass={classes.cardMargin} />
            <Card title={'Premium'} price={'$10'} features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']}
                icon={'https://svgsilh.com/svg/1614530.svg'} cardContainerClass={classes.cardMargin} />
        </div>
    }
}