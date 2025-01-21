const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img src="./image/Netflix_Logo_PMS.png" alt="로고이미지"/>
        </a>
        <div>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <button>로그인</button>
        </div>
      </nav>
      <div className="header-contents">
        <h2>영화, 시리즈 등을 <br/>무제한으로</h2>
        <h4>5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</h4>
        <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 <br/>이메일 주소를 입력하세요.</p>
        <div className="email-box">
          <input type="email" placeholder="이메일 주소"/>
          <button>시작하기 〉</button>
        </div>
      </div>
    </header>
  );
};

export default Header;