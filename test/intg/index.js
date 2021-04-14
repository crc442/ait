customElements.define('my-comp' , 
  class extends HTMLElement {
    constructor() {
      super();

      let template = document.getElementById('my-comp');
      let tempContent = template.content;

      this.attachShadow({ mode: 'open' })
      .appendChild(tempContent.cloneNode(true));
    }
  }
);