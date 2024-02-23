import Logo from '@/assets/gvlar/logoWhite.svg';
import style from './footerMobile.module.scss';
import Effect from '@/img/effect/small.png';
import ButtonArrow from '../components/ButtonArrow';
import Address from '../components/Address';
import Creci from '../components/Creci';
import Clock from '../components/Clock';
import Whatsapp from '../components/Whatsapp';
import EmailGVLAR from '../components/EmailGVLAR';
import Contact from '../components/Contact';
import SocialNetWork from '../components/SocialNetWork';
import NavFooter from '../components/NavFooter';
import { Environment } from '@/env';
import LogoTipoDT from '@/img/footer/logoTipoDonutsTech.svg'

const FooterMobile = () => {
  return (
    <footer className={style.footer}>
      <img src={Effect} className={style.effect} alt='efeito' />
      <div className={style.information}>
        <div className={style.logo}>
          <Logo />
          <ButtonArrow />
        </div>
        <div className={style.box}>
          <div className={style.main}>
            <div className={style.main__first}>
              <Address />
              <Creci />
              <Clock />
              <Whatsapp />
              <EmailGVLAR />
              <Contact />
            </div>
            <div className={style.main__effect} />
            <div className={style.main__second}>
              <div className={style.main__second__nav}>
                <NavFooter />
              </div>
              <SocialNetWork />
            </div>
          </div>
          <a
            className={style.act}
            target='_blank'
            rel='noopener noreferrer'
            href={`${Environment.URL_DOMINIO}/termos`}
          >
            termos e condições de uso
          </a>
        </div>
        <div className={style.main__third}>
          <p className={style.website}>
            Copyright 2023 © GVLAR Imóveis Creci: 37.691-J | Todos os Direitos Reservados
          </p>
          <a
            className={style.mn}
            target='_black'
            rel='noopener'
            href='https://www.instagram.com/donuts.tech/'
          >
            <div className={style.mn__box}>
              <p>Pensado, Criado e Desenvolvido por</p>
              <div>
                <div className={style.mn__logo}/>
                <LogoTipoDT />
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
