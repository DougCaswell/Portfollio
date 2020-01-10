import React, { Component } from 'react';

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            slides: [],
            currentSlide: 0
        }
    }

    componentDidMount() {
        this.setState({ slides: this.props.slides })
    }

    images() {
        let mapped = this.state.slides.map((slide, i) => (
            <img key={i} src={slide.path} alt={slide.name} />
        ))
        return mapped
    }

    moveCarousel(direction) {
        let maxIndex = this.state.slides.length - 1;
        let current = this.state.currentSlide;
        if (direction === '+') {

            if (this.state.currentSlide < maxIndex) {
                this.setState({ currentSlide: current + 1 })
            } else {
                this.setState({ currentSlide: 0 })
            }

        } else if (direction === '-') {

            if (this.state.currentSlide === 0) {
                this.setState({ currentSlide: maxIndex })
            } else {
                this.setState({ currentSlide: current - 1 })
            }

        } else {
            return null
        }
    }

    render() {
        return (
            <div className='carousel'>
                <button className="left" onClick={() => this.moveCarousel('-')}>{"<"}</button>

                {this.images()[this.state.currentSlide]}

                <button className="right" onClick={() => this.moveCarousel('+')}>{">"}</button>
            </div>
        )
    }
}