pipeline {
    agent any
    tools {
        nodejs 'NodeJs'
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
                    sh 'docker build -t node-app .'
                    sh 'docker run -d -p 3000:3000 --name node-app node-app'
                }
            }
        }
    }
}
