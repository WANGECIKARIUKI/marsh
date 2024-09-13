import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';
//import PlanCard from './PlanCard';



function Pricing() {

  const navigate = useNavigate();
  
  return (
    <div class="container py-5">
       <div class="text-center">
        <h3>Pricing</h3>
        <div class="line"></div>
        <p class="mt-2">Choose the plan that is best for you.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
            <div class="col">
              <div class="card">
               <h2 class="mt-4">Basic - <em>currently unavailable</em></h2>
               <h2 class="doller">$25 <span class="month">/1 month</span></h2>
                <div class="card-body">
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Connect to 1 device.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Free Demo before Subscription.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Access to 3 Apps.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Cancellation at any time.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Instant Updates.</p>
                 <button type="button" className="btn btn-warning mt-3" onClick = {() =>{
navigate("/Payment");}} >Get Started</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card active">
               <h2 class="mt-4">Business - <em>currently unavailable</em></h2>
               <h2 class="doller">$75 <span class="month">/3 months</span></h2>
                <div class="card-body">
                <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Connect to 3 devices.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Free Demo before Subscription.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Access to 7 Apps.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Cancellation at any time.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Instant Updates.</p>
                 <button type="button" className="btn btn-warning mt-3" onClick = {() =>{
navigate("/Payment");}} >Get Started</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
               <h2 class="mt-4">Premium- <em>Available</em></h2>
               <h2 class="doller">$300 <span class="month">/12 months</span></h2>
                <div class="card-body">
                <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Connect to 5 devices.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Free Demo before Subscription.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Access to All Apps.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Cancellation at any time.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Instant Updates.</p>
                 <button type="button" className="btn btn-warning mt-3" onClick = {() =>{
navigate("/Payment");}} >Get Started</button>
                </div>
              </div>
            </div>
           
          </div>
       </div>
    </div>
  );
}

export default Pricing;