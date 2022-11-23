import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SyncOutlined } from '@ant-design/icons';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { fetchSingleCrypto } from '../redux/actions';
import Headline from '../components/Headline';
/*eslint-disable */

function CryptoDetails() {
  // get crypto id from dynamic route params
  const { cryptoId } = useParams();

  // set dispatch hook
  const dispatch = useDispatch();

  // fetch a single crypto by id on pgae mount
  useEffect(() => {
    dispatch(fetchSingleCrypto(cryptoId));
  }, [cryptoId, dispatch]);

  // get single crypto details from the store
  const { cryptoDetails, isLoading } = useSelector((state) => state.crypto);

  return (
    <div className="container text-white">
      {isLoading && (
        <SyncOutlined
          spin
          style={{ fontSize: '32px' }}
          className="d-flex justify-content-center align-items-center"
        />
      )}
      {!isLoading && (
        <>
          <Headline
            page="details"
            cryptoDetails={cryptoDetails}
            cryptoCount={0}
          />

          <div className="row pt-3 pb-3 container fw-normal">
            PRIMARY INFORMATION:
          </div>

          <table className="table table-striped">
            <tbody>
              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  Name
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.name}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  Rank
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.rank}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  Price
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.priceUsd} usd
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  changePercent24Hr
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.changePercent24Hr} usd
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  Symbol
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.symbol}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  MarketCapUsd
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.marketCapUsd}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  Supply
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.supply}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ width: '60%', border: '2px solid white' }}>
                  MaxSupply
                </td>
                <td style={{ width: '20%', border: '2px solid white' }}>
                  {cryptoDetails.maxSupply ? cryptoDetails.maxSupply : 'N/A'}
                </td>
                <td style={{ width: '10%', border: '2px solid white' }}>
                  <a style={{ color: '#FFF' }} href={cryptoDetails.explorer}>
                    <BsFillArrowRightCircleFill />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CryptoDetails;
