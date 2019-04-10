import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import { Toast } from "@shopify/app-bridge/actions";
import { Page } from "@shopify/polaris";

class Start extends Component {
  static contextTypes = {
    polaris: PropTypes.object
  };

  showToast() {
    console.log("SHOW TOAST");
    console.log(this.context.polaris.appBridge);
    const toastNotice = Toast.create(this.context.polaris.appBridge, {
      message: "Test Toast",
      duration: 5000
    });
    toastNotice.dispatch(Toast.Action.SHOW);
  }

  render() {
    this.showToast();
    return (
      <Page title="Do you see toast?">
        <p>I do not see toast.</p>
      </Page>
    );
  }
}

export default Start;