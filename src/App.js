import './App.css';
import  {Myprofile, AlertName} from './profile/profile';
function App() {
  const handleName = fullName => alert(fullName);
  return (
    <div className="App" className="container">
    <div className="row">
		<div className="col-lg-3 col-sm-6">

            <div className="card hovercard">
                <div className="cardheader">

                </div>
                <div className="avatar">
                <Myprofile><img src="/me.jpg" alt="" /></Myprofile>

                </div>
                <div className="info">
                    <div className="title">
                    <AlertName  handleName={handleName} />
                     </div>
                    <div className="desc">
                    <Myprofile fullName="Ouerghui Yosra"/>
                    </div>
                    <div className="desc">
                    <Myprofile bio="New graduate | Master's degree in Information systems"/>
                     </div>
                    <div className="desc">
                    <Myprofile profession="Student in GOMYCODE" />
                    </div>
                </div>
                <div className="bottom">
                    <a className="btn btn-primary btn-twitter btn-sm" href=""> 
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a class="btn btn-danger btn-sm" rel="publisher" href="">
                     <i class="fa fa-github"></i>
                 </a>
  
                    <a class="btn btn-primary btn-sm" rel="publisher" href="">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn btn-warning btn-sm" href="" >
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

          </div>
          </div>
          </div>
  );
}

export default App;
