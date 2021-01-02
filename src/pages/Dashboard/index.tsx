import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-github-explorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67613857?s=460&u=f2325afcbdcdef54b66ee7f6c04393cec7210d31&v=4"
            alt="Bruno Pedrosa"
          />
          <div>
            <strong>brunoPDRS/PyTicTacToe</strong>
            <p>Tic Tac Toe using Pygame</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67613857?s=460&u=f2325afcbdcdef54b66ee7f6c04393cec7210d31&v=4"
            alt="Bruno Pedrosa"
          />
          <div>
            <strong>brunoPDRS/PyTicTacToe</strong>
            <p>Tic Tac Toe using Pygame</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67613857?s=460&u=f2325afcbdcdef54b66ee7f6c04393cec7210d31&v=4"
            alt="Bruno Pedrosa"
          />
          <div>
            <strong>brunoPDRS/PyTicTacToe</strong>
            <p>Tic Tac Toe using Pygame</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
