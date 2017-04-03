import { constants } from './../constants/constants.js';
import React, { Component } from 'react';
import './../styles/person.scss';

const { IMAGE_BASE_SRC } = constants;


class Person extends Component{
    render(){
        let { id, name, profile_path, known_for} = this.props;
        return (
            <div className="person col-xs-6 col-sm-3">
                <div className="image_content">
                    <a id={`person_${id}`} className="result" href={`/person/${id}`} title={name} alt={name}>
                        <img className="poster fade lazyautosizes lazyloaded" alt={name} src={`${IMAGE_BASE_SRC}${profile_path}`}/>
                        <span className="meta">
                            <span className="name">{name}</span>
                            <span className="sub">{known_for.map(film => film.original_title || film.original_name).join(', ')}</span>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Person;