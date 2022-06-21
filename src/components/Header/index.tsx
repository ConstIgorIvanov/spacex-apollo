import React from 'react';
import clsx from 'clsx';

const Header: React.FC = () => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <div className="header">
      <div className="header--logo">
        <svg
          style={{ cursor: 'pointer' }}
          onClick={() => setHidden((hide) => !hide)}
          width="268"
          height="41"
          viewBox="0 0 268 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M62.4339 15.094H39.7698L38.9301 15.871V40.818H45.2041V31.463L45.8029 30.799H62.4347C66.6341 30.799 68.6029 29.401 68.6029 25.814V20.086C68.6021 16.493 66.6341 15.094 62.4339 15.094ZM62.4339 24.317C62.4339 26.007 61.5304 26.358 59.5616 26.358H45.8716L45.2033 25.554V20.21L45.8021 19.532H59.5616C61.5304 19.532 62.4339 19.879 62.4339 21.577V24.317Z"
            fill="#005288"
          />
          <path
            d="M80.0436 19.813L85.4424 29.6L85.1433 30.548H73.2039L70.1562 35.187H87.9284L89.16 36.115L91.9192 40.824H99.0992L83.3613 14.775"
            fill="#005288"
          />
          <path
            d="M151.437 35.757V28.833L152.083 28.143H164.094V23.734H145.057V40.823H173.139V36.435H152.111"
            fill="#005288"
          />
          <path d="M173.435 15.094H145.057V19.942H173.435V15.094Z" fill="#005288" />
          <path
            d="M113.406 19.685H136.268C135.916 16.088 134.112 15.09 129.536 15.09H113.163C107.999 15.09 106.352 16.337 106.352 21.172V34.737C106.352 39.577 107.999 40.824 113.163 40.824H129.536C134.179 40.824 135.957 39.745 136.078 36.014H113.406L112.733 35.231V20.209"
            fill="#005288"
          />
          <path
            d="M23.7065 25.118H7.07473L6.58496 24.451V20.049L7.0723 19.583H29.4932L29.7995 18.656C29.0358 16.225 27.0581 15.091 23.3857 15.091H7.81099C2.65068 15.091 1.00116 16.338 1.00116 21.173V24.017C1.00116 28.858 2.65068 30.103 7.81099 30.103H24.4056L24.9269 30.669V35.271L24.5018 35.989H5.51976V35.967H0.547759C0.547759 35.967 -0.0212092 36.32 0.000611998 36.485C0.424913 39.867 2.28699 40.825 6.74498 40.825H23.7065C28.866 40.825 30.5649 39.578 30.5649 34.738V31.195C30.5649 26.363 28.866 25.118 23.7065 25.118Z"
            fill="#005288"
          />
          <path
            d="M191.287 14.988H181.951L181.444 16.181L191.812 25.532C193.776 24.125 195.913 22.699 198.237 21.292"
            fill="#005288"
          />
          <path
            d="M199.651 32.603L208.764 40.825H218.213L218.604 39.736L204.998 27.413C203.191 29.054 201.405 30.787 199.651 32.603Z"
            fill="#005288"
          />
          <path
            d="M189.897 40.806H181.451L180.737 39.423C186.48 32.562 212.166 3.151 268 0C268 0 221.136 1.956 189.897 40.806Z"
            fill="#A7A9AC"
          />
        </svg>
      </div>
      <div className={clsx('header--info', hidden && 'hidden')}>
        <div className="header--info__item">
          SEO: <span>{'Elon Musk'}</span>
        </div>
        <div>
          NAME:<span>{'SpaceX'}</span>
        </div>
        <div>
          Summary:
          <span>
            {
              'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.'
            }
          </span>
        </div>
        <div>
          Founded: <span>{'2002'}</span>
        </div>
        <div>
          Employees: <span>{'7000'}</span>
        </div>
        <div>
          Headquarters: <span>{'Address: Rocket Road, City: Hawtgirbe, State: California'}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
