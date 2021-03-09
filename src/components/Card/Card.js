import React from 'react';
import CorImg from '../../images/CorImg.jpg'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  backface-visibility: hidden;
  box-sizing: border-box;
  color: rgb(102, 102, 102);
  display: block;
  float: left;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  height: 398.5px;
  line-height: 25.5px;
  margin-left: 15px;
  margin-right: 15px;
  text-size-adjust: 100%;
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 300px;
  border: 1px solid #e5e5e5;
  border-top: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const CardImageWrapper = styled.div`
    height: 50%;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CardButton = styled.button`

`;

const CardInfo = styled.div`
    height: 40%;
    background: #eee;
`;

const CardMeta = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
`;

const CardStatsWrapper = styled.div`
    .card-stats__icon {

    },

    .card-stats__value {

    }
`;

const CardStats = props => (
    <CardStatsWrapper>
        <span className="card-stats__icon">
            <FontAwesomeIcon icon={faComment} />
        </span>
        <span className="card-stats__value">
            {props.value}
        </span>
    </CardStatsWrapper>
);

export const Card = (props) => (
    <CardContainer>
        <CardImageWrapper> {/* div */}
            <CardImage src={CorImg} />
            <CardButton />
        </CardImageWrapper>
        <CardInfo>
            Some
        </CardInfo>
        <CardMeta>
            <div className="card__stats">
                {props.item.meta.stats.map(i => <CardStats icon={i.icon} value={i.value} />)}
            </div>
            <div className="card__price">
                {/* {props.meta && props.meta.price} */}
                Free
            </div>
        </CardMeta>
    </CardContainer>
);