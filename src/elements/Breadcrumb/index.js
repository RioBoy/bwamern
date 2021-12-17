import React from 'react';

import propTypes from 'prop-types';
import Button from 'elements/Button';

import './index.scss';

export default function Breadcrumb(props) {
  const className = ['breadcrumb', props.className];
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className={className.join(' ')}>
          {props.data.map((item, index) => {
            return (
              <li
                key={`breadcrumb-${index}`}
                className={`breadcrumb-item${
                  index === props.data.length - 1 ? ' active' : ''
                }`}
              >
                {index === props.data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <Button type="link" href={item.pageHere}>
                    {item.pageTitle}
                  </Button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
