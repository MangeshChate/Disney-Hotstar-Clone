import React from 'react'

export default function Footer() {
  return (
    <div className='text-light p-5 ' style={{fontFamily:"sans-serif"}}>
      <div className="row">
        <div className="col-auto">
          <div className="d-flex ">
          <div className="col-auto m-2">About Disney+ Hotstar</div>
            <div className="col-auto m-2">Terms of Use </div>
            <div className="col-auto m-2">Privacy Policy</div>
            <div className="col-auto m-2">FAQ</div>
            <div className="col-auto m-2">Feedback</div>
            <div className="col-auto m-2">Careers</div>

          </div>
          <p className="w-50 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem numquam libero blanditiis quas optio eius, labore exercitationem dolore vero magni, officia repellendus ullam!</p>
        </div>
        <div className="col">
        <div className="d-flex flex-column">

          <div className="mb-3">connect with us</div>
    
          <div className="row">
          <span className="col-auto">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916026/instagram-icon-md.png" alt="" style={{width:"3rem"}} />

          </span>
          <span className="col-auto ">
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/594px-Twitter_bird_logo_2012.svg.png" alt="" style={{width:"3rem"}} />

          </span>

          </div>
        </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column">
            <div className="mb-3">Disney+ Hotstar App</div>
            <div className="row">
              <button className="col btn btn-dark rounded-2 btn-outline-light text-light m-2">Google Play</button>
              <button className="col btn btn-dark rounded-2 btn-outline-light text-light m-2">App Store</button>

            </div>
          </div>
        </div>

      </div>
    
    </div>
  )
}
