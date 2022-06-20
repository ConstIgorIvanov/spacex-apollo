import clsx from 'clsx';
import React from 'react';
import { Explorer } from '../../types/explorer';
interface ExplorersProps {
  explorer: string;
  setExplorer: React.Dispatch<React.SetStateAction<Explorer>>;
}

const explorers = ['missions', 'dragons', 'capsules'];

const Explorers: React.FC<ExplorersProps> = ({ explorer, setExplorer }) => {
  const [hidden, setHidden] = React.useState(true);
  return (
    <div className="list--top__item">
      <div
        style={{
          cursor: 'pointer',
          marginBottom: '15px',
        }}
        onClick={() => setHidden((hide) => !hide)}>
        {explorer.toUpperCase()}
        <span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 51 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_8_4)">
              <line x1="4.3254" y1="0.620372" x2="25.3254" y2="18.6204" stroke="black" />
              <line
                y1="-0.5"
                x2="27.6586"
                y2="-0.5"
                transform="matrix(-0.759257 0.650791 0.650791 0.759257 47 1)"
                stroke="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_8_4"
                x="0"
                y="0.240753"
                width="51"
                height="26.7592"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_4" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_8_4"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </div>

      <div className={clsx('list--top__container', hidden && 'hidden')}>
        {explorers.map((item) => (
          <div
            className={clsx('list--top__explorers', hidden && 'hidden')}
            onClick={() => setExplorer(item as Explorer)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorers;
