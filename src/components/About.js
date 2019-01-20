import React from 'react';

import logoImg from '../images/vroom-logo.svg';


export default () => (
  <div className="container">
    <br/>
    <h1 className="is-size-1">About</h1>
    
    <div className="content">
      <h1 align="center">
        <br />
        <a href="#"><img src={logoImg} alt="VRoom" width={400} /></a>
        <br />
      </h1>
      <h4 align="center">A platform for people sleeping in their vehicles to find overnight parking. 🚍</h4>
      <p align="center">
        <a href="#the-issue">The Issue</a> •&nbsp;
        <a href="#the-audience">The Audience</a> •&nbsp;
        <a href="#our-solution">Our Solution</a> •&nbsp;
        <a href="#api-used">API Used</a> •&nbsp;
        <a href="#credits">Credits</a> •&nbsp;
        <a href="#license">License</a>
      </p>
      <h2 id="theissue">The Issue</h2>
      <ul>
        <li>30% of the homeless population in Santa Cruz resides in their vehicles. </li>
        <li>Finding a place to park your car and sleep in it can be hard.</li>
        <li>Most of public parking are patrolled by local police.</li>
        <li>Many people are offering their drive-ways for rent on Craigslist, given the housing crisis in the county.</li>
        <li>Government led programs are scarce and do not fit the demand.</li>
      </ul>
      <h2 id="theaudience">The Audience</h2>
      <ul>
        <li>Our app is aimed to anyone sleeping in their car or van of preference.</li>
      </ul>
      <h2 id="oursolution">Our Solution</h2>
      <ul>
        <li>Our goal is to make an app to connect people that have an extra parking space they would like to offer with people that need a safe place to park their vehicle overnight.</li>
      </ul>
      <h2 id="apiused">API Used</h2>
      <p>For this application, we used the following APIs :</p>
      <ul>
        <li>FireBase</li>
      </ul>
      <h2 id="credits">Credits</h2>
      <p>This software uses the following open source packages:</p>
      <h2 id="license">License</h2>
      <p>MIT</p>
      <br/>
    </div>
  </div>
);
