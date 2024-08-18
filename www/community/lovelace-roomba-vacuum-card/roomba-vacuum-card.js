((LitElement) => {
  const html = LitElement.prototype.html;
  const css = LitElement.prototype.css;

  class RoombaVacuumCard extends LitElement {

    static get properties() {
      return {
          _hass: {},
          _config: {},
          stateObj: {},
          state: {},
          style: {}
      }
    }

    static get styles() {
      return css`
        .background {
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
        .title-left {
          font-size: 20px;
          padding: 16px 16px 0;
          text-align: left;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .title-right {
          font-size: 18px;
          padding: 16px 16px 0;
          text-align: right;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .content {
          cursor: pointer;
        }
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .button {
          cursor: pointer;
          padding: 16px;
        }
        .button-blank {
          cursor: pointer;
          padding: 16px 50px 16px 50px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }
        .grid-content {
          display: grid;
          align-content: space-between;
          grid-row-gap: 6px;
        }
        .grid-left {
          text-align: left;
          font-size: 110%;
          padding-left: 10px;
          border-left: 2px solid var(--primary-color);
        }
        .grid-right {
          text-align: right;
          font-size: 110%;
          padding-right: 10px;
          border-right: 2px solid var(--primary-color);
        }
        .tab-active {
          display: grid;
        }
        .tab-passive {
          display: none;
        }
        .totals {
          border-right: 2px solid var(--primary-color)
        }
        .job {
          border-right: 2px solid var(--accent-color)
        }`;
    }

    render() {
      return html`
      <ha-card .hass="${this._hass}" .config="${this._config}" class="background" style="${this.style.background}">
        ${this.state.showTitle ?
        html`<div class="grid">
          ${this.state.name ?
          html`<div class="title-left" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}">${this.state.name}</div>` : html`<div class="title-left" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}"></div>`}
          ${this.state.showMaint ?
          html`<div class="title-right" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}"><ha-icon icon="${this.getCleanMode('icon')}" style="padding-bottom: 5px; color:${this.getCleanMode('color')}"></ha-icon> <ha-icon icon="${this.getMaintStatus('icon')}" style="padding-bottom: 5px; color:${this.getMaintStatus('color')}"></ha-icon></div>` : null}
        </div>` : null }
        ${this.state.showLabels ? html`
        <div class="content grid" style="${this.style.content + this.style.text}" >
          <div class="grid-content grid-left" @click="${() => this.fireEvent('hass-more-info')}">
            <div>${this.getState('status')}</div>
            ${this.state.layout['left_2'] ? html`<div>${this.getValue(this.state.layout['left_2'])}</div>` : null}
            ${this.state.layout['left_3'] ? html`<div>${this.getValue(this.state.layout['left_3'])}</div>` : null}
            ${this.state.layout['left_4'] ? html`<div>${this.getValue(this.state.layout['left_4'])}</div>` : null}
          </div>
          <div id="total" class="${this.state.hideRightGrid ? "grid-content " : "grid-content grid-right totals"} ${this.state.defaultTotals ? "tab-active" : "tab-passive"}" @click="${() => this.tabSwap('last')}">
          ${this.state.showTotals ? html`
            ${this.state.layout['right_total_1'] ? html`<div>${this.getValue(this.state.layout['right_total_1'])}</div>` : null}
            ${this.state.layout['right_total_2'] ? html`<div>${this.getValue(this.state.layout['right_total_2'])}</div>` : null}
            ${this.state.layout['right_total_3'] ? html`<div>${this.getValue(this.state.layout['right_total_3'])}</div>` : null}
            ${this.state.layout['right_total_4'] ? html`<div>${this.getValue(this.state.layout['right_total_4'])}</div>` : null}` : null}
          </div>
          <div id="last" class="${this.state.hideRightGrid ? "grid-content " : "grid-content grid-right job"} ${this.state.defaultTotals ? "tab-passive" : "tab-active"}" @click="${() => this.tabSwap('total')}">
          ${this.state.showJob ? html`
          ${this.state.layout['right_job_1'] ? html`<div>${this.getValue(this.state.layout['right_job_1'])}</div>` : null}
          ${this.state.layout['right_job_2'] ? html`<div>${this.getValue(this.state.layout['right_job_2'])}</div>` : null}
          ${this.state.layout['right_job_3'] ? html`<div>${this.getValue(this.state.layout['right_job_3'])}</div>` : null}
          ${this.state.layout['right_job_4'] ? html`<div>${this.getValue(this.state.layout['right_job_4'])}</div>` : null}` : null}
          </div>
        </div>` : null}
        ${this.state.showButtons ? html`
        <div class="flex" style="${this.style.text}">
          ${Object.keys(this.state.buttons).map(this.renderButton.bind(this))}
        </div>` : null}
      </ha-card>`;
    }

    renderButton(key) {
      if (((key == "stop") && (this.stateObj.state == this.state.robot_states.ready)) || ((key == "dock") && (this.stateObj.state == this.state.robot_states.ready) && (!this.state.cleanBase)) || (this.stateObj.state == this.state.robot_states.not_ready) || (this.stateObj.state == this.state.robot_states.pending) || (this.stateObj.state == this.state.robot_states.empty) || ((key =='dock') && (this.state.mode == 'mop') && ((this.stateObj.attributes['phase'] === this.state.robot_states.charge) || (this.stateObj.attributes['phase'] === this.state.robot_states.idle)))) {
        return this.state.buttons[key]
        ? html`<div class="button-blank" style="cursor:default" @click="${() => this.tabSwap('total')}"></div>`
        : null;
      } else if (key != "blank") {
        return this.state.buttons[key]
          ? html`<div class="button" @click="${() => this.callService(key)}"><ha-icon icon="${this.getButton(key,"icon")}"></ha-icon>  ${this.getButton(key,"label")}</div>`
          : null;
      } else {
        return this.state.buttons[key]
          ? html`<div class="button" style="cursor:default" @click="${() => this.tabSwap('total')}"></div>`  
          : null;
      }
    }

    getValue(field) {
      if (field === 'blank') {
        return `‎‎‎‏‏‎ ‎`;
      }
      if ((this.state.attributes[field] === 'clean_base') && (!this.state.cleanBase)) { 
        field = this.state.attributes.bin;
        const bin_check = this.state.attributes.bin_present;
        const value = (this.stateObj && this.state.attributes[bin_check] in this.stateObj.attributes)
          ? this.stateObj.attributes[this.state.attributes[bin_check]]
          : (this._hass ? this._hass.localize('state.default.unavailable') : this.state.labels['unavailable']);
        if (value === 'No') {
          return `${this.state.labels[field]}: ${this.state.labels['missing']}`;
        };
      };
      if ((this.state.attributes[field] === 'evac_events') && (!this.state.cleanBase)) {  return `` };
      const value = (this.stateObj && this.state.attributes[field] in this.stateObj.attributes)
          ? this.stateObj.attributes[this.state.attributes[field]]
          : (this._hass ? this._hass.localize('state.default.unavailable') : this.state.labels['unavailable']);
      return `${this.state.labels[field]}: ${value}`;
    };

    getState(field) {
      const value = this.stateObj.state;
      if (this.state.autoSwitch) {
        if (((value !== this.state.robot_states.ready) && (value !== this.state.robot_states.not_ready)) ? this.tabSwap('last') : this.tabSwap('total'));
      }
      return `${this.state.labels[field]}: ${value}`;
    };

    getMaintStatus(field) {
      const re = new RegExp("(True|true)");
      switch(field) {
        case "icon":
          return `mdi:progress-wrench`;
        case "color":
          if (re.test(this.stateObj.attributes['maint_due'])) {
            return `red`;
          } else {
            return `green`;
          }
      }       
    };

    getCleanMode(field) {
      switch(field) {
        case "icon":
          if (`${this.state.mode}` === 'mop') {
            switch(this.stateObj.attributes['clean_mode']) {
              case 1:
                return `mdi:water-minus`;
              case 2:
                return `mdi:water`;
              case 3:
                return `mdi:water-plus`;
              default:
                return ``;
            }
          } else {
            switch(this.stateObj.attributes['clean_mode']) {
              case 'Auto':
                return `mdi:alpha-a-box`;
              case 'One':
                return `mdi:numeric-1-box`;
              case 'Two':
                return `mdi:numeric-2-box`;
              default:
                return ``;
            }
          }
        case "color":
          if (`${this.state.mode}` === 'mop') {
            return `#329FE6`;
          } else {
            return `white`;
          }
      }       
    };

    getButton(index, field) {
      switch(index) {
        case "startstop":
          if (this.stateObj.state === this.state.robot_states.ready) {
            // Full Clean
            switch(field) {
              case "label":
                return this.state.labels['full_clean'];
              case "icon":
                return `mdi:play`;
              case "action":
                return `start`;
            }
          } else if ((this.stateObj.attributes['phase'] === this.state.robot_states.paused) || (this.stateObj.attributes['phase'] === this.state.robot_states.stuck) || (this.stateObj.attributes['phase'] === this.state.robot_states.charge)) {
            // Resume
            switch(field) {
              case "label":
                return this.state.labels['resume'];
              case "icon":
                return `mdi:play-pause`;
              case "action":
                  return `resume`;
            }
          } else {
            // Pause
            switch(field) {
              case "label":
                return this.state.labels['pause'];
              case "icon":
                return `mdi:pause`;
              case "action":
                  return `pause`;
            }
          }
        case "dock":
          if ((this.stateObj.attributes['phase'] === this.state.robot_states.charge) || (this.stateObj.attributes['phase'] === this.state.robot_states.idle)) {
            // Empty
            switch(field) {
              case "label":
                return this.state.labels['empty'];
              case "icon":
                return `mdi:home-minus`;
              case "action":
                  return `dock`;
            }
          } else {
            // Pause
            switch(field) {
              case "label":
                return this.state.labels['dock'];
              case "icon":
                return `mdi:home-minus`;
              case "action":
                  return `dock`;
            }
          }
        case "stop":
          // Stop
          switch(field) {
            case "label":
              return this.state.labels['stop'];
            case "icon":
              return `mdi:stop`;
            case "action":
              return `stop`;
          }
      }       
    };

    tabSwap(tab) {
      // Swap Tabs
      switch(tab) {
        case "last":
          if (!this.state.showJob) { return; }
          var tabLast = this.shadowRoot.getElementById("total");
          if (tabLast !== null) { tabLast.style.display = "none" };
          var tabTotal = this.shadowRoot.getElementById("last");
          if (tabTotal !== null) { tabTotal.style.display = "grid" };
          break;
        case "total":
          if (!this.state.showTotals) { return; }
          var tabLast = this.shadowRoot.getElementById("last");
          if (tabLast !== null) { tabLast.style.display = "none" };
          var tabTotal = this.shadowRoot.getElementById("total");
          if (tabTotal !== null) { tabTotal.style.display = "grid" };
      }
    };

    callService(service) {
      this._hass.callService('rest_command', this.state.robot_action , {command: this.getButton(service,"action")});
    }

    fireEvent(type, options = {}) {
      const event = new Event(type, {
          bubbles: options.bubbles || true,
          cancelable: options.cancelable || true,
          composed: options.composed || true,
      });
      event.detail = {entityId: this.stateObj.entity_id};
      this.dispatchEvent(event);
    }

    getCardSize() {
      if (this.state.name && this.state.showButtons) return 5;
      if (this.state.name || this.state.showButtons) return 4;
      return 3;
    }

    setConfig(config) {
      const labels = {
        status: 'Status',
        mode: 'Mode',
        battery: 'Battery',
        clean_base: 'Clean Base',
        bin: 'Bin',
        maint: 'Maint',
        total_area: 'Area',
        total_time: 'Time',
        total_jobs: 'Jobs',
        evac_events: 'Evacs',
        job_initiator: 'Source',
        job_time: 'Time',
        job_recharge: 'Resume In',
        job_expires: 'Expires In',
        full_clean: 'Full Clean',
        resume: 'Resume',
        pause: 'Pause',
        empty: 'Empty Bin',
        dock: 'Dock',
        stop: 'Stop',
        tank: 'Tank',
        pad: 'Pad',
        missing: 'Missing!',
        unavailable: 'Unavailable'
      };

      const robot_states = {
        not_ready: 'Not Ready',
        ready: 'Ready',
        paused: 'Paused',
        stuck: 'Stuck',
        pending: 'Pending',
        charge: 'Charge',
        idle: 'Idle',
        empty: 'Empty'
      };

      const attributes = {
        status: 'state',
        battery: 'battery',
        mode: 'phase',
        clean_base: 'clean_base',
        bin: 'bin',
        bin_present: 'bin_present',
        maint_due: 'maint_due',
        total_area: 'total_area',
        total_time: 'total_time',
        total_jobs: 'total_jobs',
        evac_events: 'evac_events',
        job_initiator: 'job_initiator',
        job_time: 'job_time',
        job_recharge: 'job_recharge',
        job_expires: 'job_expires',
        tank: 'tank',
        pad: 'pad'
      };

      const buttons = {
          startstop: true,
          blank: false,
          stop: true,
          dock: true
      };

      const layout_vacuum = {
        left_2: 'mode',
        left_3: 'battery',
        left_4: 'clean_base',
        right_total_1: 'total_area',
        right_total_2: 'total_time',
        right_total_3: 'total_jobs',
        right_total_4: 'evac_events',
        right_job_1: 'job_initiator',
        right_job_2: 'job_time',
        right_job_3: 'job_recharge',
        right_job_4: 'job_expires',
      };

      const layout_mop = {
        left_2: 'mode',
        left_3: 'battery',
        left_4: 'tank',
        right_total_1: 'total_area',
        right_total_2: 'total_time',
        right_total_3: 'total_jobs',
        right_total_4: 'pad',
        right_job_1: 'job_initiator',
        right_job_2: 'job_time',
        right_job_3: 'job_recharge',
        right_job_4: 'job_expires',
      };

      if (!config.entity) throw new Error('Please define an entity.');
      const re = new RegExp("(sensor|vacuum)");
      if (!re.test(config.entity.split('.')[0])) throw new Error('Please define a sensor or vacuum entity.');

      this.state = {
        mode: config.mode || 'vacuum',
        showTotals: config.totals !== false,
        showJob: config.job !== false,
        showButtons: config.buttons !== false,
        showMaint: config.maint !== false,
        showLabels: config.labels !== false,
        showName: config.name !== false,
        cleanBase: config.clean_base !== false,
        showTitle: (config.name !== false || config.maint !== false),
        defaultTotals: config.defaultjob !== true ? (config.totals !== false ? true : false) : (config.job !== false ? false : true), 
        hideRightGrid: (config.totals === false && config.job === false),
        autoSwitch: config.autoswitch !== false,
        robot_action: config.mode === 'mop' ? config.robot_action || 'mop_action' : config.robot_action || 'vacuum_action',

        buttons: Object.assign({}, buttons, config.buttons),
        attributes: Object.assign({}, attributes, config.attributes),
        robot_states: Object.assign({}, robot_states, config.robot_states),
        labels: Object.assign({}, labels, config.labels),
        layout: config.mode === 'mop' ? Object.assign({}, layout_mop, config.layout) : Object.assign({}, layout_vacuum, config.layout),
      };

      this.style = {
        text: `cursor: pointer; color: ${config.image !== false ? 'white; text-shadow: 0 0 10px black;' : 'var(--primary-text-color);'}`,
        content: `padding: ${config.showButtons ? '16px 16px 4px' : '16px'};`,
        background: config.image !== false ? config.mode === 'mop' ? `background-image: url('${config.image || '/hacsfiles/lovelace-roomba-vacuum-card/mop.png'}')`
         : `background-image: url('${config.image || '/hacsfiles/lovelace-roomba-vacuum-card/vacuum.png'}')` : ''
      };

      this._config = config;
    }

    set hass(hass) {
      this._hass = hass;
      
      if (hass && this._config) {
        this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;

        if (this.stateObj && this.state.showName) {
          this.state.name = this._config.name || this.stateObj.attributes.friendly_name;
        }
      }
    }
  }

  customElements.define('roomba-vacuum-card', RoombaVacuumCard);
})(window.LitElement || Object.getPrototypeOf(customElements.get("hui-masonry-view") || customElements.get('hui-view')));
