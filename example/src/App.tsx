import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import TextareaAutosize from "react-textarea-autosize";
import "./index.css";
import githubLogo from "./assets/image/github_logo.png";
import RRuleEditor, { trans } from "recurrence-rule-builder";
import "react-datetime/css/react-datetime.css";
interface AppState {
  rrule: string;
  isCopied: boolean;
  language: string;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  state = {
    rrule: "DTSTART:20240702T102400Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR,SA,SU;UNTIL=20240718T102500Z",
    isCopied: false,
    language: "en",
  };

  getTranslation = () =>
    this.state.language === "de" ? trans.german : this.state.language === "vi" ? trans.vietnamese : undefined;

  handleChangeLanguage = (event: any) => {
    event.persist();
    const newLanguage = event.target.value;
    this.setState({ language: newLanguage });
  };

  handleChange = (newRRule: string) => {
    this.setState({ rrule: newRRule, isCopied: false });
  };

  handleCopy = () => {
    this.setState({ isCopied: true });
  };

  render() {
    const { rrule, isCopied } = this.state;

    return (
      <div className="container">
        <div className="app-navbar d-flex align-items-center">
          <a href="https://github.com/hvantoan/recurrence-rule-builder">
            &lt; Go back to Github
            <img
              className="app-navbar-ghlogo"
              src={githubLogo}
              alt="Github logo"
              style={{
                height: "20px",
              }}
            />
            /hvantoan
          </a>

          <iframe
            title="github-star"
            src="https://ghbtns.com/github-btn.html?user=hvantoan&repo=recurrence-rule-builder&type=star&count=true&size=medium"
            frameBorder="0"
            scrolling="0"
            width="78px"
            height="20px"
          />
        </div>
        <div className="app-header">
          <h1>recurrence-rule-builder</h1>
        </div>

        <div className="app-desc">
          A user-friendly UI library for easily creating recurrence rules using pure Bootstrap. Simplify your scheduling
          tasks with intuitive interfaces and seamless integration.
        </div>

        <div className="app container pt-4">
          <RRuleEditor
            onChange={this.handleChange}
            value={this.state.rrule}
            config={{
              hideStart: false,
              hideEnd: false,
              hideError: false,
              frequency: ["Daily", "Weekly", "Monthly", "Yearly"],
              end: ["After", "On date", "Never"],
              formatStart: "DD/MM/YYYY HH:mm",
              formatEnd: "DD/MM/YYYY HH:mm",
            }}
            translations={this.getTranslation()}
          />
        </div>

        <hr className="mt-5 mb-5" />

        <div className="container">
          <h5>
            <strong>Example handling</strong>
          </h5>

          <div className="px-3 pt-3 border rounded pb-3">
            <div className="form-group row d-flex align-items-sm-center">
              <div className="col-sm-2 text-sm-right">
                <span className="col-form-label">
                  <strong>RRule</strong>
                </span>
              </div>

              <div className="col-sm-8">
                <TextareaAutosize
                  className={`form-control rrule ${isCopied ? "rrule-copied" : "rrule-not-copied"}`}
                  onChange={(e) => {
                    this.setState({ rrule: e.target.value });
                  }}
                  value={rrule}
                />
              </div>

              <div className="col-sm-2 pb-2">
                <CopyToClipboard text={rrule} onCopy={this.handleCopy}>
                  <button
                    aria-label="Copy generated RRule"
                    className={`btn ${isCopied ? "btn-secondary" : "btn-primary"} float-right`}
                  >
                    {isCopied ? "Copied" : "Copy"}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="container mb-5">
          <h5>
            <strong>Config</strong>
          </h5>
          <div className="px-3 pt-3 border rounded pb-3">
            <div className="form-group row d-flex align-items-sm-center">
              <div className="col-sm-2 text-sm-right">
                <span className="col-form-label">
                  <strong>Language</strong>
                </span>
              </div>

              <div className="col-sm-8">
                <select
                  title="Choose language"
                  className="form-control"
                  value={this.state.language}
                  onChange={this.handleChangeLanguage}
                >
                  <option value="vi">Vietnamese</option>
                  <option value="en">English</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
