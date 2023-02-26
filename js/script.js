"use strict";

{
  const animate = document.querySelectorAll('animate');
  const options = {
    threshold: 0.3,
  }
  //  Intersection Observer API
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}

// ナビゲーションの背景のアニメーション
{
  const hero = document.getElementById('hero');
  const nav = document.getElementById('pc-nav');
  const navMenu = nav.childNodes;

  function callback(entries) {
    console.log(entries[0]);

    if (entries[0].isIntersecting) {
      nav.style.cssText = "color: #fff";
    } else {
      { nav.style.cssText = "color:#C8A08C; font-weight:bold" };
    };
  };
  const observer = new IntersectionObserver(callback);
  observer.observe(hero);
}

//ハンバーガーメニュー
{
  const HamburgerArea = document.getElementById('hamburger-icon-area');
  const spNavigation = document.getElementById('sp-navigation');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  HamburgerArea.addEventListener('click', () => {
    spNavigation.classList.toggle('display-open');
    closeIcon.classList.toggle('icon-active');
    hamburgerIcon.classList.toggle('icon-none');
  })

}