import '../global.css';
import AppNavbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {

    return (
    <>
    <AppNavbar />
      <div className="polls-page">
        <h1>Welcome!</h1>
        <p>
            <button 
                className='form-button btn btn-success'
                type='submit'
                onClick={() => window.location.href='/allhands'} 
                >Latest All Hands
            </button>
        </p>
        <p>
            <button 
                className='form-button btn btn-success'
                type='submit'
                onClick={() => window.location.href='/polls'} 
                >Latest Poll
            </button>
        </p>
      </div>
    </>
  );
}

export default WelcomePage;