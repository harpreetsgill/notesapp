import React, {Component} from 'react';
import Moment from 'react-moment';

class ViewNotes extends Component {
    render() {
        return (       
            <>
            {this.props.notes.map(item => (
                
                
                <div key={item.noteId}
                    className={item.color}
                >
                    <div className="title-div">
                            <h2 className="added-title-field">{item.title}</h2>
                    </div>
                    
                    <div className="added-datetime-div">
                        <h3 className="added-datetime-h3">
                            <Moment
                                date={item.date}
                                parse="YYYY-MM-DD hh:mm"
                                format="MMM D, YYYY"
                            />
                        </h3 >
                        <h3 className="added-datetime-h3">
                            <Moment
                                date={item.date}
                                parse="YYYY-MM-dd hh:mm"
                                format="h:mma"
                            />
                        </h3>
                    </div>
                    
                    <p className="added-note-p">{item.note}</p>
                    <button
                        className="btn-del-note"
                        onClick={() => this.props.deleteNote(item)}
                    >
                        X
                    </button>
                </div>
            ))}
            </>
        );
    }
}

export default ViewNotes;