import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./css/cssFile.css";

const Home = () => {
  return (
    <Jumbotron>
      <div className="homeDiv">
        <h2>Objectives</h2>
        <p>
          On the popular movies tab, you will see an existing implementation of
          making an API call. However, there are 3 bugs in this site that you
          would need to fix.
        </p>
        <p>
          <ol>
            <li>
              Break the movies into a child class and pass the values with props
              <strong> (10 points)</strong>
            </li>
            <li>
              The movies aren't showing the original language properly. Replace
              the values of language field as follows:
              <strong>(5 points)</strong>
            </li>
            <ul>
              <li>en - English</li>
              <li>hi- Hindi</li>
              <li>it - Italian</li>
              <li> ja - Japanese</li>
            </ul>
            <li>
              Write a function to return the names of the genres from{" "}
              <a href="https://developers.themoviedb.org/3/movies/get-movie-details">
                Get movies
              </a>{" "}
              <strong>(10 points)</strong>
            </li>
          </ol>
        </p>
        <p>
          <strong>Note: </strong> You are welcome to use whatever libraries you
          may choose to wish from npm.
        </p>
      </div>
    </Jumbotron>
  );
};

export default Home;
