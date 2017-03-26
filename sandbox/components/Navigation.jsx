import { setNavState } from './../store/actions/actionNavState';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/navigation.scss';

const mapStateToProps = state => ({smaller: state.navState.smaller});

const mapDispatchToProps = dispatch =>({dispatch});

class Navigation extends Component{

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        let { smaller, dispatch } = this.props;
        let nowSmaller = false;
        if((window.pageYOffset || document.documentElement.scrollTop) > 125){nowSmaller = true;}
        if(smaller !== nowSmaller){dispatch(setNavState(nowSmaller))}
    };

    render(){
        const { smaller } = this.props;
        return (
            <header className={`navigation ${ smaller ? "smaller": ''}`}>
                <span className="moto">Best movie portal have you ever seen!</span>
                <div className="content container">
                    <div className="row">
                            <ul className="social-menu  col-xs-3 col-md-2">
                                <li><a href="https://www.facebook.com/themoviedb" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"/></a></li>
                                <li><a href="https://twitter.com/themoviedb" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"/></a></li>
                                <li><a href="https://www.youtube.com/channel/themoviedb" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true"/></a></li>
                            </ul>
                            <ul className="primary  col-xs-9 col-md-10">
                                <li>
                                    <a href="/">
                                        <img src="./img/logo.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/movie">Movies</a>
                                    <ul className="sub_menu movie">
                                        <li><a href="/movie">Popular</a></li>
                                        <li><a href="/movie/top-rated">Top Rated</a></li>
                                        <li><a href="/movie/upcoming">Upcoming</a></li>
                                        <li><a href="/movie/now-playing">Now Playing</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/tv">TV SHOWS</a>
                                    <ul className="sub_menu tv">
                                        <li><a href="/tv">Popular</a></li>
                                        <li><a href="/tv/top-rated">Top Rated</a></li>
                                        <li><a href="/tv/on-the-air">On TV</a></li>
                                        <li><a href="/tv/airing-today">Airing Today</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/person">PEOPLE</a>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="search_bar">
                    <section className="search">
                        <div className="sub_media">

                        </div>
                    </section>
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);