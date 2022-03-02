import Head from 'next/head'
import Image from 'next/image'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import countryList from 'react-select-country-list'
import Select, { components } from "react-select";
import { useMemo, useState } from 'react'
import Layout from '../../comp/layout';

export function CountryFlag(props) {
  return (
    <span
      className={"flag-icon flag-icon-" + props.code}
      style={{ fontSize: props.size || "20px" }}
    />
  );
}
export const CountryFlagSelectOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CountryFlag size={props.flagSize} code={props.value.toLowerCase()} />
        {props.label}
      </div>
    </components.Option>
  );
};

export const CountryFlagValueContainer = ({ children, ...props }) => {
  const code = (props.hasValue && props.getValue()[0].value) || false;

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      {(code && <CountryFlag code={code.toLowerCase()} />) || null}
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  );
};


export default function Home() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <>
      <Layout>
      <div id="content">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <div className="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                <h3 className="text-center mt-3 mb-4">Forgot your password?</h3>
                <p className="text-center text-3 text-muted">Enter your Email or Mobile and we’ll help you reset your password.</p>
                <form id="forgotForm" className="form-border" method="post">
                  <div className="form-group">
                  <input type="text" className="form-control border-2" id="emailAddress" required="" placeholder="Enter Email or Mobile Number"/>
                  </div>
                  <button className="btn btn-primary btn-block my-4" style={{width: '100%'}}type="submit">Continue</button>
                </form>
                <p className="text-center mb-0"><a className="btn-link" href="login">Return to Log In</a> <span className="text-muted mx-3">|</span> <a className="btn-link" href="otp">Request OTP</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}
