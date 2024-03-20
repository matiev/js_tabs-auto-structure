let tabContents = document.querySelectorAll('.tabs__content');
let tabs__texts = document.querySelectorAll('.tabs__text');
tabs__texts.forEach((tab, idx) => {
  tab.id += `-${idx}`
});
let tabX = 0;

class Tab {
  constructor(tabContent, tabX) {
    this.tabContent = tabContent,
    this.tabX = tabX;
    this.init()
  }
  init() {
    this.ntab = document.createElement('div');
    this.ntab.classList.add(`tab-${this.tabX}`);
    document.body.append(this.ntab)
    this.ntab.append(this.tabContent)
    tabX = tabX + 1;
    this.tabsLink();
  }
  tabsLink() {
    this.ul = document.createElement('ul');
    this.ul.classList.add('tabs__list');

    this.tabContentLength = this.tabContent.children.length;
    for (let i=0; i<this.tabContentLength; i++) {
      this.li = document.createElement('li');
      this.link = document.createElement('a');
      this.li.classList.add('tabs__item');
      this.link.classList.add('tabs__link');
      this.li.append(this.link)
      this.ul.append(this.li)
      
      this.link.href = '#';
      
      let tabContentChildrenId = `${this.tabContent.children[i].getAttribute('id')}`;
      this.link.textContent = tabContentChildrenId.slice(0, tabContentChildrenId.indexOf('-'));

      this.link.id = `#${this.tabContent.children[i].getAttribute('id')}`;
    }
    this.ntab.prepend(this.ul);
    this.start()
  }
  start() {
    let tlink = this.ul.querySelectorAll('a');
    tlink.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        let tabId = link.getAttribute('id');
        let curTab = document.querySelector(tabId);

        if (!event.target.closest('.tabs--active')) {
          tlink.forEach(item => item.classList.remove('tabs--active'));
          Array.from(this.tabContent.children).forEach(item => item.classList.remove('tabs--show'))

          link.classList.add('tabs--active');
          curTab.classList.add('tabs--show');
        }
      })
    })
    tlink[0].click();
  }
}

for (let tabContent of tabContents) {
  new Tab(tabContent, tabX)
}