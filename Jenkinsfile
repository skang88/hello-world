pipeline {
    agent any
    tools {
        nodejs 'NodeJs'  // Jenkins에서 설정한 Nodejs 도구의 이름을 지정
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/skang88/hello-world.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build and Run') {
            steps {
                script {
                    // Docker 이미지를 빌드
                    sh 'docker build -t your-node-image .'

                    // 기존 컨테이너가 있다면 중지하고 삭제
                    sh 'docker stop node-app || true && docker rm node-app || true'

                    // 새 컨테이너를 생성하여 포트 3000에서 실행
                    sh 'docker run -d --name node-app --network jenkins-network -p 3000:3000 your-node-image'
                }
            }
        }
    }
}
    