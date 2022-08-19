import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './home.css';
import variablesJSON from '@site/variables.json'


export default function Homepage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) setMenuOpen(false);
    })

    return () => document.removeEventListener('scroll');
  }, [])

  return (
    <section className='cvrfr'>
      <div>
        <header className='cvrfr-header'>
          <nav className='top-nav'>
            <img className='nav-logo' src={useBaseUrl('/img/CVR_Wiki.png')} alt="react-cvrfr logo" />
            <div className='nav-links'>
              <Link className="docs-link" to="/docs/intro">Wiki</Link>
              <Link className="docs-link" to={variablesJSON.serveurDiscord.discordCVROfficiel}>Discord CVR Officiel</Link>
              <Link className="docs-link" to={variablesJSON.serveurDiscord.discordCVRFrance}>Discord CVR France</Link>
            </div>
            <div onClick={() => setMenuOpen(!menuOpen)} className='menu-icon'>
              {menuOpen ? 'Fermer' : 'Menu'}
            </div>
            <div className={menuOpen ? 'overlay visible' : 'overlay'}>
              <div className='overlay-links'>
              <Link className="docs-link" to="/docs/intro">Wiki</Link>
              <Link className="docs-link" to={variablesJSON.serveurDiscord.discordCVROfficiel}>Discord CVR Officiel</Link>
              <Link className="docs-link" to={variablesJSON.serveurDiscord.discordCVRFrance}>Discord CVR France</Link>
              </div>
            </div>
          </nav>
        </header>

        <div className='hero-container'>
          <div className='cvrfr-hero'>

            <h1 className='headline'>
              Maitrisez le <span>CCK</span> comme un pro !
            </h1>
            <div className='button-bar'>
              <Link to="/docs/intro" className='get-started'>
                Consulter le Wiki
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className='sponsors-container'>
        <div className='cvrfr-sponsors'>
          <p className='supporters-title'>Vous rencontrez un problème ?</p>
          <p className='support-description'>Alors n'hésitez pas à nous rejoindre sur notre serveur Discord !</p>
          <a rel='noreferrer' target="_blank" aria-label="Be The First" href='https://discord.gg/4uxcxKU2pE'>
            <button className='support-button'>
              <img className='nav-img' src={useBaseUrl('/img/discord.svg')} alt="discord logo" />
              Rejoindre le Discord
            </button>
          </a>
        </div>
      </div>
      <div>
        <footer className='cvrfr-footer'>
        Fais par Zaphkiel & Ikeiwa pour CVR France
        </footer>
        <footer className='cvrfr-infos'>
      Le discord CVR France n'est en aucun cas affilié à Alpha Blend Interactive
        </footer>
      </div>
      
    </section>
  );
}
