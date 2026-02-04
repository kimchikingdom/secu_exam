// 보안관제 문제 - 실시간 모니터링, 로그 분석, 사고 대응

const monitoringQuestions = {
    examQuestions: {
        security_monitoring: {
            title: '보안관제 실무',
            questions: [
                {
                    q: 'Linux에서 실시간으로 웹 서버 접근 로그를 모니터링하는 명령어는?',
                    options: [
                        'tail -f /var/log/nginx/access.log',
                        'cat /var/log/nginx/access.log',
                        'head /var/log/nginx/access.log',
                        'less /var/log/nginx/access.log'
                    ],
                    correct: 0,
                    explanation: 'tail -f 명령어는 파일의 마지막 부분을 실시간으로 모니터링합니다. -f 옵션은 파일이 업데이트될 때마다 새로운 내용을 계속 출력합니다.'
                },
                {
                    q: 'Nginx 웹 서버의 access.log 파일이 저장되는 기본 디렉토리는?',
                    options: ['/var/log/nginx/', '/etc/nginx/logs/', '/usr/log/nginx/', '/opt/nginx/logs/'],
                    correct: 0,
                    explanation: 'Nginx의 기본 로그 디렉토리는 /var/log/nginx/이며, access.log와 error.log가 저장됩니다.'
                },
                {
                    q: 'SSH로 로그인된 세션을 확인하고 강제 종료하기 위해 사용하는 명령어 조합은?',
                    options: ['ls -al, rm', 'ps -ef, kill', 'cat, echo', 'grep, sed'],
                    correct: 1,
                    explanation: 'ps -ef로 프로세스를 확인하고, kill 명령어로 해당 프로세스를 종료할 수 있습니다. netstat으로 연결을 먼저 확인할 수도 있습니다.'
                },
                {
                    q: 'Linux에서 계정별 로그인 이력을 확인하는 명령어는?',
                    options: [
                        'ls',
                        'ps',
                        'top',
                        'last'
                    ],
                    correct: 3,
                    explanation: 'last 명령어는 계정별 로그인/로그아웃 이력을 시간순으로 보여줍니다. lastlog는 최종 로그인 시간만 보여줍니다.'
                },
                {
                    q: 'Linux 시스템의 인증 로그(SSH 로그인, sudo 등)가 기록되는 파일은?',
                    options: ['/var/log/syslog', '/var/log/auth.log', '/var/log/messages', '/var/log/boot.log'],
                    correct: 1,
                    explanation: '/var/log/auth.log는 사용자 인증 관련 이벤트(SSH 로그인, sudo 사용 등)를 기록합니다.'
                },
                {
                    q: '톰캣(Tomcat) WAS의 웹 서비스 접근 로그 파일명 패턴은?',
                    options: [
                        'catalina.out',
                        'server.log',
                        'tomcat.log',
                        'localhost_access_log.*.txt'
                    ],
                    correct: 3,
                    explanation: '톰캣의 접근 로그는 localhost_access_log.날짜.txt 형식으로 저장됩니다. catalina.out은 애플리케이션 로그입니다.'
                },
                {
                    q: '톰캣의 애플리케이션 및 서버 로그가 저장되는 기본 디렉토리는?',
                    options: [
                        '/var/lib/tomcat10/logs/',
                        '/var/log/tomcat/',
                        '/etc/tomcat/logs/',
                        '/opt/tomcat/logs/'
                    ],
                    correct: 0,
                    explanation: '톰캣 10의 기본 로그 디렉토리는 /var/lib/tomcat10/logs/입니다.'
                },
                {
                    q: 'MariaDB/MySQL 서버가 모든 네트워크 인터페이스에서 접속을 받도록 설정하는 bind-address 값은?',
                    options: [
                        '0.0.0.0',
                        '127.0.0.1',
                        'localhost',
                        '192.168.1.1'
                    ],
                    correct: 0,
                    explanation: 'bind-address를 0.0.0.0으로 설정하면 모든 네트워크 인터페이스에서 접속을 받을 수 있습니다. 127.0.0.1은 로컬만 허용합니다.'
                },
                {
                    q: 'MariaDB의 설정 파일에서 bind-address를 변경한 후 반드시 수행해야 하는 작업은?',
                    options: [
                        'MariaDB 서비스 재시작',
                        '서버 재부팅',
                        '로그 삭제',
                        '방화벽 재시작'
                    ],
                    correct: 0,
                    explanation: '설정 파일 변경 후에는 systemctl restart mariadb 명령으로 서비스를 재시작해야 변경사항이 적용됩니다.'
                },
                {
                    q: 'Nginx 서버를 자동 시작하도록 설정하는 명령어는?',
                    options: [
                        'systemctl start nginx',
                        'systemctl status nginx',
                        'systemctl enable nginx',
                        'systemctl restart nginx'
                    ],
                    correct: 2,
                    explanation: 'systemctl enable은 시스템 부팅 시 자동으로 서비스를 시작하도록 설정합니다. start는 즉시 시작만 합니다.'
                },
                {
                    q: '웹 서버와 WAS를 연동할 때 Nginx 설정에서 사용하는 지시어는?',
                    options: [
                        'forward_to',
                        'redirect_to',
                        'proxy_pass',
                        'backend_server'
                    ],
                    correct: 2,
                    explanation: 'proxy_pass는 Nginx가 리버스 프록시로 동작하여 요청을 백엔드 서버(WAS)로 전달하는 지시어입니다.'
                },
                {
                    q: 'TCP 연결 상태와 포트 사용 현황을 확인하는 명령어는?',
                    options: [
                        'ifconfig',
                        'route',
                        'iptables -L',
                        'netstat -antp'
                    ],
                    correct: 3,
                    explanation: 'netstat -antp는 모든 TCP 연결(-t), 숫자로 표시(-n), 프로세스 정보(-p)를 보여줍니다.'
                },
                {
                    q: 'Linux 시스템을 CLI 모드로 변경하는 명령어는?',
                    options: [
                        'systemctl set-default graphical.target',
                        'init 5',
                        'systemctl set-default multi-user.target',
                        'startx'
                    ],
                    correct: 2,
                    explanation: 'multi-user.target은 CLI 모드(런레벨 3)를 의미하며, graphical.target은 GUI 모드(런레벨 5)입니다.'
                },
                {
                    q: 'Linux 시스템을 안전하게 종료하는 명령어는?',
                    options: [
                        'init 6',
                        'init 3',
                        'init 5',
                        'init 0'
                    ],
                    correct: 3,
                    explanation: 'init 0 또는 shutdown은 시스템을 종료합니다. init 6은 재부팅입니다.'
                },
                {
                    q: '계정별 최종 로그인 시간을 확인하는 명령어는?',
                    options: [
                        'last',
                        'who',
                        'w',
                        'lastlog'
                    ],
                    correct: 3,
                    explanation: 'lastlog는 모든 계정의 최종 로그인 시간을 보여줍니다. last는 로그인 이력 전체를 보여줍니다.'
                },
                {
                    q: 'UFW(Ubuntu Firewall)를 비활성화하는 명령어는?',
                    options: [
                        'systemctl stop ufw',
                        'systemctl enable ufw',
                        'ufw enable',
                        'iptables -F'
                    ],
                    correct: 0,
                    explanation: 'systemctl stop ufw는 방화벽을 즉시 중지합니다. systemctl disable ufw는 부팅 시 자동 시작을 해제합니다.'
                },
                {
                    q: 'MariaDB의 기본 포트 번호는?',
                    options: ['3306', '3389', '1433', '5432'],
                    correct: 0,
                    explanation: 'MariaDB/MySQL은 3306 포트를 사용합니다. 3389는 RDP, 1433은 MSSQL, 5432는 PostgreSQL입니다.'
                },
                {
                    q: '톰캣 WAS의 기본 포트 번호는?',
                    options: [
                        '80',
                        '8080',
                        '443',
                        '8443'
                    ],
                    correct: 1,
                    explanation: '톰캣의 기본 HTTP 포트는 8080입니다. 80은 일반 웹 서버, 443은 HTTPS, 8443은 톰캣 HTTPS입니다.'
                },
                {
                    q: 'Nginx 설정 파일의 기본 위치는?',
                    options: ['/etc/nginx/nginx.conf', '/var/nginx/nginx.conf', '/opt/nginx/nginx.conf', '/usr/nginx/nginx.conf'],
                    correct: 0,
                    explanation: 'Nginx의 메인 설정 파일은 /etc/nginx/nginx.conf입니다. 사이트별 설정은 /etc/nginx/sites-available/에 있습니다.'
                },
                {
                    q: '실시간 로그 모니터링 중 특정 패턴만 필터링하여 보려면?',
                    options: [
                        'tail -f access.log | grep pattern',
                        'tail -f access.log',
                        'cat access.log | grep pattern',
                        'head access.log'
                    ],
                    correct: 0,
                    explanation: 'tail -f로 실시간 모니터링하면서 grep으로 특정 패턴만 필터링할 수 있습니다.'
                },
                {
                    q: 'SSH 서버를 설치하는 명령어는?',
                    options: [
                        'apt-get install ssh',
                        'apt-get install sshd',
                        'apt-get install ssh-server',
                        'apt-get install openssh-server'
                    ],
                    correct: 3,
                    explanation: 'Ubuntu/Debian에서는 apt-get install openssh-server로 SSH 서버를 설치합니다.'
                },
                {
                    q: '웹 서버의 DocumentRoot(기본 웹 디렉토리)를 찾기 위해 확인해야 하는 Nginx 설정 지시어는?',
                    options: ['server_name', 'root', 'location', 'listen'],
                    correct: 1,
                    explanation: 'root 지시어는 웹 파일이 저장된 디렉토리 경로를 지정합니다. Nginx 기본값은 /var/www/html입니다.'
                },
                {
                    q: 'MariaDB에서 모든 원격지에서 접속 가능한 사용자를 생성할 때 호스트 부분에 사용하는 와일드카드는?',
                    options: ['*', '%', '@', '#'],
                    correct: 1,
                    explanation: "CREATE USER 'user'@'%'에서 %는 모든 호스트를 의미합니다. *는 SQL에서 다른 의미로 사용됩니다."
                },
                {
                    q: 'MariaDB에서 권한 변경사항을 즉시 적용하는 명령어는?',
                    options: [
                        'REFRESH PRIVILEGES',
                        'RELOAD PRIVILEGES',
                        'UPDATE PRIVILEGES',
                        'FLUSH PRIVILEGES'
                    ],
                    correct: 3,
                    explanation: 'FLUSH PRIVILEGES는 grant 테이블을 다시 로드하여 권한 변경사항을 즉시 적용합니다.'
                },
                {
                    q: 'Java 기반 WAS를 실행하기 위해 필요한 필수 소프트웨어는?',
                    options: ['Python', 'JDK', 'Node.js', 'Ruby'],
                    correct: 1,
                    explanation: '톰캣 같은 Java 기반 WAS는 JDK(Java Development Kit)가 필요합니다.'
                },
                {
                    q: '톰캣의 웹 애플리케이션 배포 디렉토리는?',
                    options: ['/var/www/html/', '/var/lib/tomcat10/webapps/', '/etc/tomcat10/webapps/', '/opt/tomcat/html/'],
                    correct: 1,
                    explanation: '톰캣의 웹 애플리케이션은 /var/lib/tomcat10/webapps/ 디렉토리에 배포됩니다. ROOT 디렉토리가 기본 컨텍스트입니다.'
                },
                {
                    q: '현재 실행 중인 프로세스를 실시간으로 모니터링하는 명령어는?',
                    options: ['ps -ef', 'top', 'ls', 'netstat'],
                    correct: 1,
                    explanation: 'top은 CPU, 메모리 사용률을 실시간으로 보여줍니다. htop은 더 개선된 버전입니다.'
                },
                {
                    q: 'systemctl 명령에서 서비스의 현재 상태를 확인하는 옵션은?',
                    options: [
                        'status',
                        'start',
                        'stop',
                        'enable'
                    ],
                    correct: 0,
                    explanation: 'systemctl status [서비스명]은 서비스의 실행 상태, 프로세스 정보, 최근 로그를 보여줍니다.'
                },
                {
                    q: 'Nginx 설정 변경 후 문법 오류를 확인하는 명령어는?',
                    options: [
                        'nginx -check',
                        'nginx -validate',
                        'nginx -t',
                        'nginx -test'
                    ],
                    correct: 2,
                    explanation: 'nginx -t는 설정 파일의 문법을 검사합니다. 오류가 있으면 재시작 전에 수정할 수 있습니다.'
                },
                {
                    q: 'Linux에서 특정 포트(예: 22번)를 사용하는 프로세스를 찾는 명령어는?',
                    options: [
                        'ps aux | grep 22',
                        'top | grep 22',
                        'ls -al /proc | grep 22',
                        'netstat -antp | grep 22'
                    ],
                    correct: 3,
                    explanation: 'netstat -antp | grep 22는 22번 포트를 사용하는 프로세스를 찾습니다. lsof -i :22도 사용 가능합니다.'
                },
                {
                    q: 'SQL Injection 공격 시도를 로그에서 탐지하기 위해 찾아야 할 패턴은?',
                    options: [
                        'GET / HTTP/1.1',
                        'POST /login',
                        '1',
                        '200 OK'
                    ],
                    correct: 2,
                    explanation: '\' OR \'1\'=\'1, UNION SELECT, -- 등은 SQL Injection 공격의 전형적인 패턴입니다.'
                },
                {
                    q: '웹 서버 로그에서 404 에러를 필터링하는 grep 명령어는?',
                    options: [
                        'grep 200 access.log',
                        'grep 500 access.log',
                        'grep 404 access.log',
                        'grep 301 access.log'
                    ],
                    correct: 2,
                    explanation: 'grep 404 access.log는 404 Not Found 에러가 발생한 요청을 필터링합니다.'
                },
                {
                    q: 'vi 에디터에서 저장하고 종료하는 명령어는?',
                    options: [
                        ':q!',
                        ':x!',
                        ':e!',
                        ':wq!'
                    ],
                    correct: 3,
                    explanation: ':wq!는 강제로 저장하고 종료합니다. :q!는 저장 없이 종료, :x는 변경사항이 있으면 저장하고 종료합니다.'
                },
                {
                    q: '리눅스 시스템의 업데이트를 수행하는 명령어 조합은?',
                    options: [
                        'apt-get update && apt-get upgrade',
                        'apt-get install',
                        'apt-get remove',
                        'apt-get search'
                    ],
                    correct: 0,
                    explanation: 'apt-get update는 패키지 목록을 업데이트하고, apt-get upgrade는 설치된 패키지를 최신 버전으로 업그레이드합니다.'
                },
                {
                    q: '웹 애플리케이션 방화벽(WAF) 우회 시도를 탐지할 수 있는 로그 패턴은?',
                    options: ['정상적인 HTTP 요청', 'URL 인코딩, 대소문자 변환, NULL 바이트', 'GET 요청', 'POST 요청'],
                    correct: 1,
                    explanation: 'WAF 우회는 URL 인코딩(%27 등), 대소문자 변환, NULL 바이트(%00), 주석 삽입 등의 기법을 사용합니다.'
                },
                {
                    q: 'DDoS 공격을 로그에서 탐지할 수 있는 징후는?',
                    options: ['정상적인 트래픽', '동일 IP에서 단시간 내 대량 요청', '느린 응답 시간', '404 에러'],
                    correct: 1,
                    explanation: 'DDoS 공격은 동일하거나 다수의 IP에서 단시간에 대량의 요청을 보내는 패턴을 보입니다.'
                },
                {
                    q: 'Brute Force 공격(무차별 대입 공격)을 탐지하기 위해 모니터링해야 할 로그는?',
                    options: ['access.log', 'auth.log', 'syslog', 'boot.log'],
                    correct: 1,
                    explanation: 'auth.log에서 Failed password 패턴이 반복되면 Brute Force 공격 가능성이 있습니다.'
                },
                {
                    q: '웹 서버 로그에서 가장 많이 접근한 IP를 찾는 명령어 조합은?',
                    options: [
                        'cat access.log',
                        'grep IP access.log',
                        '{print $1}',
                        'head access.log'
                    ],
                    correct: 2,
                    explanation: 'awk로 IP 추출 → sort로 정렬 → uniq -c로 카운트 → sort -nr로 많은 순으로 정렬합니다.'
                },
                {
                    q: 'SIEM(Security Information and Event Management)의 주요 기능은?',
                    options: ['웹 호스팅', '로그 수집 및 상관분석', '이메일 발송', '파일 백업'],
                    correct: 1,
                    explanation: 'SIEM은 다양한 소스의 로그를 수집하고, 상관분석하여 보안 이벤트를 탐지하고 대응합니다.'
                },
                {
                    q: 'SOC(Security Operations Center)의 주요 역할은?',
                    options: [
                        '24/7 보안 모니터링 및 사고 대응',
                        '소프트웨어 개발',
                        '네트워크 설치',
                        '하드웨어 수리'
                    ],
                    correct: 0,
                    explanation: 'SOC는 24시간 보안 모니터링, 위협 탐지, 사고 분석 및 대응을 수행하는 조직입니다.'
                },
                {
                    q: '실시간 로그 분석 도구인 GoAccess의 주요 기능은?',
                    options: [
                        '실시간 웹 로그 시각화 및 통계',
                        '이메일 전송',
                        '파일 압축',
                        'DNS 조회'
                    ],
                    correct: 0,
                    explanation: 'GoAccess는 웹 서버 로그를 실시간으로 분석하여 방문자, 요청, 대역폭 등을 시각화합니다.'
                },
                {
                    q: '보안 이벤트 발생 시 가장 먼저 수행해야 하는 작업은?',
                    options: [
                        '시스템 재부팅',
                        '모든 로그 삭제',
                        '사고 격리 및 증거 보존',
                        '서비스 종료'
                    ],
                    correct: 2,
                    explanation: '사고 대응 시 피해 확산을 막기 위한 격리와 포렌식을 위한 증거 보존이 최우선입니다.'
                },
                {
                    q: 'Apache/Nginx 로그의 표준 형식인 Combined Log Format에 포함되지 않는 정보는?',
                    options: [
                        '클라이언트 IP',
                        'User-Agent',
                        'Referer',
                        '데이터베이스 쿼리'
                    ],
                    correct: 3,
                    explanation: 'Combined Log Format은 IP, 시간, 요청, 상태코드, User-Agent, Referer를 포함하지만 DB 쿼리는 포함하지 않습니다.'
                },
                {
                    q: '로그 로테이션(Log Rotation)의 주요 목적은?',
                    options: [
                        '로그 암호화',
                        '로그 삭제',
                        '로그 압축만',
                        '디스크 공간 관리 및 로그 보관'
                    ],
                    correct: 3,
                    explanation: '로그 로테이션은 로그 파일을 주기적으로 백업하고 새 파일로 교체하여 디스크 공간을 관리합니다.'
                },
                {
                    q: 'Linux에서 로그 로테이션을 관리하는 데몬은?',
                    options: [
                        'syslogd',
                        'rsyslog',
                        'journald',
                        'logrotate'
                    ],
                    correct: 3,
                    explanation: 'logrotate는 시스템의 로그 파일을 자동으로 압축, 삭제, 메일 전송하는 도구입니다.'
                },
                {
                    q: 'XSS(Cross-Site Scripting) 공격 시도를 로그에서 탐지할 수 있는 패턴은?',
                    options: ['SELECT * FROM', '<script>alert()', "' OR '1'='1", '../../../etc/passwd'],
                    correct: 1,
                    explanation: 'XSS 공격은 <script>, <iframe>, onerror= 등의 HTML/JavaScript 태그를 삽입하려는 시도로 나타납니다.'
                },
                {
                    q: 'Path Traversal 공격 시도를 탐지할 수 있는 로그 패턴은?',
                    options: ['<script>', "' OR 1=1", '../../../', 'DROP TABLE'],
                    correct: 2,
                    explanation: 'Path Traversal은 ../../ 패턴을 사용하여 상위 디렉토리로 이동하려는 공격입니다.'
                },
                {
                    q: '웹 서버 로그에서 200 상태 코드의 의미는?',
                    options: [
                        '리다이렉트',
                        '클라이언트 오류',
                        '성공',
                        '서버 오류'
                    ],
                    correct: 2,
                    explanation: '200 OK는 요청이 성공적으로 처리되었음을 의미합니다. 2xx는 성공, 4xx는 클라이언트 오류, 5xx는 서버 오류입니다.'
                },
                {
                    q: '웹 서버 로그에서 500 상태 코드의 의미는?',
                    options: [
                        '성공',
                        '리다이렉트',
                        '서버 내부 오류',
                        '권한 없음'
                    ],
                    correct: 2,
                    explanation: '500 Internal Server Error는 서버에서 예상치 못한 오류가 발생했음을 의미합니다.'
                },
                {
                    q: '보안 관제 중 이상 징후 탐지를 위해 설정하는 기준선(Baseline)의 목적은?',
                    options: ['시스템 종료', '정상 패턴과 비교하여 이상 탐지', '로그 삭제', '백업 생성'],
                    correct: 1,
                    explanation: 'Baseline은 정상적인 시스템 동작 패턴을 정의하여, 이를 벗어나는 이상 행위를 탐지하는 기준이 됩니다.'
                },
                {
                    q: '실시간 보안 관제에서 False Positive(오탐)를 줄이기 위한 방법은?',
                    options: [
                        '룰 튜닝 및 화이트리스트 관리',
                        '모든 알람 무시',
                        '시스템 재부팅',
                        '로그 삭제'
                    ],
                    correct: 0,
                    explanation: '탐지 룰을 지속적으로 튜닝하고, 정상 트래픽을 화이트리스트에 등록하여 오탐을 줄입니다.'
                },
                {
                    q: 'IDS(Intrusion Detection System)와 IPS(Intrusion Prevention System)의 차이는?',
                    options: [
                        'IDS는 탐지만, IPS는 차단도 수행',
                        '동일함',
                        'IPS가 더 느림',
                        'IDS가 더 비쌈'
                    ],
                    correct: 0,
                    explanation: 'IDS는 침입을 탐지하여 알람만 발생시키고, IPS는 탐지 후 자동으로 차단합니다.'
                },
                {
                    q: '보안 관제에서 Correlation(상관분석)의 목적은?',
                    options: [
                        '로그 삭제',
                        '백업 생성',
                        '여러 이벤트를 연관시켜 복합 공격 탐지',
                        '시스템 재시작'
                    ],
                    correct: 2,
                    explanation: '상관분석은 분산된 여러 보안 이벤트를 연관시켜 APT 같은 복합적인 공격 패턴을 탐지합니다.'
                },
                {
                    q: '보안 사고 대응 단계 중 가장 먼저 수행하는 단계는?',
                    options: ['복구', '준비', '탐지 및 분석', '사후 검토'],
                    correct: 1,
                    explanation: 'Incident Response 프로세스는 준비 → 탐지 및 분석 → 억제 → 제거 → 복구 → 사후 검토 순입니다.'
                },
                {
                    q: 'Syslog 프로토콜의 기본 포트 번호는?',
                    options: [
                        '515',
                        '520',
                        '514',
                        '521'
                    ],
                    correct: 2,
                    explanation: 'Syslog는 UDP 514 포트를 기본으로 사용합니다. 보안을 위해 TCP 6514(TLS)를 사용하기도 합니다.'
                },
                {
                    q: 'Linux 시스템에서 현재 로그인한 사용자를 확인하는 명령어는?',
                    options: [
                        'ps',
                        'ls',
                        'who',
                        'cat'
                    ],
                    correct: 2,
                    explanation: 'who 또는 w 명령어로 현재 로그인한 사용자와 활동 정보를 확인할 수 있습니다.'
                },
                {
                    q: '웹 애플리케이션 공격 중 가장 흔하게 발견되는 취약점은?',
                    options: [
                        '버퍼 오버플로우',
                        'Rootkit',
                        '백도어',
                        'Injection(SQL, Command 등)'
                    ],
                    correct: 3,
                    explanation: 'OWASP Top 10에서 Injection은 가장 흔하고 위험한 취약점으로 분류됩니다.'
                },
                {
                    q: '보안 관제에서 Indicator of Compromise(IoC)의 의미는?',
                    options: [
                        '정상 패턴',
                        '네트워크 속도',
                        '디스크 용량',
                        '침해 사고의 징후'
                    ],
                    correct: 3,
                    explanation: 'IoC는 시스템이 침해당했음을 나타내는 증거나 징후(악성 IP, 파일 해시, 도메인 등)입니다.'
                },
                {
                    q: 'SIEM 시스템에서 이벤트 우선순위를 결정하는 기준으로 적절하지 않은 것은?',
                    options: [
                        '로그 파일 크기',
                        '자산의 중요도',
                        '위협의 심각도',
                        '공격의 성공 가능성'
                    ],
                    correct: 0,
                    explanation: '이벤트 우선순위는 자산 중요도, 위협 심각도, 공격 성공 가능성 등으로 결정되며, 로그 파일 크기는 우선순위와 무관합니다.'
                },
                {
                    q: '보안관제 센터(SOC)의 주요 역할이 아닌 것은?',
                    options: [
                        '실시간 보안 모니터링',
                        '침해사고 대응',
                        '하드웨어 제조',
                        '보안 정책 준수 확인'
                    ],
                    correct: 2,
                    explanation: 'SOC는 24/7 보안 모니터링, 위협 탐지, 사고 대응, 정책 준수 확인 등을 수행하며, 하드웨어 제조는 SOC의 역할이 아닙니다.'
                }
            ]
        }
    }
};

// 브라우저 전역 변수로 명시적 노출
if (typeof window !== 'undefined') {
    window.monitoringQuestions = monitoringQuestions;
}

// Node.js 환경에서 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { monitoringQuestions };
}
