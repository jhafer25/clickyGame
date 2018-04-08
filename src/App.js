import React, { Component } from 'react';
import './App.css';
import puppies from './puppies.json'
import WrapperScript from './components/WrapperScript'
import Navigation from './components/Navigation'
import Header from './components/Header'
import PuppyCard from './components/PuppyCard'

class App extends Component {
  state = {
    message: "Click to Start!",
    topScore: 0,
    currentScore: 0,
    puppies: puppies,
    unselectedPuppies: puppies
  }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPuppy = name => {
        const findPuppy = this.state.unselectedPuppies.find(item => item.name === name);
        console.log(findPuppy);
        if(findPuppy === undefined) {
            this.setState({ 
                message: "You guessed that puppy already!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                puppies: puppies,
                unselectedPuppies: puppies
            });
        }
        else {
            // success to select a new puppy
            const newPuppies = this.state.unselectedPuppies.filter(item => item.name !== name);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                puppies: puppies,
                unselectedPuppies: newPuppies
            });
        }

        this.shuffleArray(puppies);
    };

    render() {
        return (
            <WrapperScript>
                <Navigation
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Header />
                {
                    this.state.puppies.map(puppy => (
                        <PuppyCard
                            key={puppy.key}
                            name={puppy.name}
                            image={puppy.image}
                            selectPuppy={this.selectPuppy} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </WrapperScript>
        );
    }
}

export default App;
