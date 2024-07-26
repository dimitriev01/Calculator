import { Calculator } from 'entities/calculator';
import { Layout } from 'shared/ui/layout';
import 'antd/dist/reset.css';
import './styles/styles.scss';

export const App = () => {
  return (
    <Layout>
      <Calculator />
    </Layout>
  );
};
