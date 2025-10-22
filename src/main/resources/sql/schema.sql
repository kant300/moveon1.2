-- ===============================
--  MEMBERS TABLE (회원)
-- ===============================
DROP TABLE IF EXISTS chatting;
DROP TABLE IF EXISTS bulkbuygroup;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS email_verification;

CREATE TABLE members (
    mno INT AUTO_INCREMENT PRIMARY KEY,        -- 회원번호
    mid VARCHAR(50) NOT NULL UNIQUE,           -- 아이디
    mpwd VARCHAR(50) NOT NULL,                 -- 비밀번호
    mname VARCHAR(100) NOT NULL,               -- 닉네임
    mphone VARCHAR(20) NOT NULL UNIQUE,        -- 휴대번호
    memail VARCHAR(100) NOT NULL UNIQUE,       -- 이메일
    maddress1 VARCHAR(50) NOT NULL,            -- 주소(시)
    maddress2 VARCHAR(50) NOT NULL,            -- 주소(구)
    maddress3 VARCHAR(50) NOT NULL,            -- 주소(동)
    mdate DATE DEFAULT (CURRENT_DATE),         -- 날짜(생성)
    mdateup DATE DEFAULT (CURRENT_DATE)        -- 날짜(수정)
);
-- ===============================
--  EMAIL TABLE (이메일)
-- ===============================
CREATE TABLE email_verification (
id INT AUTO_INCREMENT PRIMARY KEY,
memail VARCHAR(100) NOT NULL UNIQUE,
code VARCHAR(10) NOT NULL,
purpose VARCHAR(20), -- findpwd, signup 등
mdate DATE DEFAULT (CURRENT_DATE),
used TINYINT(1) DEFAULT 0
);

-- ===============================
--  BULKBUYGROUP TABLE (소분모임)
-- ===============================
CREATE TABLE bulkbuygroup (
    bno INT AUTO_INCREMENT PRIMARY KEY,        -- 글번호
    mno INT NOT NULL,                          -- 회원번호(FK)
    btitle VARCHAR(255) NOT NULL,              -- 제목
    bcontent VARCHAR(1000),                    -- 내용
    bdate DATE DEFAULT (CURRENT_DATE),         -- 날짜
    btotal INT NOT NULL,                       -- 인원(총)
    bcount INT NOT NULL,                       -- 인원(현재)
    CONSTRAINT fk_bulk_member FOREIGN KEY (mno)
        REFERENCES members(mno)
        ON DELETE CASCADE
);

-- ===============================
--  CHATTING TABLE (채팅)
-- ===============================
CREATE TABLE chatting (
    cno INT AUTO_INCREMENT PRIMARY KEY,        -- 채팅번호
    mno INT NOT NULL,                          -- 회원번호(FK)
    bno INT NOT NULL,                          -- 글번호(FK)
    mmessage VARCHAR(1000) NOT NULL,           -- 메시지
    cdate DATE DEFAULT (CURRENT_DATE),         -- 날짜
    CONSTRAINT fk_chat_member FOREIGN KEY (mno)
        REFERENCES members(mno)
        ON DELETE CASCADE,
    CONSTRAINT fk_chat_group FOREIGN KEY (bno)
        REFERENCES bulkbuygroup(bno)
        ON DELETE CASCADE
);
