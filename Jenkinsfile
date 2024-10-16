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
                sh 'ls node_modules'
                sh 'docker ps -a'
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
