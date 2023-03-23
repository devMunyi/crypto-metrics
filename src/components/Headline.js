import React from 'react';
import PropTypes from 'prop-types';
import cryptoImg from './cryptos.png';

function Headline({ page = '', cryptoDetails = {}, cryptoCount = 0 }) {
  return (
    <div
      className="row border headline"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
    >
      <div className="col img-container">
        <img
          src={cryptoImg}
          alt="CRYPTO"
          className="img-fluid"
        />
      </div>
      <div className="col d-flex justify-content-center align-items-center border-start">
        <div className="div">
          <h4>{page === 'list' ? 'CRYPTO METRICS' : cryptoDetails.name}</h4>
          <p className="fw-normal">
            {' '}
            {page === 'list'
              ? `${cryptoCount} cryptocurrencies`
              : `${cryptoDetails.priceUsd} usd`}
          </p>
        </div>
      </div>
    </div>
  );
}

Headline.propTypes = {
  page: PropTypes.string.isRequired,
  cryptoDetails: PropTypes.objectOf(PropTypes.string).isRequired,
  // eslint-disable-next-line comma-dangle
  cryptoCount: PropTypes.number.isRequired,
};

export default Headline;
