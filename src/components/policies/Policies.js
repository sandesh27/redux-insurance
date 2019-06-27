import React from "react";
import { Link } from "react-router-dom";
import PolicyList from "./PolicyList";

const Policies = ({ match }) => {
  return (
    <div>
      <Link className="ui button blue" to={`${match.url}/new`}>
        Create Policy
      </Link>
      <PolicyList policies={[]} />
    </div>
  );
};

export default Policies;
