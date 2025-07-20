pipeline {
    agent any
    tools {
        nodejs 'NodeJs'
    }
    environment {
        // 환경변수 PORT 정의 (필요에 따라 변경 가능)
        // Jenkins 관리 -> Security -> Credentials 에서 수정
        // 노출되지 않음. 
        PORT = credentials('PORT')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/skang88/hello-world.git'
            }
        }

        stage('No Install Dependencies') {
            steps {
                sh 'pwd'
                sh 'dir'
                // Jenkins에서 Docker 명령어를 쓰려면 Jenkins 내부에 Docker를 설치하여야 함. (별도 설정)
                sh 'docker ps -a'
                echo '${WORKSPACE}'
            }
        }

        stage('Build') { 
            steps {
                sh 'docker build -t hello-world .'
            }
        }
        stage('Stop & Remove Old Container') {
            steps {
                // 기존 컨테이너 중지 및 제거 (컨테이너 이름은 'hello-world'로 가정)
                sh 'docker stop hello-world || true'
                sh 'docker rm hello-world || true'
            }
        }
        stage('Run New Container') {
            steps {
                // 새로 빌드한 이미지를 사용하여 새로운 컨테이너 실행
                // 호스트 PC의 c:/env/.env 파일을 컨테이너 내부로 전달하여 .env 파일 사용할 수 있음.
                sh 'docker run -d --name hello-world --restart always -p ${PORT}:3000 -v C:/env/.env:/usr/src/app/.env hello-world'
            }
        }
    }
}
