async function demo() {
    function wait(t) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, t);
      });
    }
    
    await wait(400);
    document.querySelector('#hamburger-toggle').focus();
    await wait(400);
    document.querySelector('.content a').focus();
    await wait(400);
    document.querySelector('#hamburger-toggle').focus();
    await wait(400);
    document.querySelector('#hamburger-toggle').checked = true;
    await wait(400);
    document.querySelector('.nav-list .nav-list-item:nth-child(1) a').focus();
    await wait(200);
    document.querySelector('.nav-list .nav-list-item:nth-child(2) a').focus();
    await wait(200);
    document.querySelector('.nav-list .nav-list-item:nth-child(3) a').focus();
    await wait(200);
    document.querySelector('.nav-list .nav-list-item:nth-child(2) a').focus();
    await wait(200);
    document.querySelector('.nav-list .nav-list-item:nth-child(1) a').focus();
    await wait(200);
    document.querySelector('#hamburger-toggle').focus();
    await wait(400);
    document.querySelector('#hamburger-toggle').checked = false;
  }
  
  demo();