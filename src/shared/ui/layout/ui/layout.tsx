import { ILayoutProps } from '../model/layout.types';
import { Layout as LayoutWrapper } from 'antd';
import cls from './layout.module.scss';

export const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return <LayoutWrapper.Content className={cls.layout}>{children}</LayoutWrapper.Content>;
};
