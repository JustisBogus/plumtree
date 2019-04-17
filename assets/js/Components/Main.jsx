import React, { Component } from 'react';
import './Main.scss';
import Cards from './Cards/Cards';
import CVCreator from '../Components/CVCreator/CVCreator'


class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {

            cvCreator: true,

            cards: [
                {
                    cardNumber: 1,
                    title: 'Gym Mobile App',
                    descriptionTitle: 'Native Apps',
                    client: 'Alto Gym',
                    project: 'Mobile Workout Sharing App',
                    technology1: 'React Native',
                    technology2: 'React',
                    technology3: 'Redux',
                    description: 'Gym trainer creates workouts and exercises using the workout creation web app and sends them to their customers mobile app',
                    tryLink: '',
                    githubLink1: 'https://github.com/JustisBogus/mobilegymapp',
                    githubLink2: 'https://github.com/JustisBogus/gymtrainer',
                    color: '#1f5fa5',
                    style1: 'descriptionArea1',
                    style2: 'descriptionArea1Flipped'
                },
                {
                    cardNumber: 2,
                    title: 'Job Management Web App',
                    descriptionTitle: 'Front End',
                    client: 'YNOT-media',
                    project: 'Job Management Web App',
                    technology1: 'React',
                    technology2: 'React Router',
                    technology3: 'Firebase',
                    description: 'Manager creates jobs and assigns them to Media Buyers. Every job has an option to be selected as active or complete, includes revenue calculator, search and chat.',
                    tryLink: 'http://punkt.lt/showcase/ynotmedia/wide',
                    githubLink1: 'https://github.com/JustisBogus/offers',
                    githubLink2: '',
                    color: '#2e86d2',
                    style1: 'descriptionArea2',
                    style2: 'descriptionArea2Flipped'
                },
                {
                    cardNumber: 3,
                    title: 'Habits',
                    descriptionTitle: 'Back End',
                    client: 'School Project',
                    project: 'Habit Tracking Web App',
                    technology1: 'Laravel',
                    technology2: 'JavaScript',
                    technology3: '',
                    description: 'A Web app where users can have their personal accounts and monitor their daily habits, that are displayed on a calendar.',
                    tryLink: 'http://punkt.lt/showcase/habits/public/habits',
                    githubLink1: 'https://github.com/JustisBogus/habits/tree/master/calendar/laravel',
                    githubLink2: '',
                    color: '#2da5c9',
                    style1: 'descriptionArea3',
                    style2: 'descriptionArea3Flipped'
                },
                {
                    cardNumber: 4,
                    title: 'Address Book',
                    descriptionTitle: 'UX UI',
                    client: 'School Project',
                    project: 'An Address Book Web App',
                    technology1: 'Laravel',
                    technology2: '',
                    technology3: '',
                    description: 'An Address Book web app where users can have their personal accounts, create and edit their friends information such as name, phone number or address.',
                    tryLink: 'http://punkt.lt/showcase/addressbook/public/contacts',
                    githubLink1: 'https://github.com/JustisBogus/clients/tree/master/laravel',
                    githubLink2: '',
                    color: '#3cbec7',
                    style1: 'descriptionArea4',
                    style2: 'descriptionArea4Flipped'
                },
            ]
        }
    }

    toggleContent() {
            this.setState({cvCreator:true});
        }



    render() {

        let content;
        let title;

            if (this.state.cvCreator) {

                content = <CVCreator/>

            } else {

                title = <div>
                    <div className="mainTitleName" > Justis </div>
                    <div className="mainTitle"> Full stack developer, minimalist.</div>
                        </div>

             content = this.state.cards.map(card => {
                    return <Cards key={card.cardNumber}
                                  cardNumber={card.cardNumber}
                                  title={card.title}
                                  descriptionTitle={card.descriptionTitle}
                                  client={card.client}
                                  project={card.project}
                                  technology1={card.technology1}
                                  technology2={card.technology2}
                                  technology3={card.technology3}
                                  description={card.description}
                                  tryLink={card.tryLink}
                                  githubLink1={card.githubLink1}
                                  githubLink2={card.githubLink2}
                                  color={card.color}
                                  style1={card.style1}
                                  style2={card.style2}/>;
                });
            }

        return (
            <div>
                <div onClick={() => this.toggleContent()} >CV creator</div>
                    {title}
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

export default Main;