pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Jenkins에서 설정한 Nodejs 도구의 이름을 지정
    }
    stages {
        stage('Build') { 
            steps {
                sh 'pwd'
                sh 'ls'
                sh 'node -v'
                sh 'npm -v'
                sh 'npm run build'
            }
        }
        stage('Deliver') {
            steps {
                sh 'node app.js'
            }
        }
    }
}