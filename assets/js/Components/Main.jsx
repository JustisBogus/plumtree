import React, { Component } from 'react';
import './Main.scss';
import Cards from './Cards/Cards';
import CVCreator from '../Components/CVCreator/CVCreator'
import { data } from './Cards/Data';


class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {

            cvCreatorView: false,

        }
    }

    toggleContent() {
            this.setState({cvCreatorView:true});
        }



    render() {

        let content;
        let title;

            if (this.state.cvCreatorView) {

                content = <CVCreator/>

            } else {

                title = <div>
                    <div className="mainTitleName" > Justis </div>
                    <div className="mainTitle"> Full stack developer, minimalist.</div>
                        </div>

             content = data.map(card => {
                    return <Cards key={card.cardNumber}
                                  cardNumber={card.cardNumber}
                                  title={card.title}
                                  descriptionTitle={card.descriptionTitle}
                                  client={card.client}
                                  project={card.project}
                                  technology={card.technology}
                                  description={card.description}
                                  tryLink={card.tryLink}
                                  githubLink1={card.githubLink1}
                                  githubLink2={card.githubLink2}
                                  color={card.color}
                                  className1={card.className1}
                                  className2={card.className2}
                                  screenshot={card.screenshot}/>;
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