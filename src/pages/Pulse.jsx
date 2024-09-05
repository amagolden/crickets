import '../global.css';
import AppNavbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pulse() {

    return (
    <>
    <AppNavbar />
      <div className="polls-page">
        <h1>Company Pulse</h1>
        <h3>Trending Issues</h3>
        <br />
        <p>Work from home policy</p>
        <p>Q4 strategy</p>
        <p>Industry layoffs</p>
        <p>Budget for offsites</p>
        <h3>Trends Over Time</h3>
        <br />
        <img
            alt=""
            src="/dashboard.png"
            width="500"
            className="d-inline-block align-top"
            />
        <br />
        <br />
        <img
            alt=""
            src="/dashboard2.png"
            width="500"
            className="d-inline-block align-top"
            />
      </div>
    </>
  );
}

export default Pulse;