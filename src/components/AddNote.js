import React, {Component} from 'react';

class AddNote extends Component {

    constructor() {
        super();
        this.state = {
            color: 'card-orange',
            title: '',
            date: '',
            time: '',
            note: ''
        }
        this.changeData = this.changeData.bind(this);
        this.addData = this.addData.bind(this);
    }

    changeData(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addData(e) {
        e.preventDefault();
        let tempNote = {
            color: this.state.color,
            title: this.state.title,
            date: this.state.date + ' ' + this.state.time,
            note: this.state.note
        };

        this.props.addNote(tempNote);

        this.setState({
            color: this.state.color,
            title: '',
            date: '',
            time: '',
            note: ''
        });
    }

    render() {
        return (
            <div className={this.state.color}>
                <form onSubmit={this.addData}>
                    <label htmlFor="color">
                    </label>
                    <div className="color-div">
                        <label className="container-clr-opt-orange">
                           <input
                            type="radio"
                            name="color"
                            value="card-orange"
                            onChange={this.changeData}
                            />
                            <span className="clr-block-orange"></span>
                        </label>

                        <label className="container-clr-opt-blue">
                           <input
                            type="radio"
                            name="color"
                            value="card-blue"
                            onChange={this.changeData}
                            />
                            <span className="clr-block-blue"></span>
                        </label>

                        <label className="container-clr-opt-yellow">
                           <input
                            type="radio"
                            name="color"
                            value="card-yellow"
                            onChange={this.changeData}
                            />
                            <span className="clr-block-yellow"></span>
                        </label>

                        <label className="container-clr-opt-green">
                           <input
                            type="radio"
                            name="color"
                            value="card-green"
                            onChange={this.changeData}
                            />
                            <span className="clr-block-green"></span>
                        </label>
                    </div>
                    <label htmlFor="title">
                    </label>
                    <div className="title-div">
                        <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeData}
                        className="title-field"
                        placeholder="TITLE"
                    />
                    </div>
                    
                    <div className="datetime-div">
                        <label htmlFor="date">
                        </label>
                        <input
                            type="date"
                            value={this.state.date}
                            name="date"
                            onChange={this.changeData}
                            className="date-field"
                        />
                        <label htmlFor="time">
                        </label>
                        <input
                            type="time"
                            value={this.state.time}
                            name="time"
                            onChange={this.changeData}
                            className="time-field"
                        />
                    </div>
                    
                    <label htmlFor="note">
                    </label>
                    <textarea
                        maxLength="250"
                        value={this.state.note}
                        onChange={this.changeData}
                        name="note"
                        className="note-field"
                        placeholder="NOTE"
                    >
                    </textarea>
                    <button className="btn-add-note">
                        ADD
                    </button>
                </form>
            </div>
        )
    }
}

export default AddNote;