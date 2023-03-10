import React, { useState } from 'react';
import { ReactComponent as CloseBtnIco } from '../images/closeBtn.svg';
import '../fonts/Montserrat.css';

const style = {
  base: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#fff',
    width: '375px',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: '.1s',
  },
  content: {
    padding: '22px 32px',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '17px',
    position: 'relative',
  },
  image: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
  username: {
    fontSize: '18px',
    margin: 0,
    marginBottom: '7px',
    fontWeight: '600',
  },
  position: {
    fontSize: '14px',
    margin: 0,
    opacity: '0.5',
  },
  label: {
    fontSize: '16px',
    margin: 0,
  },
  formContainer: {
    flexGrow: 1,
    padding: '0 32px',
    backgroundColor: '#fff',
    height: '58px',
  },
  form: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    fontSize: '15px',
  },
  submit: {
    fontSize: '15px',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    padding: '8px 0',
    cursor: 'pointer',
    transition: '.1s',
    height: 'fit-content',
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 0,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
};

export const Chat = (props) => {
  const [submitHover, setSubmitHover] = useState(false);

  return (
    <div style={style.base}>
      <div style={{ ...style.content, backgroundColor: props.backgroundColor }}>
        <div style={style.userContainer}>
          <button style={style.closeBtn} aria-label="Close">
            <CloseBtnIco />
          </button>
          <img style={style.image} src={props.image} height="48" width="48" alt="user-img" />
          <div>
            <h3 style={style.username}>{props.name}</h3>
            <p style={style.position}>{props.position}</p>
          </div>
        </div>
        <p style={style.label}>{props.label}</p>
      </div>

      <div style={style.formContainer}>
        <form style={style.form} onSubmit={(e) => e.preventDefault()}>
          <input style={style.input} placeholder="Type your message..."></input>
          <input
            style={{
              ...style.submit,
              transform: submitHover ? 'translateY(-10%)' : 'none',
              color: props.backgroundColor,
            }}
            onMouseEnter={() => setSubmitHover(true)}
            onMouseLeave={() => setSubmitHover(false)}
            type="submit"
            value="Send"
            aria-label="Submit"
          />
        </form>
      </div>
    </div>
  );
};
