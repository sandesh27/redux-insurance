import React from "react";
import { Link } from "react-router-dom";
import ClaimsList from "./ClaimsList";
import withAuthentication from "../../withAuthentication";

const Claims = ({ match }) => {
  return (
    <div>
      <div>
        <Link to={`${match.url}/new`} className="ui button positive">
          Add Claim
        </Link>
      </div>
      <ClaimsList />
    </div>
  );
};

export default withAuthentication(Claims);
