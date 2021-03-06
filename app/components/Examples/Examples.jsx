var React = require('react');
var {Link} = require('react-router');

//A stateless component
var Examples = (props) => {
  return(
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Coamo'>Coamo, PR</Link>
          </li>
          <li>
            <Link to='/?Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
  );
};

module.exports = Examples;
