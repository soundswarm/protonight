import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import graph from 'fbgraph'
let accessToken, id

class App extends Component {

  componentWillMount() {
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '367405396969753',
    //     xfbml      : true,
    //     version    : 'v2.6'
    //   });
    // };
    // FB.AppEvents.logPageView();    

    // (function(d, s, id){
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "//connect.facebook.net/en_US/sdk.js";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));


    // button code
    {/* <div id="fb-root"></div>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=367405396969753";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')); */}

  }
  onClick() {
    
  }

  callback(res) {
    console.log(res)
    accessToken = res.accessToken
    id = res.id
    graph.setAccessToken(accessToken);
    graph.get(`${id}`, (err, res)=>{
      console.log('graphres', err, res)
    })
  }

  render() {
    return (
      <div>
        <FacebookLogin
          appId="367405396969753"
          autoLoad={true}
          fields="name,email,picture"
          scope="user_friends, read_custom_friendlists"
          onClick={this.onClick.bind(this)}
          callback={this.callback.bind(this)} />
        {/* <div id="fb-root"></div>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false"></div>
        <button className='btn btn-primary' >
          login with facebook
        </button> */}
      </div>
    );
  }
}

export default App;
