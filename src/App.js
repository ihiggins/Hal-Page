import "./App.css";
import pic from "./halPic.PNG";
import control from "./controls.PNG";
import WidgetBot from "@widgetbot/react-embed";

function App() {
  var handleClick = () => {
    alert("Unable to generate invite: SERVER LIMIT REACHED");
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-logo">IH</div>
        <div className="button" onClick={handleClick}>
          Add To Server
        </div>
      </div>
      <header className="content">
        <div className="landing">
          <div className="landing-text">
            <div className="landing-title">
              Hal, <br /> Music Bot for Discord
            </div>

            <p>
              Play music directly into discord calls. Create and store your own
              playlists now with minimal downtime. Login to try the bot.
            </p>
            <h4>Currently Limited To 100 Servers.</h4>
          </div>

          <div className="landing-widget">
            <WidgetBot
              server="529063110708035584"
              channel="782445584006643723"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <p>{/* <code>Try the bot here.</code> */}</p>

        <div className="over-view">
          <div className="over-view-wrapper">
            <img className="over-view-pic" src={pic} alt="bot" />
          </div>
          <div className="over-view-text">
            <h2>Hal can do a lot.</h2>
            <p>
              The bot is built in Node Js using{" "}
              <a href="https://discord.js.org/#/"> Discord Js</a>. It plugs into
              a MongoDB database to manage and store playlists.
            </p>
          </div>
        </div>
        <div className="spliter"></div>
        <div className="controls">
          <div className="controls-text">
            <h2>Controls</h2>
            <p>
              > Must have a text channed named [ bot-commands ]. <br />> Type
              <code> join / leave</code> to add to voice calls. <br />> Type
              <code> create / delete [Name]</code> to control playlists. <br />
              > The buttons below the playlist tab play the corresponding
              playlist.
              <br />
              > The buttons below queue are: skip song, shuffle playlist, remove
              song from playlist.
              <br />> Typing anything creates a search, The buttons will add the
              selected song to the current playlist
            </p>
          </div>

          <div className="controls-wrapper">
            <img className="controls-pic" src={control} alt="bot" />
          </div>
        </div>
      </header>
      <div className="footer"></div>
    </div>
  );
}

export default App;
