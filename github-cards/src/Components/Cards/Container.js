import React from "react";
import styled from 'styled-components';

import Card from "./Card";

const Cont = styled.div`
    max-width: 90%;
`

class Container extends React.Component {
    state = {
        user: {},
        followers: []
    }

    componentDidMount() {
        fetch("https://api.github.com/users/CodyyLee").then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                user: data,
            })
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })

        fetch("https://api.github.com/users/CodyyLee/followers")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                followers: data
            })
            console.log(data);
        })
    }

    render() {

        return(
            <Cont>
                <Card data={this.state.user} followers={this.state.followers}/>
            </Cont>
        );
    }
}

export default Container;