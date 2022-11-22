import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SyncOutlined } from '@ant-design/icons';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { fetchCryptos } from '../redux/actions';
import Headline from '../components/Headline';
import truncateNum from '../helpers';

function CryptoList() {
  // search values
  const [searchInput, setInputSearch] = useState('');

  // set dispatch hook
  const dispatch = useDispatch();

  // execute fetch crypto list on page mount
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  // get the cryptos from store
  const { cryptoList, isLoading } = useSelector((state) => state.crypto);

  const cryptoCount = cryptoList.length;

  // const handleSearchFilter = () => {
  //   cryptoList = cryptoList.filter(({ name }) => name === searchInput);
  // };

  const handleSearchChange = (e) => {
    setInputSearch(e.target.value.trim());

    console.log(searchInput);
  };

  return (
    <div className="container">
      {isLoading && (
        <SyncOutlined
          spin
          style={{ fontSize: '32px' }}
          className="d-flex justify-content-center align-items-center"
        />
      )}
      {!isLoading && (
        <>
          <Headline page="list" cryptoCount={cryptoCount} cryptoDetails={{}} />

          <div className="row pt-4 pb-4 container fw-normal">
            <div className="col">
              {' '}
              <input
                onChange={handleSearchChange}
                name="search"
                className="form-control"
                type="search"
                placeholder="Type name or price value..."
              />
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-light">
                Search
              </button>
            </div>
          </div>

          <div className="grid-tmp">
            {cryptoList.map((crypto) => (
              <div key={crypto.id} className="grid-tmp-item p-2 text-end">
                <div className="grid-item-top">
                  <NavLink
                    style={{ color: '#fff' }}
                    to={`/details/${crypto.id}`}
                  >
                    <BsFillArrowRightCircleFill
                      title="Click to view Details"
                      role="presentation"
                      className="hover"
                    />
                  </NavLink>
                </div>

                <div className="grid-item-bottom fw-normal">
                  <h4>{crypto.name.toUpperCase()}</h4>
                  <p>
                    {truncateNum(crypto.priceUsd, 8)}
                    {' '}
                    usd
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CryptoList;
