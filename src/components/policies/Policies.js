import React from "react";
import { Link } from "react-router-dom";
import PoilcyList from "./PolicyList";
import withAuthentication from "../../withAuthentication";

const Policies = ({ match }) => {
  return (
    <div>
      <div>
        <Link to={`${match.url}/new`} className="ui button positive">
          Create Policy
        </Link>
      </div>
      <PoilcyList />
    </div>
  );
};

export default withAuthentication(Policies);
