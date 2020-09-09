import React from 'react';
import classes from './styles.module.css';
import Button from '../../../../ui-components/Button';

export default class Card extends React.Component {

    render = () => {
        const { cardContainerClass, title, price, features, specialFeature } = this.props;

        return <div className={`${cardContainerClass} ${classes.card}`}>
            <div className={classes.cardTitle}>{title}</div>
            <div className={classes.cardHero}>
                <div className={classes.cardPrice}>{price}</div>
                <div className={classes.cardPriceDuration}>per month</div>
            </div>
            <div className={classes.cardFeaturesWrapper}>
                {features.map((feature, index) => <div key={`feature-${index}`} className={classes.cardFeature}>- {feature}</div>)}
            </div>
            <div className={classes.cardButtonWrapper}>
                <Button className={classes.cardButton} onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }}>Buy Now</Button>
            </div>
        </div>
    }
}