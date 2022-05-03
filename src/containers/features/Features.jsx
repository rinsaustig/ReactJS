import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
{
    title: 'Improving to open new ways and opportunities',
    text: 'From time i learned how to make it worth, so im willing to transform time into value'

},
{
    title: 'Do things rigth, and you will only have to make things once',
    text:  'Effort is guaranteed because clients trust is my only way to future developments'

},
{
    title: 'Knowledge is an open road to sucess',
    text: 'Each proyect is a challenge, each challenge demands to learn something new and get stronger meanwhile    '

},
{
    title: 'Be excellent to be sorrounded by excellence',
    text: 'In design, in development, as a person, and in my life, good things atract each other'

},
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
           <div className="gpt3__features-heading">
               <h1 className="gradient__text">
                   We can join efforts to achieve and upgrade our mutual success.
               </h1>
               <p> Lets get to work together! </p>
           </div>
           <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                    ))}
           </div>
        </div>
    )
}

export default Features
