import { nextPage, prevPage } from './../store/actions/actionPaginationsState';
import { changePersonsState } from './../store/actions/actionPersonsState';
import { getPersons } from './../own-modules/fetchAPI';
import Pagination  from './Pagination.jsx';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person  from './Person.jsx';
import './../styles/persons.scss';

const mapStateToProps = state => ({
    smaller: state.navState.smaller,
    persons: state.personsState,
    activePage: state.paginationsState.activePage
});

const mapDispatchToProps = dispatch =>({dispatch});

class PersonsPage extends Component{

    constructor(props){
        super(props);
        this.requestPending = false;
    }

    nextPageLoadNumber = arr => Math.floor(arr.length/20) + 1; //check how many pages we already have + 1;

    requestNextPage = () =>{
        let self = this;
        let { persons, dispatch } = this.props;
        let page = this.nextPageLoadNumber(persons);
        self.requestPending = true;
        getPersons(page).then(response => {
            self.requestPending = false;
            dispatch(changePersonsState(response.results));
        });
    };

    componentWillMount = () => this.requestNextPage();

    eachPerson = (person) =>{
        return <Person {...person} key={person.id}/>
    };

    showPrevPage = () => {
        let { activePage, dispatch } = this.props;
        (activePage - 1) && dispatch(prevPage('persons'));
    };

    showNextPage = () =>{
        let { activePage, dispatch, persons, requestPending } = this.props;
        dispatch(nextPage('persons'));
        if(activePage === Math.floor(persons.length/20)){this.requestNextPage();}
    };

    render(){
        let { smaller, persons, activePage } = this.props;
        let { eachPerson, showNextPage, showPrevPage, requestPending } = this;
        let paginationProps = {showNextPage, showPrevPage, activePage, requestPending, itemsNumber: persons.length};
        return (
            persons.length ?
            (<div className={`persons container ${ smaller ? "bigger": ''}`}>
                <Pagination  {...paginationProps}/>
                <div className="persons-wrapper">
                    {/*take only 20 persons related to current active page*/}
                    {persons.slice((activePage-1)*20, activePage*20).map(eachPerson)}
                </div>
                <Pagination  {...paginationProps}/>
            </div>) :  null
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);