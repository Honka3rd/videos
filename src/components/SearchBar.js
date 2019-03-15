import React,{Component} from 'react';

class SearchBar extends Component{
    state = {term:''};

    onChangeHandler=(event)=>{
        this.setState({term: event.target.value})
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler} className="ui form">
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeHandler}/>
                    </div>
                </form>
            </div>
        )
    };
}

export default SearchBar;