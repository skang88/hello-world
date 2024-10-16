pipeline {
    agent any
    tools {
        nodejs 'NodeJs'
    }
    environment {
        // 환경변수 PORT 정의 (필요에 따라 변경 가능)
        PORT = "${hello-world-port}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/skang88/hello-world.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') { 
            steps {
                sh 'docker build -t node-app .'
            }
        }
        stage('Stop & Remove Old Container') {
            steps {
                // 기존 컨테이너 중지 및 제거 (컨테이너 이름은 'node-app'로 가정)
                sh 'docker stop node-app || true'
                sh 'docker rm node-app || true'
            }
        }
        stage('Run New Container') {
            steps {
                // 새로 빌드한 이미지를 사용하여 새로운 컨테이너 실행
                sh 'docker run -d --name node-app -p ${PORT}:3000 node-app'
            }
        }
    }
}
