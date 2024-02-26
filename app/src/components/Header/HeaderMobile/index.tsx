import { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import Menu from '@/assets/menu/MenuOpen.svg';
import Closet from '@/assets/menu/MenuCloset.svg';
import style from './headerMobile.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Context } from '@/context';
import { firstWord } from '@/functions/text';

ReactModal.setAppElement('#root');

const HeaderMobile = () => {
  const { user } = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery({ maxWidth: 820 });

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <button type='button' className={style.button_menu} onClick={toggleModal}>
        <Menu />
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        closeTimeoutMS={250}
        className={style.modal}
        contentLabel='Menu'
        style={{
          overlay: {
            backgroundColor: 'rgba(36,32,33,0.2)',
            visibility: isMobile ? 'visible' : 'hidden',
            zIndex: '3',
          },
        }}
      >
        <div
          className={classNames({ [style.openMenu]: modalIsOpen, [style.closeMenu]: !modalIsOpen })}
        >
          <button className={style.button_closet} type='button' onClick={toggleModal}>
            <Closet />
          </button>
          <nav className={style.nav}>
            <li>
              <NavLink
                className={style.home}
                onClick={() => {
                  toggleModal();
                }}
                to='/'
                preventScrollReset={true}
              >
                <div />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                preventScrollReset={true}
                className={style.filter}
                onClick={() => {
                  toggleModal();
                }}
                to='/encontrar/imovel'
              >
                <div />
                <span>Encontrar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                preventScrollReset={true}
                className={style.announce}
                onClick={() => {
                  toggleModal();
                }}
                to={user ? '/adm/imoveis' : '/login'}
              >
                <div />
                <span>Anunciar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                preventScrollReset={true}
                className={style.login}
                onClick={() => {
                  toggleModal();
                }}
                to={user ? '/adm' : '/login'}
              >
                <div />
                <span>{user ? firstWord(user.name) : 'Entrar'}</span>
              </NavLink>
            </li>
          </nav>
        </div>
      </ReactModal>
    </>
  );
};

export default HeaderMobile;
