import '../global.css';
import AppNavbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {

    return (
    <>
    <AppNavbar />
      <div className="polls-page">
        <h1>Welcome!</h1>
        <div className="p-3 mb-2 bg-light text-grey">
          <p>"Does anyone have any questions?".... *crickets*</p>
          <p>Crickets are the sound of <b>disengaged</b> employees. We're on a mission to improve team communication and <b>elimate crickets</b>.</p>
        </div>
        <h3>Manage Communications</h3>
        <p>
            <button 
                className='form-button btn btn-success homepage'
                type='submit'
                onClick={() => window.location.href='/allhands'} 
                >Schedule an All Hands
            </button>
        </p>
        <p>
            <button 
                className='form-button btn btn-success homepage'
                type='submit'
                onClick={() => window.location.href='/polls'} 
                >Create a Poll
            </button>
        </p>
        <h3>Latest Team Updates</h3>
        <p>
            <button 
                className='form-button btn btn-success homepage'
                type='submit'
                onClick={() => window.location.href='/allhands'} 
                >Latest All Hands
            </button>
        </p>
        <p>
            <button 
                className='form-button btn btn-success homepage'
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