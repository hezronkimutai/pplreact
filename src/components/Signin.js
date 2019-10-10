import React from 'react';
function Signin() {
  return (
    <div className="signin-container">
              <div class="form">
            <img class="icon" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png"/>
             
                <h4 id="error" class="error"></h4>
                <div class="row">
                    <div class="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div class="col-75">
                        <input type="email" id="email" name="email" placeholder="Your email.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="password">Password</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="password" name="password" placeholder="Your password.." required/>
                    </div>
                </div>
                <div class="row">
                    <button  class="submit"  value="Submit" onclick="signin()">Submit</button>
                </div>
                
        </div>
    </div>
  );
}

export default Signin;
