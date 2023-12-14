import React, { FC } from 'react';
import styles from './appLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, theme, children, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [
        className,
        styles[theme],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
