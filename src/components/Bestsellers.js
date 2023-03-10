import React from 'react';
import '../fonts/Montserrat.css';

const style = {
  base: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '32px',
    background: '#fff',
    width: '375px',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#12121F',
  },

  title: {
    fontSize: '24px',
    fontWeight: 600,
    margin: 0,
    marginBottom: '24px',
  },

  productList: {
    margin: 0,
    padding: 0,
  },
  product: {
    display: 'flex',
    height: '120px',
    padding: '0 18px',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '8px',
    borderRadius: '24px',
    transition: '.3s',
  },
  productName: {
    fontSize: '14px',
    margin: 0,
    fontWeight: 600,
    color: '#FE805C',
    marginBottom: '11px',
    cursor: 'pointer',
  },
  productBrand: {
    fontSize: '12px',
    margin: 0,
    color: '#AFAFBD',
    marginBottom: '9px',
    cursor: 'pointer',
  },
  productPrice: {
    fontSize: '14px',
    fontWeight: 600,
    margin: 0,
  },
  image: { cursor: 'pointer', fontSize: '14px', objectFit: 'cover' },
};

export const Bestsellers = ({ title, productOne, productTwo, productThree }) => {
  const handleProductEnter = ({ currentTarget }) => {
    currentTarget.style.transform = 'translateY(-3%)';
  };
  const handleProductLeave = ({ currentTarget }) => {
    currentTarget.style.transform = 'none';
  };

  return (
    <div style={style.base}>
      <h3 style={style.title}>{title}</h3>

      <ul style={style.productList}>
        <li
          style={{
            ...style.product,
            backgroundColor: '#FEF2EE',
          }}
          onMouseEnter={handleProductEnter}
          onMouseLeave={handleProductLeave}
        >
          <img style={style.image} src={productOne[3]} height="94" width="94" alt={productOne[0]} />
          <div>
            <h4 style={style.productName}>{productOne[0]}</h4>
            <p style={style.productBrand}>{productOne[1]}</p>
            <p style={style.productPrice}>{productOne[2]}</p>
          </div>
        </li>

        <li
          style={style.product}
          onMouseEnter={handleProductEnter}
          onMouseLeave={handleProductLeave}
        >
          <img style={style.image} src={productTwo[3]} height="94" width="94" alt={productTwo[0]} />
          <div>
            <h4 style={style.productName}>{productTwo[0]}</h4>
            <p style={style.productBrand}>{productTwo[1]}</p>
            <p style={style.productPrice}>{productTwo[2]}</p>
          </div>
        </li>

        <li
          style={style.product}
          onMouseEnter={handleProductEnter}
          onMouseLeave={handleProductLeave}
        >
          <img
            style={style.image}
            src={productThree[3]}
            height="94"
            width="94"
            alt={productThree[0]}
          />
          <div>
            <h4 style={style.productName}>{productThree[0]}</h4>
            <p style={style.productBrand}>{productThree[1]}</p>
            <p style={style.productPrice}>{productThree[2]}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
