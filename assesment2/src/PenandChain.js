import React from 'react';
import Pen_Clicks from './audio/Pen_Clicks.wav';
import Chains_Rattling from './audio/Chains_Rattling.wav'

class PenandChain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4,
        }
        this.Pen_Clicks = new Audio(Pen_Clicks);
        this.Chains_Rattling = new Audio(Chains_Rattling);
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({ bpm });
        }

    }

    startStop = () => {
        if (this.state.playing) {

            clearInterval(this.timer);
            this.setState({
                playing: false
            })

        }
        else {
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000)
            this.setState({
                count: 0,
                playing: true,

            }, this.playClick);
        }
        //this.click1.play();
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;

        if (count % beatsPerMeasure == 0) {
            this.Chains_Rattling.play();
        }
        else {
            this.Pen_Clicks.play();
        }

        this.setState(state => ({
            count: (state.count + 1) % this.state.beatsPerMeasure
        }))
    }

    render() {

        const { playing, bpm } = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <h3>PenandChain</h3>
                    <input type="range"
                        min="60"
                        max="240"
                        value={bpm}
                        onChange={this.handleBpmChange} />
                </div>
                <button onClick={this.startStop}>
                    {playing ? 'stop' : 'start'}
                </button>
            </div>
        );
    }
}

export default PenandChain;