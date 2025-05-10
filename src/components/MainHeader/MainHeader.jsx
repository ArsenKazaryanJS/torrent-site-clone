import './mainHeader.css';

export const MainHeader = () => {
  return (
    <div className="header-container">
      
      <div className="title-section">
        <h1 className="main-title">
          Торрент <span className="highlight">Игруха</span>
        </h1>
        <p className="subtitle">
          Официальный сайт | Качай сколько влезет ;)
        </p>
      </div>
      <div className="buttons">
        <button className="btn green">Топ 10 Онлайн игр</button>
        <button className="btn green">Топ 100 игр</button>
        <button className="btn green">С русской озвучкой</button>
        <button className="btn blue">Репаки от Игрухи</button>
      </div>
      
    </div>
  );
};
