import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        max-width: 80%;
    }
`

class Card extends React.Component {

    render(props) {
        return(
            <Container>
                <h2>{this.props.data.login}</h2>
                <img src={this.props.data.avatar_url}/>
                <p>{this.props.data.bio}</p>

                {this.props.followers.map((user) => {
                    return <p>{user.login}</p>
                })}

                
                {console.log(this.props.followers)}
            </Container>
        )
    }
}

export default Card;