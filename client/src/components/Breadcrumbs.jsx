import { Breadcrumbs } from '@material-ui/core';

import React from 'react';

const Breadcrumbs = (props) => {
  const { handleClick } = props;
  const { links, currentPage } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link) => {
        return (
          <Link color="inherit" href={link.href} onClick={link.handleClick}>
            {link.text}
          </Link>
        );
      })}
      <Typography color="textPrimary">{currentPage}</Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumbs;
