import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './calendar.css';

import MomentLocaleUtils from 'react-day-picker/moment';

import 'moment/locale/ja';




export default class LocalizedExample extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      locale: 'en',
    };
  }
  handleSelectChange(e) {
    this.setState({
      locale: e.target.value,
    });
  }
  render() {
    return (
      <div>

        <DayPicker
          localeUtils={MomentLocaleUtils}
          locale={this.state.locale}
  />

          <p>
            <select onChange={this.handleSelectChange}>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </p>
      </div>
    )
  }
}
