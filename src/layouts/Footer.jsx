import React from "react";

function Footer() {
  const contents = ["header", "about", "coding", "Contact Me"];

  const onClickFooter = (e) => {
    if (e.target.tagName === "A" && !e.target.classList.contains("not")) {
      e.preventDefault();
      document.querySelector(e.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer">
      <div className="footer__inner">
        <h2>
          FRONTEND
          <span>
            PORT <br /> FOLIO
          </span>
        </h2>

        <div className="navigation">
          <h3>Navigation</h3>
          <ul onClick={onClickFooter}>
            {contents.map((content) => (
              <li key={content}>
                {content === "Contact Me" ? (
                  <a className="not" href="mailto:kimsh5993@gmail.com" title="Email" rel="noopener noreferrer">
                    Contact Us
                  </a>
                ) : (
                  <a href={`#${content}`}>{content}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__right">
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#" title="myname">
                  Kim seong hyeon
                </a>
              </li>
              <li>
                <a href="mailto:kimsh5993@gmail.com" title="gmail" rel="noopener noreferrer">
                  kimsh5993@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:kkk5993@naver.com" title="naver" target="_blank" rel="noopener noreferrer">
                  kkk5993@naver.com
                </a>
              </li>
              <li>
                <a href="#" title="myphone">
                  010-3351-0617
                </a>
              </li>
              <li>
                <a href="http://linecomputerart.com/" title="github" target="_blank" rel="noopener noreferrer">
                  라인아트 컴퓨터 학원
                </a>
              </li>
            </ul>
          </div>

          <div className="workThrough">
            <h3>Work Through</h3>
            <ul>
              <li>
                <a href="#">html,css,javascript</a>
              </li>
              <li>
                <a href="#">scss, php, mysql, mongoDB</a>
              </li>
              <li>
                <a href="#">react, vue</a>
              </li>
              <li>
                <a href="#">postman, firebase, slack, notion</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__icon">
          <a href="https://github.com/kim-0617" title="github" target="_blank" rel="noopener noreferrer">
            <span className="ir">깃허브 아이콘</span>
          </a>
          <a href="https://kim0617.tistory.com/" title="blog" target="_blank" rel="noopener noreferrer">
            <span className="ir">블로그 아이콘</span>
          </a>
          <a
            href="https://www.figma.com/file/pm3ghQhBqbBolleXCZYmYa/%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0%3A1&t=qAsXDMWl7ieQ9lnl-1"
            title="figma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ir">피그마 아이콘</span>
          </a>
          <a href="https://codepen.io/your-work" title="codepen" target="_blank" rel="noopener noreferrer">
            <span className="ir">코드펜 아이콘</span>
          </a>
          <a
            href="https://www.notion.so/PLANNING-1e1b35450c8e434b8c64ff434c1de74d"
            title="notion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ir">노션 아이콘</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
