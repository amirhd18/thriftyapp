import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements'

const Features = () => {
    return (
        <FeaturesContainer id="features">
            <FeaturesH1>Our Features</FeaturesH1>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesIcon src={Icon1}/>
                    <FeaturesH2>Reduce expenses</FeaturesH2>
                    <FeaturesP>We help reduce your fees and increase your overall revenue.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon2}/>
                    <FeaturesH2>Virtual Offices</FeaturesH2>
                    <FeaturesP>You can access our platform online anywhere in the world.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon3}/>
                    <FeaturesH2>Premium Benefits</FeaturesH2>
                    <FeaturesP>Unlock our special membership features.</FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
