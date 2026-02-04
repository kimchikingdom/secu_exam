// 정보보안 모의시험 문제은행
// 실제 학습 자료 기반으로 생성된 예상 문제

const examQuestions = {
    // ========== 1. 네트워크 & 리눅스 기본기술 (30문제) ==========
    networkLinuxBasics: {
        title: '네트워크 & 리눅스 기본기술',
        totalQuestions: 30,
        questions: [
            {
                    q: 'TCP 3-way Handshake의 첫 번째 단계에서 클라이언트가 서버에게 보내는 플래그는?',
                    options: [
                        'ACK',
                        'FIN',
                        'RST',
                        'SYN'
                    ],
                    correct: 3,
                    explanation: 'TCP 연결 수립의 첫 단계는 클라이언트가 SYN 패킷을 보내는 것입니다.'
                },
            {
                    q: 'OSI 7계층 모델에서 IP 프로토콜이 동작하는 계층은?',
                    options: [
                        '네트워크 계층',
                        '전송 계층',
                        '데이터링크 계층',
                        '세션 계층'
                    ],
                    correct: 0,
                    explanation: 'IP는 3계층인 네트워크 계층에서 동작하며 논리적 주소 지정과 라우팅을 담당합니다.'
                },
            {
                    q: '다음 중 TCP의 특징이 아닌 것은?',
                    options: [
                        '연결 지향',
                        '빠른 속도',
                        '신뢰성 보장',
                        '순서 보장'
                    ],
                    correct: 1,
                    explanation: 'TCP는 신뢰성과 순서를 보장하지만, 그로 인해 UDP보다 속도가 느립니다.'
                },
            {
                    q: 'Linux에서 현재 디렉토리의 모든 파일을 권한 정보와 함께 자세히 보는 명령어는?',
                    options: [
                        'ls',
                        'dir',
                        'list -a',
                        'ls -l'
                    ],
                    correct: 3,
                    explanation: 'ls -l 명령어는 파일의 권한, 소유자, 크기, 수정 시간 등을 자세히 보여줍니다.'
                },
            {
                    q: 'Linux 파일 권한 중 rwxr-xr--의 의미로 올바른 것은?',
                    options: [
                        '소유자: 읽기만, 그룹: 실행만, 기타: 쓰기만',
                        '모두 읽기/쓰기/실행 가능',
                        '소유자: 읽기/쓰기/실행, 그룹: 읽기/실행, 기타: 읽기',
                        '소유자만 모든 권한'
                    ],
                    correct: 2,
                    explanation: 'rwx(소유자: 7), r-x(그룹: 5), r--(기타: 4)를 의미합니다.'
                },
            {
                    q: 'TCP 포트 번호 중 Well-Known Ports의 범위는?',
                    options: [
                        '1024-49151',
                        '0-1023',
                        '49152-65535',
                        '0-65535'
                    ],
                    correct: 1,
                    explanation: '0-1023은 잘 알려진 포트로 HTTP(80), HTTPS(443), SSH(22) 등이 포함됩니다.'
                },
            {
                    q: 'Linux에서 파일의 소유자를 변경하는 명령어는?',
                    options: [
                        'chmod',
                        'chgrp',
                        'chown',
                        'usermod'
                    ],
                    correct: 2,
                    explanation: 'chown(change owner) 명령어로 파일의 소유자를 변경합니다.'
                },
            {
                    q: 'ARP 프로토콜의 주요 기능은?',
                    options: [
                        'MAC 주소를 IP 주소로 변환',
                        '라우팅 경로 결정',
                        'IP 주소를 MAC 주소로 변환',
                        '에러 메시지 전송'
                    ],
                    correct: 2,
                    explanation: 'ARP(Address Resolution Protocol)은 논리 주소(IP)를 물리 주소(MAC)로 변환합니다.'
                },
            {
                    q: 'Linux에서 실행 중인 프로세스를 확인하는 명령어는?',
                    options: [
                        'ls',
                        'ps 또는 top',
                        'ps',
                        'top'
                    ],
                    correct: 1,
                    explanation: 'ps는 현재 프로세스 목록을, top은 실시간 프로세스 모니터링을 제공합니다.'
                },
            {
                    q: 'TTL(Time To Live)의 주요 목적은?',
                    options: [
                        '패킷의 전송 속도 제한',
                        '패킷의 우선순위 지정',
                        '패킷이 무한 순환하는 것을 방지',
                        '패킷 암호화'
                    ],
                    correct: 2,
                    explanation: 'TTL은 패킷이 통과할 수 있는 라우터 수를 제한하여 무한 루프를 방지합니다.'
                },
            {
                    q: 'ICMP 프로토콜을 사용하는 대표적인 명령어는?',
                    options: [
                        'telnet',
                        'ssh',
                        'ftp',
                        'ping'
                    ],
                    correct: 3,
                    explanation: 'ping은 ICMP Echo Request/Reply를 사용하여 네트워크 연결을 테스트합니다.'
                },
            {
                    q: 'Linux에서 파일 내용을 페이지 단위로 보는 명령어는?',
                    options: [
                        'cat',
                        'echo',
                        'more',
                        'print'
                    ],
                    correct: 2,
                    explanation: 'more(또는 less)는 긴 파일을 페이지 단위로 볼 수 있게 합니다.'
                },
            {
                    q: 'Subnet Mask 255.255.255.0의 CIDR 표기법은?',
                    options: [
                        '/8',
                        '/16',
                        '/32',
                        '/24'
                    ],
                    correct: 3,
                    explanation: '255.255.255.0은 24비트가 네트워크 부분이므로 /24로 표기합니다.'
                },
            {
                q: 'Linux에서 현재 사용자의 계정 정보를 확인하는 명령어는?',
                options: ['user', 'whoami', 'id', 'whoami 또는 id'],
                correct: 3,
                explanation: 'whoami는 사용자 이름을, id는 UID, GID 등 상세 정보를 보여줍니다.'
            },
            {
                    q: 'TCP와 UDP 중 스트리밍 서비스에 주로 사용되는 프로토콜은?',
                    options: [
                        'TCP',
                        '둘 다',
                        '둘 다 아님',
                        'UDP'
                    ],
                    correct: 3,
                    explanation: 'UDP는 빠른 속도가 중요한 스트리밍, VoIP 등에 주로 사용됩니다.'
                },
            {
                    q: 'Linux에서 /etc/passwd 파일의 주요 용도는?',
                    options: [
                        '사용자 계정 정보 저장',
                        '사용자 비밀번호 저장',
                        '시스템 설정 저장',
                        '네트워크 설정 저장'
                    ],
                    correct: 0,
                    explanation: '/etc/passwd는 사용자 이름, UID, GID, 홈 디렉토리 등의 정보를 저장합니다. 실제 비밀번호는 /etc/shadow에 저장됩니다.'
                },
            {
                q: 'NAT(Network Address Translation)의 주요 목적은?',
                options: ['보안 강화', '사설 IP를 공인 IP로 변환', '속도 향상', 'DNS 해석'],
                correct: 1,
                explanation: 'NAT는 사설 IP 주소를 공인 IP 주소로 변환하여 인터넷 접속을 가능하게 합니다.'
            },
            {
                    q: 'Linux에서 특정 프로세스를 강제 종료하는 명령어는?',
                    options: [
                        'stop PID',
                        'end PID',
                        'kill -9 PID',
                        'terminate PID'
                    ],
                    correct: 2,
                    explanation: 'kill -9(또는 kill -SIGKILL)는 프로세스를 강제로 즉시 종료합니다.'
                },
            {
                q: 'HTTP의 기본 포트 번호는?',
                options: ['21', '22', '80', '443'],
                correct: 2,
                explanation: 'HTTP는 80번, HTTPS는 443번 포트를 사용합니다.'
            },
            {
                    q: 'Linux에서 파일 검색 시 사용하는 명령어는?',
                    options: [
                        'find 또는 locate',
                        'search',
                        'find',
                        'locate'
                    ],
                    correct: 0,
                    explanation: 'find는 실시간 검색, locate는 DB 기반 빠른 검색을 제공합니다.'
                },
            {
                q: 'TCP 연결 종료 시 사용되는 플래그는?',
                options: ['SYN', 'ACK', 'FIN', 'RST'],
                correct: 2,
                explanation: 'FIN 플래그는 TCP 연결을 정상적으로 종료할 때 사용됩니다.'
            },
            {
                    q: 'Linux에서 시스템 재부팅 명령어는?',
                    options: [
                        'restart',
                        'reboot 또는 shutdown -r now',
                        'reboot',
                        'shutdown -r now'
                    ],
                    correct: 1,
                    explanation: 'reboot와 shutdown -r now 모두 시스템을 재부팅합니다.'
                },
            {
                    q: 'Private IP 주소 범위가 아닌 것은?',
                    options: [
                        '200.0.0.0/8',
                        '10.0.0.0/8',
                        '172.16.0.0/12',
                        '192.168.0.0/16'
                    ],
                    correct: 0,
                    explanation: '사설 IP는 10.x.x.x, 172.16-31.x.x, 192.168.x.x 범위입니다.'
                },
            {
                    q: 'Linux에서 네트워크 인터페이스 정보를 확인하는 명령어는?',
                    options: [
                        'netstat',
                        'ifconfig 또는 ip addr',
                        'ifconfig',
                        'ip addr'
                    ],
                    correct: 1,
                    explanation: 'ifconfig(구버전)와 ip addr(신버전) 모두 네트워크 인터페이스 정보를 보여줍니다.'
                },
            {
                    q: 'DNS가 사용하는 기본 포트 번호는?',
                    options: [
                        '25',
                        '80',
                        '53',
                        '110'
                    ],
                    correct: 2,
                    explanation: 'DNS는 UDP/TCP 53번 포트를 사용합니다.'
                },
            {
                    q: 'Linux에서 현재 디렉토리 경로를 출력하는 명령어는?',
                    options: [
                        'path',
                        'dir',
                        'where',
                        'pwd'
                    ],
                    correct: 3,
                    explanation: 'pwd(Print Working Directory)는 현재 작업 디렉토리의 절대 경로를 출력합니다.'
                },
            {
                    q: 'MAC 주소의 길이는?',
                    options: [
                        '48비트',
                        '32비트',
                        '64비트',
                        '128비트'
                    ],
                    correct: 0,
                    explanation: 'MAC 주소는 48비트(6바이트)이며, 보통 12개의 16진수로 표현됩니다.'
                },
            {
                q: 'Linux에서 파일에 실행 권한을 추가하는 명령어는?',
                options: ['chmod +x 파일명', 'chown +x 파일명', 'exec 파일명', 'run 파일명'],
                correct: 0,
                explanation: 'chmod +x는 파일에 실행(execute) 권한을 추가합니다.'
            },
            {
                    q: 'Loopback 주소(localhost)로 사용되는 IP는?',
                    options: [
                        '0.0.0.0',
                        '192.168.0.1',
                        '255.255.255.255',
                        '127.0.0.1'
                    ],
                    correct: 3,
                    explanation: '127.0.0.1은 자기 자신을 가리키는 loopback 주소입니다.'
                },
            {
                    q: 'Linux에서 관리자 권한으로 명령어를 실행하는 명령어는?',
                    options: [
                        'root',
                        'sudo',
                        'admin',
                        'su'
                    ],
                    correct: 1,
                    explanation: 'sudo(superuser do)는 일시적으로 관리자 권한으로 명령어를 실행합니다.'
                },
            // 추가 30문제
            {
                q: 'TCP 4-way Handshake의 마지막 단계에서 전송되는 패킷은?',
                options: ['SYN', 'FIN', 'ACK', 'RST'],
                correct: 2,
                explanation: 'TCP 연결 종료는 FIN → ACK → FIN → ACK 순서로 진행됩니다.'
            },
            {
                    q: 'Linux에서 현재 시스템에 마운트된 파일시스템을 확인하는 명령어는?',
                    options: [
                        'mount',
                        'df',
                        'fdisk',
                        'mount 또는 df'
                    ],
                    correct: 3,
                    explanation: 'mount는 마운트 정보를, df는 디스크 사용량과 마운트 포인트를 보여줍니다.'
                },
            {
                    q: 'DHCP가 사용하는 포트 번호는?',
                    options: [
                        '53',
                        '67/68',
                        '80',
                        '443'
                    ],
                    correct: 1,
                    explanation: 'DHCP 서버는 67번, 클라이언트는 68번 UDP 포트를 사용합니다.'
                },
            {
                    q: 'Linux에서 압축 파일(.tar.gz)을 압축 해제하는 명령어는?',
                    options: [
                        'unzip',
                        'gunzip',
                        'extract',
                        'tar -xzf'
                    ],
                    correct: 3,
                    explanation: 'tar -xzf 파일명으로 .tar.gz 파일을 압축 해제합니다. x(extract), z(gzip), f(file)'
                },
            {
                    q: 'IP 주소의 클래스 A 범위는?',
                    options: [
                        '128-191',
                        '192-223',
                        '224-239',
                        '1-126'
                    ],
                    correct: 3,
                    explanation: 'Class A: 1-126, B: 128-191, C: 192-223, D: 224-239(멀티캐스트)'
                },
            {
                    q: 'Linux에서 환경 변수를 확인하는 명령어는?',
                    options: [
                        'env 또는 printenv',
                        'env',
                        'set',
                        'printenv'
                    ],
                    correct: 0,
                    explanation: 'env와 printenv 모두 환경 변수 목록을 출력합니다.'
                },
            {
                q: 'Broadcast 주소의 특징은?',
                options: ['특정 호스트로 전송', '같은 네트워크의 모든 호스트로 전송', '라우터를 통과', '유니캐스트와 같음'],
                correct: 1,
                explanation: 'Broadcast는 같은 네트워크 세그먼트의 모든 호스트에게 전송되며 라우터를 통과하지 않습니다.'
            },
            {
                    q: 'Linux에서 하드 링크와 심볼릭 링크를 생성하는 명령어는?',
                    options: [
                        'ln',
                        'link',
                        'symlink',
                        'mklink'
                    ],
                    correct: 0,
                    explanation: 'ln으로 하드링크, ln -s로 심볼릭 링크를 생성합니다.'
                },
            {
                    q: 'TCP Slow Start의 목적은?',
                    options: [
                        '속도 감소',
                        '보안 강화',
                        '네트워크 혼잡 방지',
                        '데이터 압축'
                    ],
                    correct: 2,
                    explanation: 'Slow Start는 전송 속도를 점진적으로 증가시켜 네트워크 혼잡을 방지합니다.'
                },
            {
                q: 'Linux에서 디스크 사용량을 디렉토리별로 확인하는 명령어는?',
                options: ['df', 'du', 'disk', 'usage'],
                correct: 1,
                explanation: 'du(disk usage)는 디렉토리별 사용량을, df는 파일시스템 전체 사용량을 보여줍니다.'
            },
            {
                    q: 'VLAN의 주요 목적은?',
                    options: [
                        '물리적 네트워크를 논리적으로 분할',
                        '속도 향상',
                        'IP 할당',
                        'DNS 해석'
                    ],
                    correct: 0,
                    explanation: 'VLAN은 하나의 물리적 네트워크를 여러 논리적 네트워크로 분할합니다.'
                },
            {
                    q: 'Linux cron 작업을 편집하는 명령어는?',
                    options: [
                        'cron -e',
                        'edit cron',
                        'crontab -e',
                        'vi /etc/cron'
                    ],
                    correct: 2,
                    explanation: 'crontab -e로 현재 사용자의 cron 작업을 편집할 수 있습니다.'
                },
            {
                    q: 'IPv6 주소의 길이는?',
                    options: [
                        '128비트',
                        '32비트',
                        '64비트',
                        '256비트'
                    ],
                    correct: 0,
                    explanation: 'IPv4는 32비트, IPv6는 128비트 주소 체계를 사용합니다.'
                },
            {
                    q: 'Linux에서 프로세스에 시그널을 보내는 명령어는?',
                    options: [
                        'send',
                        'signal',
                        'notify',
                        'kill'
                    ],
                    correct: 3,
                    explanation: 'kill 명령어는 프로세스에 다양한 시그널을 보낼 수 있습니다. (SIGTERM, SIGKILL 등)'
                },
            {
                    q: 'Routing Table의 주요 용도는?',
                    options: [
                        'MAC 주소 저장',
                        'DNS 해석',
                        '패킷 전달 경로 결정',
                        '포트 매핑'
                    ],
                    correct: 2,
                    explanation: 'Routing Table은 목적지 네트워크로 패킷을 전달할 경로를 결정합니다.'
                },
            {
                    q: 'Linux에서 파일의 inode 정보를 확인하는 명령어는?',
                    options: [
                        'ls -i',
                        'ls -i 또는 stat',
                        'stat',
                        'inode'
                    ],
                    correct: 1,
                    explanation: 'ls -i는 inode 번호를, stat은 상세한 inode 정보를 보여줍니다.'
                },
            {
                    q: 'Multicast의 IP 주소 범위는?',
                    options: [
                        '1-126',
                        '128-191',
                        '224-239',
                        '192-223'
                    ],
                    correct: 2,
                    explanation: 'Multicast는 Class D (224.0.0.0 ~ 239.255.255.255) 범위를 사용합니다.'
                },
            {
                q: 'Linux에서 메모리 사용량을 확인하는 명령어는?',
                options: ['memory', 'free', 'mem', 'usage'],
                correct: 1,
                explanation: 'free 명령어는 전체, 사용 중, 여유 메모리 정보를 보여줍니다.'
            },
            {
                    q: 'HTTP 상태 코드 404의 의미는?',
                    options: [
                        '성공',
                        '리다이렉트',
                        '서버 오류',
                        '클라이언트 오류-페이지 없음'
                    ],
                    correct: 3,
                    explanation: '404 Not Found는 요청한 리소스를 찾을 수 없음을 의미합니다.'
                },
            {
                    q: 'Linux에서 텍스트 파일에서 특정 패턴을 검색하는 명령어는?',
                    options: [
                        'find',
                        'search',
                        'grep',
                        'locate'
                    ],
                    correct: 2,
                    explanation: 'grep은 파일 내용에서 패턴을 검색하는 강력한 도구입니다.'
                },
            {
                    q: 'SSH 프로토콜의 주요 특징은?',
                    options: [
                        '암호화 통신',
                        '평문 전송',
                        'UDP 사용',
                        '인증 불필요'
                    ],
                    correct: 0,
                    explanation: 'SSH는 암호화된 안전한 원격 접속 프로토콜입니다.'
                },
            {
                    q: 'Linux에서 사용자를 추가하는 명령어는?',
                    options: [
                        'adduser',
                        'adduser 또는 useradd',
                        'useradd',
                        'newuser'
                    ],
                    correct: 1,
                    explanation: 'useradd는 저수준 명령어, adduser는 대화형 고수준 명령어입니다.'
                },
            {
                    q: 'FTP의 기본 포트 번호는?',
                    options: [
                        '22',
                        '23',
                        '20/21',
                        '25'
                    ],
                    correct: 2,
                    explanation: 'FTP는 제어용 21번, 데이터 전송용 20번 포트를 사용합니다.'
                },
            {
                    q: 'Linux에서 시스템 부팅 시 자동 실행되는 서비스를 관리하는 명령어는?',
                    options: [
                        'service',
                        'init',
                        'startup',
                        'systemctl'
                    ],
                    correct: 3,
                    explanation: 'systemctl enable/disable로 서비스의 자동 시작을 관리합니다.'
                },
            {
                    q: 'Subnet Mask의 주요 역할은?',
                    options: [
                        'IP 주소 할당',
                        'MAC 주소 변환',
                        'DNS 해석',
                        '네트워크 부분과 호스트 부분 구분'
                    ],
                    correct: 3,
                    explanation: 'Subnet Mask는 IP 주소에서 네트워크 ID와 호스트 ID를 구분합니다.'
                },
            {
                q: 'Linux에서 파일의 내용을 역순으로 보는 명령어는?',
                options: ['reverse', 'tac', 'rev', 'backward'],
                correct: 1,
                explanation: 'tac은 cat의 반대로 파일을 마지막 줄부터 보여줍니다.'
            },
            {
                    q: 'SMTP의 기본 포트 번호는?',
                    options: [
                        '25',
                        '21',
                        '22',
                        '110'
                    ],
                    correct: 0,
                    explanation: 'SMTP(메일 전송)는 25번, POP3(메일 수신)는 110번 포트를 사용합니다.'
                },
            {
                q: 'Linux에서 파일의 처음 10줄을 보는 명령어는?',
                options: ['top', 'head', 'first', 'begin'],
                correct: 1,
                explanation: 'head는 기본적으로 파일의 처음 10줄을, tail은 마지막 10줄을 보여줍니다.'
            },
            {
                    q: 'Default Gateway의 역할은?',
                    options: [
                        'DNS 해석',
                        'IP 할당',
                        'MAC 주소 변환',
                        '다른 네트워크로 패킷 전달'
                    ],
                    correct: 3,
                    explanation: 'Default Gateway는 로컬 네트워크 외부로 나가는 패킷의 경로를 제공합니다.'
                },
            {
                    q: 'Linux에서 실행 중인 서비스를 확인하는 명령어는?',
                    options: [
                        'systemctl status',
                        'systemctl list-units --type=service',
                        '모두 가능',
                        'service --status-all'
                    ],
                    correct: 2,
                    explanation: 'systemctl과 service 명령어로 서비스 상태를 확인할 수 있습니다.'
                }
        ]
    },

    // ========== 2. 가상화기술과 클라우드 환경구축 (30문제) ==========
    virtualizationCloud: {
        title: '가상화기술과 클라우드 환경구축',
        totalQuestions: 30,
        questions: [
            {
                q: 'Docker 컨테이너와 가상머신(VM)의 가장 큰 차이점은?',
                options: ['컨테이너는 OS 커널을 공유한다', '컨테이너가 더 무겁다', 'VM이 더 빠르다', '차이가 없다'],
                correct: 0,
                explanation: '컨테이너는 호스트 OS의 커널을 공유하여 가볍고 빠르게 시작됩니다.'
            },
            {
                    q: 'Docker 이미지를 Docker Hub에서 다운로드하는 명령어는?',
                    options: [
                        'docker download',
                        'docker get',
                        'docker fetch',
                        'docker pull'
                    ],
                    correct: 3,
                    explanation: 'docker pull 명령어로 레지스트리에서 이미지를 다운로드합니다.'
                },
            {
                q: '실행 중인 Docker 컨테이너 목록을 보는 명령어는?',
                options: ['docker list', 'docker ps', 'docker show', 'docker containers'],
                correct: 1,
                explanation: 'docker ps는 실행 중인 컨테이너를, docker ps -a는 모든 컨테이너를 보여줍니다.'
            },
            {
                q: 'Kubernetes에서 가장 작은 배포 단위는?',
                options: ['Container', 'Pod', 'Node', 'Service'],
                correct: 1,
                explanation: 'Pod는 하나 이상의 컨테이너를 포함하는 Kubernetes의 최소 배포 단위입니다.'
            },
            {
                    q: 'Docker 컨테이너를 백그라운드로 실행하는 옵션은?',
                    options: [
                        '-b',
                        '-background',
                        '-detach',
                        '-d'
                    ],
                    correct: 3,
                    explanation: '-d(detached) 옵션은 컨테이너를 백그라운드에서 실행합니다.'
                },
            {
                q: 'Kubernetes 클러스터의 모든 데이터를 저장하는 컴포넌트는?',
                options: ['kubelet', 'kube-proxy', 'etcd', 'kube-apiserver'],
                correct: 2,
                explanation: 'etcd는 분산 키-값 저장소로 클러스터의 모든 설정과 상태 데이터를 저장합니다.'
            },
            {
                    q: 'Docker 이미지를 빌드할 때 사용하는 설정 파일 이름은?',
                    options: [
                        'Dockerfile',
                        'docker.yaml',
                        'build.conf',
                        'image.txt'
                    ],
                    correct: 0,
                    explanation: 'Dockerfile은 이미지 빌드 과정을 정의하는 텍스트 파일입니다.'
                },
            {
                    q: 'kubectl 명령어로 Pod 목록을 조회하는 명령은?',
                    options: [
                        'kubectl get pods',
                        'kubectl list pods',
                        'kubectl show pods',
                        'kubectl pods'
                    ],
                    correct: 0,
                    explanation: 'kubectl get pods는 현재 네임스페이스의 모든 Pod를 나열합니다.'
                },
            {
                    q: 'Docker 컨테이너 내부에 접속하여 bash 쉘을 실행하는 명령어는?',
                    options: [
                        'docker attach',
                        'docker login',
                        'docker ssh',
                        'docker exec -it 컨테이너명 bash'
                    ],
                    correct: 3,
                    explanation: 'docker exec -it는 실행 중인 컨테이너 내부에서 명령어를 실행합니다.'
                },
            {
                    q: 'Kubernetes에서 외부로 서비스를 노출하는 리소스 타입은?',
                    options: [
                        'Pod',
                        'Deployment',
                        'ConfigMap',
                        'Service'
                    ],
                    correct: 3,
                    explanation: 'Service는 Pod 집합에 대한 네트워크 접근을 제공하고 로드밸런싱을 수행합니다.'
                },
            {
                    q: 'Docker에서 호스트의 8080 포트를 컨테이너의 80 포트로 매핑하는 옵션은?',
                    options: [
                        '-port 8080:80',
                        '-p 8080:80',
                        '-P 8080:80',
                        '--port=8080:80'
                    ],
                    correct: 1,
                    explanation: '-p 호스트포트:컨테이너포트 형식으로 포트를 매핑합니다.'
                },
            {
                    q: 'Kubernetes의 Master Node에서 실행되지 않는 컴포넌트는?',
                    options: [
                        'kube-apiserver',
                        'kube-scheduler',
                        'kube-controller-manager',
                        'kubelet'
                    ],
                    correct: 3,
                    explanation: 'kubelet은 각 Worker Node에서 실행되며 Pod의 컨테이너를 관리합니다.'
                },
            {
                    q: 'Docker 이미지의 레이어 구조에서 얻을 수 있는 장점은?',
                    options: [
                        '디스크 공간 절약',
                        '보안 강화',
                        '실행 속도 향상만',
                        '네트워크 속도 향상'
                    ],
                    correct: 0,
                    explanation: '레이어를 재사용하여 디스크 공간을 절약하고 빌드 속도를 향상시킵니다.'
                },
            {
                    q: 'Kubernetes Pod의 상태 중 컨테이너가 실행 중임을 나타내는 상태는?',
                    options: [
                        'Pending',
                        'Succeeded',
                        'Failed',
                        'Running'
                    ],
                    correct: 3,
                    explanation: 'Running 상태는 Pod가 노드에 바인딩되고 모든 컨테이너가 생성되어 실행 중임을 의미합니다.'
                },
            {
                    q: 'Docker 컨테이너를 중지하는 명령어는?',
                    options: [
                        'docker pause',
                        'docker stop 또는 docker kill',
                        'docker stop',
                        'docker kill'
                    ],
                    correct: 1,
                    explanation: 'docker stop은 정상 종료, docker kill은 강제 종료를 수행합니다.'
                },
            {
                    q: 'Kubernetes에서 Pod의 복제본 수를 관리하는 리소스는?',
                    options: [
                        'Service',
                        'ConfigMap',
                        'Namespace',
                        'ReplicaSet'
                    ],
                    correct: 3,
                    explanation: 'ReplicaSet은 지정된 수의 Pod 복제본이 항상 실행되도록 보장합니다.'
                },
            {
                q: 'Dockerfile에서 베이스 이미지를 지정하는 명령어는?',
                options: ['BASE', 'FROM', 'IMAGE', 'USE'],
                correct: 1,
                explanation: 'FROM은 Dockerfile의 첫 번째 명령어로 베이스 이미지를 지정합니다.'
            },
            {
                    q: 'kubectl로 Pod의 상세 정보를 확인하는 명령어는?',
                    options: [
                        'kubectl info',
                        'kubectl detail pod',
                        'kubectl describe pod',
                        'kubectl show pod'
                    ],
                    correct: 2,
                    explanation: 'kubectl describe는 리소스의 상세 정보와 이벤트를 보여줍니다.'
                },
            {
                    q: 'Docker 이미지의 히스토리(레이어 정보)를 확인하는 명령어는?',
                    options: [
                        'docker layers',
                        'docker info',
                        'docker history',
                        'docker inspect'
                    ],
                    correct: 2,
                    explanation: 'docker history는 이미지의 각 레이어와 생성 과정을 보여줍니다.'
                },
            {
                    q: 'Kubernetes에서 설정 데이터를 저장하는 리소스는?',
                    options: [
                        'Secret',
                        'Secret과 ConfigMap',
                        'ConfigMap',
                        'Volume'
                    ],
                    correct: 1,
                    explanation: 'ConfigMap은 일반 설정을, Secret은 민감한 데이터를 저장합니다.'
                },
            {
                    q: 'Docker 컨테이너의 로그를 실시간으로 확인하는 명령어는?',
                    options: [
                        'docker tail',
                        'docker logs -f',
                        'docker watch',
                        'docker monitor'
                    ],
                    correct: 1,
                    explanation: 'docker logs -f(또는 --follow)는 로그를 실시간으로 스트리밍합니다.'
                },
            {
                    q: 'Kubernetes의 가상 네트워킹을 담당하는 컴포넌트는?',
                    options: [
                        'kube-proxy',
                        'kubelet',
                        'etcd',
                        'CoreDNS'
                    ],
                    correct: 0,
                    explanation: 'kube-proxy는 각 노드에서 네트워크 규칙을 유지하고 연결 포워딩을 수행합니다.'
                },
            {
                    q: 'Docker에서 실행 중인 컨테이너를 이미지로 저장하는 명령어는?',
                    options: [
                        'docker save',
                        'docker export',
                        'docker backup',
                        'docker commit'
                    ],
                    correct: 3,
                    explanation: 'docker commit은 컨테이너의 현재 상태를 새로운 이미지로 저장합니다.'
                },
            {
                    q: 'Kubernetes에서 여러 리소스를 논리적으로 분리하는 방법은?',
                    options: [
                        'Pod',
                        'Namespace',
                        'Node',
                        'Label'
                    ],
                    correct: 1,
                    explanation: 'Namespace는 클러스터 내에서 리소스를 논리적으로 격리합니다.'
                },
            {
                    q: 'Dockerfile에서 컨테이너 시작 시 실행할 명령어를 지정하는 명령은?',
                    options: [
                        'RUN',
                        'EXEC',
                        'START',
                        'CMD'
                    ],
                    correct: 3,
                    explanation: 'CMD는 컨테이너가 시작될 때 실행할 기본 명령어를 지정합니다.'
                },
            {
                q: 'kubectl로 리소스를 생성할 때 사용하는 명령어는?',
                options: ['kubectl create', 'kubectl apply', 'kubectl create 또는 kubectl apply', 'kubectl new'],
                correct: 2,
                explanation: 'create는 새 리소스 생성, apply는 생성 또는 업데이트를 수행합니다.'
            },
            {
                q: 'Docker 이미지의 크기를 확인하는 명령어는?',
                options: ['docker size', 'docker images', 'docker ls', 'docker info'],
                correct: 1,
                explanation: 'docker images는 로컬 이미지 목록과 각 이미지의 크기를 보여줍니다.'
            },
            {
                    q: 'Kubernetes Pod가 계속 재시작되는 상태는?',
                    options: [
                        'Pending',
                        'ImagePullBackOff',
                        'Running',
                        'CrashLoopBackOff'
                    ],
                    correct: 3,
                    explanation: 'CrashLoopBackOff는 컨테이너가 시작 후 반복적으로 실패하여 재시작되는 상태입니다.'
                },
            {
                    q: 'Docker에서 불필요한 이미지를 삭제하는 명령어는?',
                    options: [
                        'docker delete',
                        'docker remove',
                        'docker rmi',
                        'docker clean'
                    ],
                    correct: 2,
                    explanation: 'docker rmi(remove image)는 로컬 이미지를 삭제합니다.'
                },
            {
                q: 'Kubernetes에서 클러스터 내부 DNS를 제공하는 컴포넌트는?',
                options: ['etcd', 'kubelet', 'CoreDNS', 'kube-dns'],
                correct: 2,
                explanation: 'CoreDNS는 클러스터 내부에서 서비스 이름을 IP 주소로 해석합니다.'
            },
            // 추가 30문제
            {
                    q: 'Docker Volume의 주요 용도는?',
                    options: [
                        '데이터 영속성 보장',
                        '네트워크 설정',
                        '이미지 빌드',
                        'CPU 할당'
                    ],
                    correct: 0,
                    explanation: 'Volume은 컨테이너 삭제 후에도 데이터를 유지할 수 있게 합니다.'
                },
            {
                q: 'Kubernetes Deployment가 관리하는 리소스는?',
                options: ['Pod', 'ReplicaSet', 'Service', 'ReplicaSet과 Pod'],
                correct: 3,
                explanation: 'Deployment는 ReplicaSet을 생성하고 관리하며, ReplicaSet이 Pod를 관리합니다.'
            },
            {
                    q: 'Docker 네트워크 드라이버 중 컨테이너 간 격리를 제공하는 것은?',
                    options: [
                        'host',
                        'none',
                        'bridge',
                        'overlay'
                    ],
                    correct: 2,
                    explanation: 'bridge는 기본 네트워크 드라이버로 컨테이너 간 격리와 통신을 제공합니다.'
                },
            {
                    q: 'kubectl apply와 kubectl create의 차이는?',
                    options: [
                        '동일함',
                        'create가 더 빠름',
                        'apply는 선언적, create는 명령적',
                        'apply는 삭제만 가능'
                    ],
                    correct: 2,
                    explanation: 'apply는 설정 파일 기반 선언적 관리, create는 직접 리소스를 생성하는 명령적 방식입니다.'
                },
            {
                    q: 'Docker Compose의 주요 용도는?',
                    options: [
                        '다중 컨테이너 애플리케이션 정의',
                        '단일 컨테이너 실행',
                        '이미지 빌드만',
                        '네트워크 설정만'
                    ],
                    correct: 0,
                    explanation: 'Docker Compose는 YAML 파일로 여러 컨테이너를 한 번에 정의하고 실행합니다.'
                },
            {
                    q: 'Kubernetes Label의 용도는?',
                    options: [
                        '보안 설정',
                        '성능 향상',
                        '리소스 식별 및 선택',
                        '로그 수집'
                    ],
                    correct: 2,
                    explanation: 'Label은 리소스를 식별하고 Selector로 그룹화하여 관리합니다.'
                },
            {
                    q: 'Docker 이미지의 다이제스트(Digest)는 무엇인가?',
                    options: [
                        '이미지 이름',
                        '이미지 크기',
                        '생성 날짜',
                        '이미지 내용의 SHA256 해시'
                    ],
                    correct: 3,
                    explanation: 'Digest는 이미지 내용의 해시값으로 이미지 무결성을 보장합니다.'
                },
            {
                q: 'Kubernetes에서 환경 변수를 관리하는 가장 적절한 방법은?',
                options: ['Dockerfile에 하드코딩', 'ConfigMap 또는 Secret', '컨테이너 내부 파일', '주석'],
                correct: 1,
                explanation: 'ConfigMap과 Secret으로 설정과 민감 정보를 분리하여 관리합니다.'
            },
            {
                    q: 'Docker의 --rm 옵션의 의미는?',
                    options: [
                        '이미지 삭제',
                        '볼륨 삭제',
                        '네트워크 삭제',
                        '컨테이너 종료 시 자동 삭제'
                    ],
                    correct: 3,
                    explanation: '--rm 옵션은 컨테이너가 종료되면 자동으로 삭제합니다.'
                },
            {
                q: 'Kubernetes Ingress의 주요 기능은?',
                options: ['Pod 생성', 'HTTP/HTTPS 라우팅', '볼륨 관리', '로그 수집'],
                correct: 1,
                explanation: 'Ingress는 외부에서 클러스터 내부 서비스로의 HTTP/HTTPS 트래픽을 라우팅합니다.'
            },
            {
                    q: 'Docker의 ENTRYPOINT와 CMD의 차이는?',
                    options: [
                        '동일함',
                        'CMD만 사용 가능',
                        'ENTRYPOINT는 고정, CMD는 덮어쓰기 가능',
                        'ENTRYPOINT가 더 빠름'
                    ],
                    correct: 2,
                    explanation: 'ENTRYPOINT는 항상 실행되는 메인 명령어, CMD는 기본 인자로 덮어쓸 수 있습니다.'
                },
            {
                    q: 'Kubernetes에서 Secret을 생성하는 명령어는?',
                    options: [
                        'kubectl new secret',
                        'kubectl add secret',
                        'kubectl create secret',
                        'kubectl secret create'
                    ],
                    correct: 2,
                    explanation: 'kubectl create secret generic/tls/docker-registry로 Secret을 생성합니다.'
                },
            {
                    q: 'Docker의 .dockerignore 파일의 용도는?',
                    options: [
                        '빌드 시 제외할 파일 지정',
                        '보안 설정',
                        '네트워크 차단',
                        '로그 필터'
                    ],
                    correct: 0,
                    explanation: '.dockerignore는 이미지 빌드 시 context에서 제외할 파일을 지정합니다.'
                },
            {
                    q: 'Kubernetes에서 Pod가 특정 노드에서만 실행되도록 하는 방법은?',
                    options: [
                        'NodeSelector 또는 Affinity',
                        'Label만 사용',
                        '자동 배치만 가능',
                        'Service로 제어'
                    ],
                    correct: 0,
                    explanation: 'NodeSelector, NodeAffinity, Taint/Toleration으로 Pod 배치를 제어합니다.'
                },
            {
                    q: 'Docker Multi-stage Build의 장점은?',
                    options: [
                        '속도 향상만',
                        '보안 약화',
                        '복잡성 증가만',
                        '최종 이미지 크기 감소'
                    ],
                    correct: 3,
                    explanation: 'Multi-stage는 빌드 도구를 최종 이미지에서 제외하여 크기를 줄입니다.'
                },
            {
                    q: 'Kubernetes에서 Pod의 리소스 요청(request)과 제한(limit)의 차이는?',
                    options: [
                        'request는 최소 보장, limit는 최대 허용',
                        '동일함',
                        'limit만 필수',
                        'request가 더 큼'
                    ],
                    correct: 0,
                    explanation: 'request는 보장되는 최소 리소스, limit는 사용 가능한 최대 리소스입니다.'
                },
            {
                q: 'Docker의 --network=host 옵션의 의미는?',
                options: ['네트워크 차단', '호스트 네트워크 스택 직접 사용', 'bridge 네트워크', '격리 강화'],
                correct: 1,
                explanation: '--network=host는 컨테이너가 호스트의 네트워크를 직접 사용합니다.'
            },
            {
                    q: 'Kubernetes HorizontalPodAutoscaler의 기준 메트릭이 아닌 것은?',
                    options: [
                        '디스크 크기',
                        'CPU 사용률',
                        '메모리 사용률',
                        '커스텀 메트릭'
                    ],
                    correct: 0,
                    explanation: 'HPA는 CPU, 메모리, 커스텀 메트릭 기반으로 Pod 수를 자동 조정합니다.'
                },
            {
                    q: 'Docker의 healthcheck 기능의 용도는?',
                    options: [
                        '컨테이너 상태 모니터링',
                        '이미지 빌드',
                        '네트워크 테스트만',
                        '로그 수집'
                    ],
                    correct: 0,
                    explanation: 'Healthcheck는 주기적으로 컨테이너 상태를 확인하여 healthy/unhealthy를 판단합니다.'
                },
            {
                    q: 'Kubernetes StatefulSet의 특징은?',
                    options: [
                        '안정적인 네트워크 ID와 영속적 스토리지',
                        '상태 없는 애플리케이션용',
                        'Pod 순서 무관',
                        'Deployment와 동일'
                    ],
                    correct: 0,
                    explanation: 'StatefulSet은 데이터베이스 등 상태를 유지해야 하는 애플리케이션에 사용됩니다.'
                },
            {
                    q: 'Docker의 --privileged 옵션은 무엇을 의미하는가?',
                    options: [
                        '보안 강화',
                        '네트워크 격리',
                        '일반 모드',
                        '컨테이너에 호스트와 거의 동일한 권한 부여'
                    ],
                    correct: 3,
                    explanation: '--privileged는 모든 장치 접근과 커널 기능을 허용하여 보안이 약화됩니다.'
                },
            {
                    q: 'Kubernetes에서 롤링 업데이트 중 이전 버전으로 되돌리는 명령어는?',
                    options: [
                        'kubectl rollback',
                        'kubectl undo',
                        'kubectl revert',
                        'kubectl rollout undo'
                    ],
                    correct: 3,
                    explanation: 'kubectl rollout undo deployment/이름으로 이전 버전으로 롤백합니다.'
                },
            {
                q: 'Docker Registry의 역할은?',
                options: ['컨테이너 실행', '이미지 저장 및 배포', '네트워크 관리', '로그 수집'],
                correct: 1,
                explanation: 'Registry는 Docker 이미지를 저장하고 배포하는 저장소입니다. (예: Docker Hub)'
            },
            {
                q: 'Kubernetes에서 Pod가 정상 실행되지 않을 때 로그를 확인하는 명령어는?',
                options: ['kubectl log', 'kubectl logs', 'kubectl show logs', 'kubectl get logs'],
                correct: 1,
                explanation: 'kubectl logs pod이름으로 컨테이너 로그를 확인합니다.'
            },
            {
                    q: 'Docker의 dangling image란?',
                    options: [
                        '실행 중인 이미지',
                        '최신 이미지',
                        '태그가 없는 중간 레이어 이미지',
                        '공식 이미지'
                    ],
                    correct: 2,
                    explanation: 'Dangling image는 <none>:<none>으로 표시되는 태그 없는 이미지입니다.'
                },
            {
                    q: 'Kubernetes에서 클러스터 외부 서비스를 연결하는 리소스는?',
                    options: [
                        'ExternalName Service',
                        'Pod',
                        'Deployment',
                        'ConfigMap'
                    ],
                    correct: 0,
                    explanation: 'ExternalName Service는 클러스터 외부의 DNS 이름을 내부 서비스처럼 사용합니다.'
                },
            {
                    q: 'Docker의 bridge 네트워크와 overlay 네트워크의 차이는?',
                    options: [
                        '동일함',
                        'overlay가 더 느림',
                        'bridge는 단일 호스트, overlay는 다중 호스트',
                        'bridge만 안전함'
                    ],
                    correct: 2,
                    explanation: 'Overlay는 Docker Swarm이나 다중 호스트 환경에서 컨테이너 간 통신을 제공합니다.'
                },
            {
                    q: 'Kubernetes에서 컨테이너가 시작된 후 초기화 작업을 수행하는 후크는?',
                    options: [
                        'postStart',
                        'preStart',
                        'onStart',
                        'initStart'
                    ],
                    correct: 0,
                    explanation: 'postStart 라이프사이클 후크는 컨테이너 시작 직후 실행됩니다.'
                },
            {
                q: 'Docker의 --restart 정책 중 항상 재시작하는 옵션은?',
                options: ['no', 'on-failure', 'always', 'unless-stopped'],
                correct: 2,
                explanation: 'always는 컨테이너가 종료되면 항상 재시작하고, unless-stopped는 수동 정지 외에는 재시작합니다.'
            },
            {
                q: 'Kubernetes에서 여러 컨테이너가 동일한 Pod 내에서 공유하는 것은?',
                options: ['이미지', '네트워크와 스토리지 볼륨', 'CPU만', '메모리만'],
                correct: 1,
                explanation: '같은 Pod의 컨테이너들은 네트워크 네임스페이스와 볼륨을 공유합니다.'
            }
        ]
    },

    // ========== 3. 해킹방어를 위한 모의해킹 실무 (30문제) ==========
    pentestingDefense: {
        title: '해킹방어를 위한 모의해킹 실무',
        totalQuestions: 30,
        questions: [
            {
                q: 'SQL Injection 공격의 기본 원리는?',
                options: ['파일 업로드 취약점 악용', '사용자 입력을 SQL 쿼리에 직접 삽입', 'XSS를 통한 세션 탈취', '버퍼 오버플로우'],
                correct: 1,
                explanation: 'SQL Injection은 사용자 입력 검증이 부족할 때 악의적인 SQL 코드를 삽입하여 실행하는 공격입니다.'
            },
            {
                q: 'Python으로 TCP 소켓을 생성하는 코드는?',
                options: ["socket.socket()", "socket.socket(AF_INET, SOCK_STREAM)", "tcp.socket()", "create_socket()"],
                correct: 1,
                explanation: 'socket.socket(AF_INET, SOCK_STREAM)으로 IPv4 TCP 소켓을 생성합니다.'
            },
            {
                    q: '포트 스캐닝에서 포트가 열려있음을 확인하는 connect_ex() 반환값은?',
                    options: [
                        '-1',
                        '1',
                        '0',
                        'True'
                    ],
                    correct: 2,
                    explanation: 'connect_ex()는 연결 성공 시 0을, 실패 시 errno를 반환합니다.'
                },
            {
                    q: 'XOR 암호화의 특징으로 올바른 것은?',
                    options: [
                        '일방향 암호화',
                        '해시 함수',
                        '같은 키로 암호화와 복호화 가능',
                        '비대칭 암호화'
                    ],
                    correct: 2,
                    explanation: 'XOR는 동일한 키로 암호화와 복호화를 수행하는 대칭키 방식입니다. data ^ key ^ key = data'
                },
            {
                    q: 'Blind SQL Injection에서 참/거짓을 판단하는 방법이 아닌 것은?',
                    options: [
                        '응답 내용 차이',
                        '에러 메시지 직접 출력',
                        '응답 시간 차이',
                        '응답 길이 차이'
                    ],
                    correct: 1,
                    explanation: 'Blind SQL Injection은 에러 메시지가 노출되지 않을 때 사용하는 기법입니다.'
                },
            {
                    q: 'RCE(Remote Code Execution)의 의미는?',
                    options: [
                        '원격 설정 변경',
                        '원격 데이터 복사',
                        '원격 에러 확인',
                        '원격에서 임의 코드 실행'
                    ],
                    correct: 3,
                    explanation: 'RCE는 공격자가 원격에서 서버에 임의의 명령어나 코드를 실행할 수 있는 취약점입니다.'
                },
            {
                    q: 'Spring4Shell(CVE-2022-22965) 공격이 악용하는 Spring 메커니즘은?',
                    options: [
                        'Dependency Injection',
                        'AOP',
                        'Transaction',
                        'Data Binding'
                    ],
                    correct: 3,
                    explanation: 'Data Binding 메커니즘을 통해 내부 객체에 접근하여 ClassLoader를 조작합니다.'
                },
            {
                q: 'Time-based SQL Injection에서 주로 사용하는 함수는?',
                options: ['wait()', 'sleep()', 'delay()', 'timeout()'],
                correct: 1,
                explanation: 'sleep() 함수로 의도적인 지연을 발생시켜 쿼리 실행 여부를 판단합니다.'
            },
            {
                    q: 'Linux에서 SetUID 비트가 설정된 파일의 위험성은?',
                    options: [
                        '실행 시 파일 소유자 권한으로 실행',
                        '파일이 삭제됨',
                        '파일이 암호화됨',
                        '위험하지 않음'
                    ],
                    correct: 0,
                    explanation: 'SetUID 파일은 누가 실행하든 파일 소유자의 권한으로 실행되어 권한 상승에 악용될 수 있습니다.'
                },
            {
                q: 'Reverse Shell의 주요 특징은?',
                options: ['공격자가 서버에 연결', '서버가 공격자에게 연결', '양방향 연결', '연결 불필요'],
                correct: 1,
                explanation: 'Reverse Shell은 침투한 서버가 공격자에게 역으로 연결하여 방화벽의 아웃바운드 규칙을 우회합니다.'
            },
            {
                    q: 'SQL에서 현재 데이터베이스 이름을 반환하는 MySQL 함수는?',
                    options: [
                        'db_name()',
                        'current_db()',
                        'getdb()',
                        'database()'
                    ],
                    correct: 3,
                    explanation: 'MySQL에서 database() 함수는 현재 사용 중인 데이터베이스 이름을 반환합니다.'
                },
            {
                    q: 'Python에서 bytes와 str을 변환하는 메서드는?',
                    options: [
                        'encode()/decode()',
                        'convert()',
                        'to_bytes()/to_str()',
                        'bytes()/str()'
                    ],
                    correct: 0,
                    explanation: 'str.encode()는 str을 bytes로, bytes.decode()는 bytes를 str로 변환합니다.'
                },
            {
                q: 'Web Shell의 주요 용도는?',
                options: ['웹사이트 디자인', '웹 서버 원격 제어', '데이터베이스 백업', '로그 분석'],
                correct: 1,
                explanation: 'Web Shell은 웹 서버에 업로드된 악성 스크립트로 브라우저를 통해 서버를 제어합니다.'
            },
            {
                    q: 'Privilege Escalation(권한 상승)의 목표는?',
                    options: [
                        'root → 일반 사용자',
                        '일반 사용자 → root/SYSTEM',
                        '권한 삭제',
                        '권한 분산'
                    ],
                    correct: 1,
                    explanation: '권한 상승은 낮은 권한에서 관리자(root/SYSTEM) 권한을 획득하는 것입니다.'
                },
            {
                q: 'Python으로 포트 스캔 시 소켓 타임아웃 설정 메서드는?',
                options: ['socket.timeout()', 'socket.settimeout()', 'socket.set_timeout()', 'socket.wait()'],
                correct: 1,
                explanation: 'socket.settimeout(초)는 소켓 연결 시도의 최대 대기 시간을 설정합니다.'
            },
            {
                    q: 'Information_schema 데이터베이스의 용도는?',
                    options: [
                        'DB 메타데이터 저장',
                        '사용자 데이터 저장',
                        '로그 저장',
                        '백업 저장'
                    ],
                    correct: 0,
                    explanation: 'information_schema는 데이터베이스, 테이블, 컬럼 등의 메타데이터를 저장합니다.'
                },
            {
                    q: 'UNION 기반 SQL Injection에서 UNION을 사용하는 이유는?',
                    options: [
                        '데이터 삭제',
                        '테이블 생성',
                        '두 쿼리 결과를 결합하여 정보 추출',
                        '인덱스 최적화'
                    ],
                    correct: 2,
                    explanation: 'UNION은 정상 쿼리와 악의적 쿼리의 결과를 합쳐 데이터를 추출합니다.'
                },
            {
                    q: 'Base64 인코딩의 주요 목적은?',
                    options: [
                        '암호화',
                        '압축',
                        '해싱',
                        '바이너리 데이터를 텍스트로 변환'
                    ],
                    correct: 3,
                    explanation: 'Base64는 바이너리 데이터를 ASCII 텍스트로 인코딩하여 전송/저장을 용이하게 합니다.'
                },
            {
                    q: 'Command Injection 공격에 사용되는 문자가 아닌 것은?',
                    options: [
                        '@',
                        ';',
                        '|',
                        '&'
                    ],
                    correct: 0,
                    explanation: '; | & && || 등은 명령어를 연결하여 추가 명령을 실행하는 데 사용됩니다.'
                },
            {
                    q: 'TeamCity CVE-2024-27198 취약점의 유형은?',
                    options: [
                        'Authentication Bypass',
                        'SQL Injection',
                        'XSS',
                        'CSRF'
                    ],
                    correct: 0,
                    explanation: 'CVE-2024-27198은 인증 우회 취약점으로 CVSS 9.8 Critical입니다.'
                },
            {
                    q: 'Keylogger의 주요 기능은?',
                    options: [
                        '키보드 입력 기록',
                        '암호 해독',
                        '화면 캡처만',
                        '네트워크 감청'
                    ],
                    correct: 0,
                    explanation: 'Keylogger는 사용자의 키보드 입력을 몰래 기록하여 비밀번호 등을 탈취합니다.'
                },
            {
                q: 'WAF(Web Application Firewall) 우회 기법이 아닌 것은?',
                options: ['대소문자 변환', '인코딩', '주석 삽입', 'DDoS 공격'],
                correct: 3,
                explanation: 'WAF 우회는 패턴 탐지를 회피하기 위한 기법이며, DDoS는 다른 공격 유형입니다.'
            },
            {
                    q: 'Python에서 XOR 연산자는?',
                    options: [
                        '^',
                        '&',
                        '|',
                        '~'
                    ],
                    correct: 0,
                    explanation: '^ 기호가 XOR(배타적 논리합) 연산자입니다.'
                },
            {
                    q: 'SQL 주석 기호로 올바른 것은?',
                    options: [
                        '-- 또는 #',
                        '//',
                        '-- 또는 # 또는 /* */',
                        '/* */'
                    ],
                    correct: 2,
                    explanation: 'SQL에서는 --, #, /* */ 모두 주석으로 사용됩니다.'
                },
            {
                q: 'SSRF(Server-Side Request Forgery) 공격의 목표는?',
                options: ['클라이언트 공격', '서버가 내부 리소스에 요청하도록 유도', '데이터 암호화', 'DNS 스푸핑'],
                correct: 1,
                explanation: 'SSRF는 서버를 이용해 내부 네트워크나 localhost의 리소스에 접근하는 공격입니다.'
            },
            {
                q: 'Lateral Movement의 의미는?',
                options: ['수직 이동', '수평 이동 (침투한 시스템에서 다른 시스템으로)', '외부 이동', '하향 이동'],
                correct: 1,
                explanation: 'Lateral Movement는 침투한 시스템을 발판 삼아 네트워크 내 다른 시스템으로 이동하는 것입니다.'
            },
            {
                    q: 'sudo -l 명령어의 용도는?',
                    options: [
                        '현재 사용자가 sudo로 실행 가능한 명령 확인',
                        '사용자 목록 확인',
                        '로그 확인',
                        '시스템 재시작'
                    ],
                    correct: 0,
                    explanation: 'sudo -l은 권한 상승 가능 경로를 찾기 위해 사용됩니다.'
                },
            {
                q: 'Python으로 HTTP GET 요청을 보낼 때 주로 사용하는 라이브러리는?',
                options: ['socket', 'requests', 'http', 'urllib'],
                correct: 1,
                explanation: 'requests 라이브러리는 간단하고 사용하기 쉬운 HTTP 클라이언트입니다.'
            },
            {
                    q: 'Persistence(지속성) 확보 기법이 아닌 것은?',
                    options: [
                        '일회성 명령 실행',
                        'cron 작업 등록',
                        '서비스 등록',
                        '백도어 설치'
                    ],
                    correct: 0,
                    explanation: 'Persistence는 시스템 재부팅 후에도 접근을 유지하기 위한 기법입니다.'
                },
            {
                    q: 'Hash 함수의 특징이 아닌 것은?',
                    options: [
                        '일방향',
                        '고정 길이 출력',
                        '충돌 저항성',
                        '복호화 가능'
                    ],
                    correct: 3,
                    explanation: '해시는 일방향 함수로 복호화가 불가능합니다.'
                },
            // 추가 30문제
            {
                q: 'Metasploit Framework의 주요 용도는?',
                options: ['웹 개발', 'Exploit 개발 및 테스트', '데이터 분석', '이메일 전송'],
                correct: 1,
                explanation: 'Metasploit은 침투 테스트를 위한 Exploit 개발 및 실행 프레임워크입니다.'
            },
            {
                    q: 'Nmap에서 스텔스 스캔을 수행하는 옵션은?',
                    options: [
                        '-sS',
                        '-sT',
                        '-sU',
                        '-sP'
                    ],
                    correct: 0,
                    explanation: '-sS(SYN Scan)는 3-way handshake를 완성하지 않아 로그에 덜 남습니다.'
                },
            {
                    q: 'SQL에서 여러 결과를 한 번에 실행하는 Stacked Query 공격에 사용되는 구분자는?',
                    options: [
                        ',',
                        '|',
                        ';',
                        '&'
                    ],
                    correct: 2,
                    explanation: '세미콜론(;)으로 여러 SQL 문을 연결하여 실행할 수 있습니다.'
                },
            {
                    q: 'XXE(XML External Entity) 공격의 목표는?',
                    options: [
                        'XML 파서를 통한 파일 읽기 또는 SSRF',
                        'SQL 실행',
                        'XSS',
                        'CSRF'
                    ],
                    correct: 0,
                    explanation: 'XXE는 XML 파서가 외부 엔티티를 처리할 때 로컬 파일을 읽거나 내부 요청을 보냅니다.'
                },
            {
                q: 'Burp Suite의 주요 기능이 아닌 것은?',
                options: ['프록시', 'Intruder(자동 공격)', '이미지 편집', 'Repeater'],
                correct: 2,
                explanation: 'Burp Suite는 웹 애플리케이션 보안 테스트 도구로 HTTP 트래픽 분석에 특화되어 있습니다.'
            },
            {
                    q: 'Dictionary Attack의 원리는?',
                    options: [
                        '사전에 있는 단어나 흔한 비밀번호 시도',
                        '무작위 시도',
                        '해시 충돌',
                        '알고리즘 취약점'
                    ],
                    correct: 0,
                    explanation: 'Dictionary Attack은 미리 준비한 단어 목록으로 비밀번호를 추측합니다.'
                },
            {
                    q: 'Wireshark의 주요 용도는?',
                    options: [
                        '포트 스캔',
                        '웹 서버 운영',
                        '패킷 캡처 및 분석',
                        '이미지 편집'
                    ],
                    correct: 2,
                    explanation: 'Wireshark는 네트워크 패킷을 캡처하고 분석하는 도구입니다.'
                },
            {
                q: 'CSRF Token의 목적은?',
                options: ['암호화', 'CSRF 공격 방어', 'SQL Injection 방어', 'XSS 방어'],
                correct: 1,
                explanation: 'CSRF Token은 각 세션에 고유한 토큰을 부여하여 위조 요청을 차단합니다.'
            },
            {
                q: 'Brute Force Attack과 Dictionary Attack의 차이는?',
                options: ['동일함', 'Brute Force는 모든 조합, Dictionary는 단어 목록', 'Dictionary가 더 느림', '차이 없음'],
                correct: 1,
                explanation: 'Brute Force는 모든 가능한 조합을, Dictionary는 흔한 비밀번호 목록을 시도합니다.'
            },
            {
                q: 'File Upload 취약점에서 위험한 파일 확장자가 아닌 것은?',
                options: ['.php', '.jsp', '.txt', '.asp'],
                correct: 2,
                explanation: '.txt는 실행되지 않지만, 서버 스크립트 확장자는 코드 실행이 가능합니다.'
            },
            {
                    q: 'Python requests 라이브러리의 주요 용도는?',
                    options: [
                        '파일 압축',
                        '이미지 처리',
                        'HTTP 요청 전송',
                        '데이터베이스 연결'
                    ],
                    correct: 2,
                    explanation: 'requests는 간편하게 HTTP GET, POST 등의 요청을 보낼 수 있는 라이브러리입니다.'
                },
            {
                    q: 'Social Engineering의 예시가 아닌 것은?',
                    options: [
                        'SQL Injection',
                        '피싱 이메일',
                        '가짜 전화',
                        '물리적 침입'
                    ],
                    correct: 0,
                    explanation: 'Social Engineering은 사람의 심리를 이용한 공격이며, SQL Injection은 기술적 공격입니다.'
                },
            {
                    q: 'Netcat의 주요 기능은?',
                    options: [
                        '웹 서버',
                        '이미지 뷰어',
                        'TCP/UDP 통신 도구',
                        'DB 관리'
                    ],
                    correct: 2,
                    explanation: 'Netcat은 네트워크 연결, 포트 리스닝, 파일 전송 등에 사용되는 다목적 도구입니다.'
                },
            {
                    q: 'Reflected XSS와 Stored XSS의 차이는?',
                    options: [
                        '동일함',
                        'Stored가 덜 위험',
                        '차이 없음',
                        'Reflected는 즉시 반사, Stored는 DB 저장'
                    ],
                    correct: 3,
                    explanation: 'Reflected는 URL 등에서 즉시 실행되고, Stored는 DB에 저장되어 여러 사용자에게 영향을 줍니다.'
                },
            {
                q: 'Hydra 도구의 주요 용도는?',
                options: ['포트 스캔', '로그인 브루트포스', '패킷 분석', '파일 다운로드'],
                correct: 1,
                explanation: 'Hydra는 SSH, FTP, HTTP 등 다양한 프로토콜의 로그인 브루트포스 공격 도구입니다.'
            },
            {
                    q: 'IDOR(Insecure Direct Object Reference) 취약점의 예시는?',
                    options: [
                        'SQL Injection',
                        'XSS',
                        'URL의 user_id 파라미터를 변경하여 다른 사용자 정보 접근',
                        'CSRF'
                    ],
                    correct: 2,
                    explanation: 'IDOR은 인가 검증 없이 객체 식별자를 직접 노출하여 발생합니다.'
                },
            {
                q: 'AES 암호화 알고리즘의 블록 크기는?',
                options: ['64비트', '128비트', '256비트', '512비트'],
                correct: 1,
                explanation: 'AES는 128비트 블록을 사용하며, 키 크기는 128/192/256비트가 가능합니다.'
            },
            {
                    q: 'DNS Spoofing(DNS Cache Poisoning)의 목표는?',
                    options: [
                        '잘못된 IP 주소로 리다이렉트',
                        '서버 다운',
                        'DB 삭제',
                        '암호화 해제'
                    ],
                    correct: 0,
                    explanation: 'DNS Spoofing은 DNS 캐시에 거짓 정보를 주입하여 피해자를 악성 사이트로 유도합니다.'
                },
            {
                    q: 'Man-in-the-Middle(MITM) 공격의 원리는?',
                    options: [
                        '서버 해킹',
                        'DB 주입',
                        '통신 중간에서 가로채기 및 조작',
                        '파일 업로드'
                    ],
                    correct: 2,
                    explanation: 'MITM은 공격자가 두 통신 주체 사이에 위치하여 데이터를 가로채거나 변조합니다.'
                },
            {
                    q: 'Nmap에서 운영체제를 탐지하는 옵션은?',
                    options: [
                        '-O 또는 -A',
                        '-O',
                        '-A',
                        '-sV'
                    ],
                    correct: 0,
                    explanation: '-O는 OS 탐지, -A는 OS 탐지와 버전 탐지를 모두 수행합니다.'
                },
            {
                    q: 'LFI(Local File Inclusion) 취약점으로 읽을 수 있는 파일의 예시는?',
                    options: [
                        '외부 URL',
                        '원격 이미지',
                        'DB 테이블',
                        '/etc/passwd'
                    ],
                    correct: 3,
                    explanation: 'LFI는 로컬 파일 시스템의 파일을 웹 애플리케이션을 통해 읽을 수 있는 취약점입니다.'
                },
            {
                q: 'John the Ripper의 주요 용도는?',
                options: ['포트 스캔', '비밀번호 크래킹', '네트워크 모니터링', '웹 스크래핑'],
                correct: 1,
                explanation: 'John the Ripper는 해시된 비밀번호를 크래킹하는 도구입니다.'
            },
            {
                    q: 'Session Hijacking 공격의 목표는?',
                    options: [
                        '사용자 세션 탈취',
                        '서버 다운',
                        'DB 삭제',
                        'DNS 변조'
                    ],
                    correct: 0,
                    explanation: 'Session Hijacking은 유효한 세션 ID를 탈취하여 정당한 사용자로 가장합니다.'
                },
            {
                q: 'Nikto 도구의 주요 기능은?',
                options: ['포트 스캔', '웹 서버 취약점 스캔', 'DB 백업', '이메일 전송'],
                correct: 1,
                explanation: 'Nikto는 웹 서버의 설정 오류, 오래된 버전, 알려진 취약점을 스캔합니다.'
            },
            {
                    q: 'Rainbow Table Attack의 원리는?',
                    options: [
                        '미리 계산된 해시 테이블 사용',
                        '무작위 시도',
                        'SQL 주입',
                        '네트워크 스니핑'
                    ],
                    correct: 0,
                    explanation: 'Rainbow Table은 해시값과 평문을 미리 계산하여 빠르게 비밀번호를 역추적합니다.'
                },
            {
                q: 'OS Command Injection 방어 방법이 아닌 것은?',
                options: ['입력 검증', '화이트리스트 사용', 'SQL Prepared Statement', 'API 사용'],
                correct: 2,
                explanation: 'SQL Prepared Statement는 SQL Injection 방어에 사용되며, Command Injection과는 무관합니다.'
            },
            {
                    q: 'Clickjacking 공격의 원리는?',
                    options: [
                        'SQL 주입',
                        'XSS',
                        'CSRF',
                        '보이지 않는 iframe으로 클릭 유도'
                    ],
                    correct: 3,
                    explanation: 'Clickjacking은 투명한 iframe을 덮어 사용자가 의도하지 않은 동작을 클릭하게 만듭니다.'
                },
            {
                    q: 'Subdomain Takeover 취약점의 조건은?',
                    options: [
                        '강한 비밀번호',
                        'SSL 인증서',
                        '방화벽',
                        '사용되지 않는 서브도메인의 CNAME 레코드'
                    ],
                    correct: 3,
                    explanation: '삭제된 서비스를 가리키는 CNAME이 남아있으면 공격자가 해당 서브도메인을 장악할 수 있습니다.'
                },
            {
                    q: 'Gobuster 또는 Dirb의 주요 용도는?',
                    options: [
                        '디렉토리 및 파일 브루트포스',
                        '포트 스캔',
                        'DB 백업',
                        'DNS 조회'
                    ],
                    correct: 0,
                    explanation: 'Gobuster와 Dirb는 숨겨진 디렉토리와 파일을 찾기 위한 브루트포스 도구입니다.'
                },
            {
                    q: 'Same-Origin Policy의 목적은?',
                    options: [
                        '다른 출처 간 악의적 접근 차단',
                        '속도 향상',
                        'DB 보호',
                        '네트워크 최적화'
                    ],
                    correct: 0,
                    explanation: 'Same-Origin Policy는 스크립트가 다른 출처의 리소스에 접근하는 것을 제한합니다.'
                }
        ]
    },

    // ========== 4. 취약점 진단 및 대응 실무 (30문제) ==========
    vulnerabilityAssessment: {
        title: '취약점 진단 및 대응 실무',
        totalQuestions: 30,
        questions: [
            {
                    q: 'CVE(Common Vulnerabilities and Exposures)의 주요 목적은?',
                    options: [
                        '취약점 수정',
                        '해킹 도구 제공',
                        '보안 교육',
                        '취약점에 고유 식별자 부여'
                    ],
                    correct: 3,
                    explanation: 'CVE는 공개적으로 알려진 취약점에 고유 번호를 부여하여 표준화된 참조를 가능하게 합니다.'
                },
            {
                    q: 'CVSS(Common Vulnerability Scoring System) 점수의 최대값은?',
                    options: [
                        '5.0',
                        '10.0',
                        '7.5',
                        '9.0'
                    ],
                    correct: 1,
                    explanation: 'CVSS는 0.0~10.0 척도로 취약점의 심각도를 평가하며, 10.0이 가장 심각합니다.'
                },
            {
                    q: 'CVSS 9.0-10.0 범위의 등급은?',
                    options: [
                        'Low',
                        'Critical',
                        'Medium',
                        'High'
                    ],
                    correct: 1,
                    explanation: 'Critical(9.0-10.0), High(7.0-8.9), Medium(4.0-6.9), Low(0.1-3.9)로 분류됩니다.'
                },
            {
                    q: 'Spring4Shell 취약점에 필요한 최소 JDK 버전은?',
                    options: [
                        'JDK 9',
                        'JDK 8',
                        'JDK 11',
                        'JDK 17'
                    ],
                    correct: 0,
                    explanation: 'JDK 9부터 도입된 모듈 시스템을 악용하므로 JDK 9 이상이 필요합니다.'
                },
            {
                    q: 'Linux /etc/shadow 파일에 저장되는 정보는?',
                    options: [
                        '사용자 이름',
                        '홈 디렉토리',
                        '로그인 쉘',
                        '암호화된 비밀번호'
                    ],
                    correct: 3,
                    explanation: '/etc/shadow는 암호화된 비밀번호 해시와 비밀번호 정책 정보를 저장합니다.'
                },
            {
                    q: 'SSH 기본 포트 번호는?',
                    options: [
                        '22',
                        '21',
                        '23',
                        '3389'
                    ],
                    correct: 0,
                    explanation: 'SSH는 22번, FTP는 21번, Telnet은 23번, RDP는 3389번 포트를 사용합니다.'
                },
            {
                    q: 'Linux에서 PermitRootLogin 설정의 안전한 값은?',
                    options: [
                        'no 또는 without-password',
                        'yes',
                        'no',
                        'without-password'
                    ],
                    correct: 0,
                    explanation: 'root 직접 로그인을 막거나 비밀번호 로그인을 금지하여 보안을 강화합니다.'
                },
            {
                    q: 'CISA KEV(Known Exploited Vulnerabilities) 목록의 의미는?',
                    options: [
                        '실제 악용되고 있는 취약점',
                        '이론적 취약점',
                        '패치된 취약점',
                        '낮은 위험도 취약점'
                    ],
                    correct: 0,
                    explanation: 'KEV는 야생에서 실제로 악용되고 있는 취약점 목록으로 우선 패치가 필요합니다.'
                },
            {
                q: 'CWE-288의 분류는?',
                options: ['SQL Injection', 'XSS', '인증 메커니즘 우회', 'Buffer Overflow'],
                correct: 2,
                explanation: 'CWE-288은 Authentication Bypass(인증 우회) 취약점을 분류합니다.'
            },
            {
                    q: 'Linux 파일 권한 644의 의미는?',
                    options: [
                        'rw-r--r--',
                        'rwxrw-r--',
                        'r--r--r--',
                        'rwxrwxr--'
                    ],
                    correct: 0,
                    explanation: '6(rw-), 4(r--), 4(r--)로 소유자는 읽기/쓰기, 그룹과 기타는 읽기만 가능합니다.'
                },
            {
                    q: 'Spring4Shell에서 조작되는 Tomcat 컴포넌트는?',
                    options: [
                        'Manager',
                        'Connector',
                        'Engine',
                        'AccessLogValve'
                    ],
                    correct: 3,
                    explanation: 'AccessLogValve의 로그 패턴과 경로를 조작하여 웹셸 파일을 생성합니다.'
                },
            {
                    q: 'TeamCity 침해가 특히 위험한 이유는?',
                    options: [
                        '많은 사용자',
                        '고속 확산',
                        'CI/CD 공급망 공격 가능',
                        '데이터베이스 연결'
                    ],
                    correct: 2,
                    explanation: 'CI/CD 서버는 빌드, 배포, 자격증명을 관리하여 공급망 전체를 위협할 수 있습니다.'
                },
            {
                    q: '/etc/passwd 파일의 두 번째 필드(x 또는 *)의 의미는?',
                    options: [
                        '비밀번호 해시',
                        '계정 잠김',
                        '비밀번호가 /etc/shadow에 있음',
                        '만료됨'
                    ],
                    correct: 2,
                    explanation: 'x는 실제 비밀번호 해시가 /etc/shadow에 저장되어 있음을 나타냅니다.'
                },
            {
                    q: 'Linux에서 파일의 특수 권한 중 SetGID의 숫자 표기는?',
                    options: [
                        '2000',
                        '1000',
                        '4000',
                        '0755'
                    ],
                    correct: 0,
                    explanation: 'SetUID는 4000, SetGID는 2000, Sticky Bit는 1000입니다.'
                },
            {
                    q: 'SQL Injection 방어 방법이 아닌 것은?',
                    options: [
                        'Prepared Statement 사용',
                        '입력값 검증',
                        'ORM 사용',
                        '에러 메시지 노출'
                    ],
                    correct: 3,
                    explanation: '에러 메시지 노출은 공격자에게 정보를 제공하므로 피해야 합니다.'
                },
            {
                    q: 'sshd_config에서 패스워드 인증을 비활성화하는 설정은?',
                    options: [
                        'PasswordAuthentication yes',
                        'PubkeyAuthentication no',
                        'PasswordAuthentication no',
                        'PermitEmptyPasswords yes'
                    ],
                    correct: 2,
                    explanation: 'PasswordAuthentication no로 설정하고 키 기반 인증만 허용하는 것이 안전합니다.'
                },
            {
                    q: 'OWASP Top 10에 포함되는 취약점이 아닌 것은?',
                    options: [
                        'DDoS',
                        'Injection',
                        'Broken Authentication',
                        'XSS'
                    ],
                    correct: 0,
                    explanation: 'OWASP Top 10은 웹 애플리케이션의 주요 취약점을 다루며, DDoS는 네트워크 공격입니다.'
                },
            {
                    q: 'Linux 계정의 UID 0이 의미하는 것은?',
                    options: [
                        '일반 사용자',
                        '시스템 계정',
                        'root 사용자',
                        '게스트 계정'
                    ],
                    correct: 2,
                    explanation: 'UID 0은 항상 root(관리자) 계정을 의미합니다.'
                },
            {
                    q: 'XSS(Cross-Site Scripting) 공격의 주요 목표는?',
                    options: [
                        '사용자 브라우저에서 악성 스크립트 실행',
                        '서버 해킹',
                        'DB 접근',
                        '네트워크 마비'
                    ],
                    correct: 0,
                    explanation: 'XSS는 웹 페이지에 악성 스크립트를 삽입하여 사용자 브라우저에서 실행시킵니다.'
                },
            {
                    q: 'Spring4Shell 패치가 적용된 Spring Framework 5.3.x 버전은?',
                    options: [
                        '5.3.15',
                        '5.3.17',
                        '5.3.20',
                        '5.3.18'
                    ],
                    correct: 3,
                    explanation: 'Spring Framework 5.3.18 이상에서 CVE-2022-22965가 패치되었습니다.'
                },
            {
                    q: 'Linux에서 최근 로그인 기록을 확인하는 명령어는?',
                    options: [
                        'last',
                        'history',
                        'who',
                        'logcheck'
                    ],
                    correct: 0,
                    explanation: 'last 명령어는 /var/log/wtmp 파일을 읽어 로그인 기록을 보여줍니다.'
                },
            {
                q: 'CSRF(Cross-Site Request Forgery) 공격 방어 방법은?',
                options: ['HTTPS 사용', 'CSRF 토큰 사용', '방화벽 설정', '안티바이러스'],
                correct: 1,
                explanation: 'CSRF 토큰은 각 요청마다 무작위 값을 생성하여 정당한 요청인지 검증합니다.'
            },
            {
                    q: 'Linux에서 cron 작업을 통한 악성코드 지속성 확인 방법은?',
                    options: [
                        'ps aux',
                        'netstat',
                        'ls -la',
                        'crontab -l'
                    ],
                    correct: 3,
                    explanation: 'crontab -l로 현재 사용자의 예약된 작업을 확인할 수 있습니다.'
                },
            {
                    q: 'Path Traversal 공격에 사용되는 문자열은?',
                    options: [
                        '; | &',
                        '<script>',
                        '1',
                        '../'
                    ],
                    correct: 3,
                    explanation: '../ 또는 ..\\\\를 사용하여 의도하지 않은 디렉토리에 접근합니다.'
                },
            {
                    q: '취약점 점검 주기로 가장 적절한 것은?',
                    options: [
                        '10년마다',
                        '1년마다',
                        '필요 없음',
                        '정기적 + 주요 변경 시'
                    ],
                    correct: 3,
                    explanation: '정기적인 점검과 함께 시스템 변경, 신규 취약점 발표 시 추가 점검이 필요합니다.'
                },
            {
                    q: 'Linux에서 SUID 파일을 찾는 명령어는?',
                    options: [
                        'ls -l / | grep suid',
                        'locate suid',
                        'find / -perm -4000',
                        'ps aux'
                    ],
                    correct: 2,
                    explanation: 'find / -perm -4000은 SetUID 비트가 설정된 모든 파일을 찾습니다.'
                },
            {
                    q: 'Zero-Day 취약점의 의미는?',
                    options: [
                        '패치된 취약점',
                        '벤더가 모르는 취약점',
                        '발견 후 패치까지 0일',
                        '위험도 0'
                    ],
                    correct: 1,
                    explanation: 'Zero-Day는 벤더가 인지하지 못해 패치가 없는 취약점으로 매우 위험합니다.'
                },
            {
                    q: 'SQL Injection 탐지를 위해 모니터링해야 할 패턴이 아닌 것은?',
                    options: [
                        '1',
                        'UNION SELECT',
                        'SELECT * FROM users',
                        '-- 또는 #'
                    ],
                    correct: 2,
                    explanation: '일반적인 SELECT 문은 정상 쿼리일 수 있으며, 악의적 패턴과 함께 있을 때 의심해야 합니다.'
                },
            {
                    q: 'Linux 시스템 로그 파일이 주로 저장되는 디렉토리는?',
                    options: [
                        '/tmp',
                        '/home',
                        '/etc',
                        '/var/log'
                    ],
                    correct: 3,
                    explanation: '/var/log 디렉토리에 auth.log, syslog, kern.log 등 시스템 로그가 저장됩니다.'
                },
            {
                q: 'Vulnerability Scanning과 Penetration Testing의 차이는?',
                options: ['같은 것', '스캐닝은 자동, 침투 테스트는 수동 공격 시뮬레이션', '스캐닝이 더 위험', '차이 없음'],
                correct: 1,
                explanation: '취약점 스캔은 알려진 취약점을 자동 탐지하고, 침투 테스트는 실제 공격을 시뮬레이션합니다.'
            },
            // 추가 30문제
            {
                q: 'PCI DSS의 주요 목적은?',
                options: ['소프트웨어 개발', '카드 결제 데이터 보호', '네트워크 속도', '이메일 보안'],
                correct: 1,
                explanation: 'PCI DSS(Payment Card Industry Data Security Standard)는 카드 정보 보호를 위한 보안 표준입니다.'
            },
            {
                q: 'OpenVAS의 주요 기능은?',
                options: ['웹 개발', '취약점 스캐닝', '이메일 전송', '파일 압축'],
                correct: 1,
                explanation: 'OpenVAS는 오픈소스 취약점 스캐너로 네트워크와 시스템의 취약점을 탐지합니다.'
            },
            {
                    q: 'Patch Management의 가장 중요한 원칙은?',
                    options: [
                        '빠를수록 좋다',
                        '모든 패치 거부',
                        '자동화만 사용',
                        '테스트 후 적용'
                    ],
                    correct: 3,
                    explanation: '패치는 테스트 환경에서 검증 후 프로덕션에 적용해야 시스템 안정성을 보장합니다.'
                },
            {
                    q: 'Linux에서 fail2ban의 주요 기능은?',
                    options: [
                        '백업',
                        '로그 삭제',
                        '반복적인 로그인 실패 시 IP 차단',
                        '파일 암호화'
                    ],
                    correct: 2,
                    explanation: 'fail2ban은 로그를 모니터링하여 비정상적인 접근 시도를 차단합니다.'
                },
            {
                    q: 'TLS/SSL 인증서의 주요 목적은?',
                    options: [
                        '속도 향상',
                        'DB 백업',
                        '로그 수집',
                        '암호화 통신 및 신원 확인'
                    ],
                    correct: 3,
                    explanation: 'TLS/SSL 인증서는 통신 암호화와 서버 신원 확인을 제공합니다.'
                },
            {
                q: 'SELinux의 주요 기능은?',
                options: ['UI 개선', '강제 접근 제어(MAC)', '파일 압축', '네트워크 속도 향상'],
                correct: 1,
                explanation: 'SELinux는 Mandatory Access Control로 추가적인 보안 계층을 제공합니다.'
            },
            {
                    q: 'Nessus의 주요 용도는?',
                    options: [
                        '취약점 스캐닝',
                        '웹 디자인',
                        '동영상 편집',
                        'DB 관리'
                    ],
                    correct: 0,
                    explanation: 'Nessus는 상용 취약점 스캐너로 광범위한 취약점 데이터베이스를 제공합니다.'
                },
            {
                    q: 'Linux에서 비밀번호 정책을 설정하는 파일은?',
                    options: [
                        '/etc/passwd',
                        '/etc/shadow',
                        '/etc/ssh/sshd_config',
                        '/etc/login.defs'
                    ],
                    correct: 3,
                    explanation: '/etc/login.defs에서 비밀번호 만료, 최소 길이 등의 정책을 설정합니다.'
                },
            {
                    q: 'SIEM의 주요 기능이 아닌 것은?',
                    options: [
                        '이미지 편집',
                        '로그 수집',
                        '실시간 분석',
                        '보안 이벤트 상관분석'
                    ],
                    correct: 0,
                    explanation: 'SIEM(Security Information and Event Management)은 보안 로그 통합 관리 시스템입니다.'
                },
            {
                    q: 'Defense in Depth 전략의 의미는?',
                    options: [
                        '단일 보안 계층',
                        '보안 무시',
                        '다층 보안 방어',
                        '속도 우선'
                    ],
                    correct: 2,
                    explanation: 'Defense in Depth는 여러 보안 계층을 두어 하나가 뚫려도 다른 계층으로 방어하는 전략입니다.'
                },
            {
                    q: 'Linux iptables의 주요 용도는?',
                    options: [
                        '파일 편집',
                        '사용자 관리',
                        '백업',
                        '방화벽 규칙 설정'
                    ],
                    correct: 3,
                    explanation: 'iptables는 Linux 커널의 패킷 필터링 기능을 설정하는 방화벽 도구입니다.'
                },
            {
                    q: 'Secure by Default 원칙의 의미는?',
                    options: [
                        '보안 기능 모두 비활성화',
                        '성능 우선',
                        '편의성 우선',
                        '기본 설정이 가장 안전하게'
                    ],
                    correct: 3,
                    explanation: '시스템과 애플리케이션은 기본 상태에서 가장 안전하게 설정되어야 합니다.'
                },
            {
                    q: 'Intrusion Detection System(IDS)와 Intrusion Prevention System(IPS)의 차이는?',
                    options: [
                        '동일함',
                        'IPS가 더 느림',
                        'IDS는 탐지만, IPS는 차단도 수행',
                        '차이 없음'
                    ],
                    correct: 2,
                    explanation: 'IDS는 침입을 탐지하여 알림을 보내고, IPS는 탐지 후 자동으로 차단합니다.'
                },
            {
                    q: 'Linux에서 sudo 로그를 확인할 수 있는 파일은?',
                    options: [
                        '/var/log/auth.log 또는 /var/log/secure',
                        '/var/log/auth.log',
                        '/var/log/messages',
                        '/etc/sudoers'
                    ],
                    correct: 0,
                    explanation: 'Debian 계열은 /var/log/auth.log, RedHat 계열은 /var/log/secure에 sudo 로그가 기록됩니다.'
                },
            {
                    q: 'Principle of Least Privilege의 의미는?',
                    options: [
                        '최소한의 필요 권한만 부여',
                        '모든 권한 부여',
                        '권한 무시',
                        '관리자 권한 남용'
                    ],
                    correct: 0,
                    explanation: '사용자와 프로세스에게 작업 수행에 필요한 최소한의 권한만 부여해야 합니다.'
                },
            {
                    q: 'WAF(Web Application Firewall)의 주요 목적은?',
                    options: [
                        '네트워크 속도',
                        'DB 백업',
                        '웹 애플리케이션 공격 차단',
                        '이메일 필터링'
                    ],
                    correct: 2,
                    explanation: 'WAF는 SQL Injection, XSS 등 웹 애플리케이션 레벨의 공격을 탐지하고 차단합니다.'
                },
            {
                    q: 'Linux에서 특정 포트를 사용하는 프로세스를 확인하는 명령어는?',
                    options: [
                        'ps',
                        'top',
                        'netstat -tulpn',
                        'ls'
                    ],
                    correct: 2,
                    explanation: 'netstat -tulpn 또는 lsof -i:포트번호로 포트를 사용하는 프로세스를 확인합니다.'
                },
            {
                    q: 'Hardening의 의미는?',
                    options: [
                        '시스템 느리게',
                        '모든 기능 활성화',
                        '백업',
                        '불필요한 서비스 제거 및 보안 강화'
                    ],
                    correct: 3,
                    explanation: 'Hardening은 공격 표면을 줄이고 보안 설정을 강화하는 과정입니다.'
                },
            {
                    q: 'Common Weakness Enumeration(CWE)의 목적은?',
                    options: [
                        '취약점 수정',
                        '성능 측정',
                        '소프트웨어 약점 분류 체계',
                        '사용자 관리'
                    ],
                    correct: 2,
                    explanation: 'CWE는 소프트웨어 취약점을 체계적으로 분류하고 정의하는 표준입니다.'
                },
            {
                q: 'Linux AppArmor의 주요 기능은?',
                options: ['UI 테마', '애플리케이션 접근 제어', '파일 압축', '네트워크 모니터링'],
                correct: 1,
                explanation: 'AppArmor는 프로그램별로 파일 시스템 접근을 제한하는 MAC 시스템입니다.'
            },
            {
                    q: 'Security Baseline의 의미는?',
                    options: [
                        '최대 보안',
                        '보안 무시',
                        '성능 기준',
                        '조직의 최소 보안 요구사항'
                    ],
                    correct: 3,
                    explanation: 'Security Baseline은 모든 시스템이 충족해야 하는 최소 보안 설정 기준입니다.'
                },
            {
                    q: 'Linux에서 파일 무결성을 검증하는 도구는?',
                    options: [
                        'AIDE',
                        '모두 가능',
                        'Tripwire',
                        'OSSEC'
                    ],
                    correct: 1,
                    explanation: 'AIDE, Tripwire, OSSEC 모두 파일 변경 사항을 탐지하는 무결성 검증 도구입니다.'
                },
            {
                    q: 'OWASP ASVS의 목적은?',
                    options: [
                        '웹 디자인',
                        '네트워크 설계',
                        '애플리케이션 보안 검증 표준',
                        'DB 설계'
                    ],
                    correct: 2,
                    explanation: 'ASVS(Application Security Verification Standard)는 웹 앱 보안 요구사항 표준입니다.'
                },
            {
                    q: 'Linux에서 로그 로테이션을 담당하는 도구는?',
                    options: [
                        'cron',
                        'syslog',
                        'journalctl',
                        'logrotate'
                    ],
                    correct: 3,
                    explanation: 'logrotate는 로그 파일을 주기적으로 압축, 백업, 삭제하여 디스크 공간을 관리합니다.'
                },
            {
                    q: 'Blue Team과 Red Team의 차이는?',
                    options: [
                        '동일함',
                        'Red가 방어',
                        'Blue는 방어, Red는 공격',
                        '색깔만 다름'
                    ],
                    correct: 2,
                    explanation: 'Red Team은 공격자 역할로 침투를 시도하고, Blue Team은 방어자 역할로 탐지와 대응을 수행합니다.'
                },
            {
                    q: 'Whitelisting과 Blacklisting 중 더 안전한 방법은?',
                    options: [
                        'Blacklisting',
                        '동일함',
                        'Whitelisting',
                        '둘 다 위험'
                    ],
                    correct: 2,
                    explanation: 'Whitelisting은 허용된 것만 실행하므로 알려지지 않은 위협도 차단할 수 있습니다.'
                },
            {
                    q: 'Linux에서 TCP Wrapper를 설정하는 파일은?',
                    options: [
                        '/etc/passwd',
                        '/etc/ssh/sshd_config',
                        '/etc/sudoers',
                        '/etc/hosts.allow와 /etc/hosts.deny'
                    ],
                    correct: 3,
                    explanation: 'TCP Wrapper는 hosts.allow와 hosts.deny로 서비스 접근을 제어합니다.'
                },
            {
                    q: 'Incident Response Plan의 주요 단계가 아닌 것은?',
                    options: [
                        '마케팅',
                        '준비',
                        '탐지 및 분석',
                        '억제 및 복구'
                    ],
                    correct: 0,
                    explanation: 'Incident Response는 준비, 탐지, 분석, 억제, 제거, 복구, 사후 검토로 구성됩니다.'
                },
            {
                q: 'Attack Surface의 의미는?',
                options: ['공격 횟수', '공격자가 접근 가능한 진입점', '방어 강도', '네트워크 속도'],
                correct: 1,
                explanation: 'Attack Surface는 시스템이 외부에 노출한 모든 취약 지점의 합입니다.'
            },
            {
                q: 'Linux auditd의 주요 기능은?',
                options: ['성능 모니터링', '시스템 감사 및 로깅', '백업', '네트워크 설정'],
                correct: 1,
                explanation: 'auditd는 시스템 콜, 파일 접근 등을 감사하여 보안 이벤트를 기록합니다.'
            }
        ]
    }
};

// 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions };
}

// 브라우저 전역 변수로 명시적 노출
if (typeof window !== 'undefined') {
    window.examQuestions = examQuestions;
}
